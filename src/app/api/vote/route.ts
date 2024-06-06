import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'xrpl';

const client = new Client('wss://s.altnet.rippletest.net:51233');

interface Vote {
    options: string[];
    votes: { [key: string]: string };
}

let votes: { [key: string]: Vote } = {};

export async function POST(req: NextRequest) {
    try {
        await client.connect();

        const { voteId, options, user, option } = await req.json();

        if (voteId && options) {
            // Create a new vote
            votes[voteId] = { options, votes: {} };
            await client.disconnect();
            console.log(`Vote created: ${voteId}`);
            return NextResponse.json({ message: 'Vote created' });
        } else if (voteId && user && option) {
            // Record a vote
            if (votes[voteId] && votes[voteId].options.includes(option)) {
                votes[voteId].votes[user] = option;
                await client.disconnect();
                console.log(`Vote recorded: ${voteId}, User: ${user}, Option: ${option}`);
                return NextResponse.json({ message: 'Vote recorded' });
            } else {
                await client.disconnect();
                console.error('Invalid vote');
                return NextResponse.json({ message: 'Invalid vote' }, { status: 400 });
            }
        } else {
            await client.disconnect();
            console.error('Invalid request');
            return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error handling POST request:', error);
        await client.disconnect();
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const voteId = searchParams.get('voteId');

        if (voteId && votes[voteId]) {
            console.log(`Results fetched for vote: ${voteId}`);
            return NextResponse.json(votes[voteId].votes);
        } else {
            console.error('Vote not found');
            return NextResponse.json({ message: 'Vote not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error handling GET request:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
