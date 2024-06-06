"use client";

import { useState } from 'react';

import CreateVote from './components/CreateVote';
import Vote from './components/Vote';
import Results from './components/Results';

const Home: React.FC = () => {
    const [voteId, setVoteId] = useState<string>('');

    return (
        <div>
            <h1>Decentralized Voting System</h1>
            <h2>(XRPL Testnet)</h2>
            <CreateVote />
            <Vote />
            <input
                type="text"
                value={voteId}
                onChange={(e) => setVoteId(e.target.value)}
                placeholder="Enter Vote ID to see results"
            />
            {voteId && <Results voteId={voteId} />}
        </div>
    );
};

export default Home;
