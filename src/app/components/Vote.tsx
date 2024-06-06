"use client";

import { useState, FormEvent } from 'react';
import axios from 'axios';

const Vote: React.FC = () => {
    const [voteId, setVoteId] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [option, setOption] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            console.log({ voteId, user, option });
            await axios.post('/api/vote', { voteId, user, option });
            setVoteId('');
            setUser('');
            setOption('');
        } catch (error: any) {
            console.error("Error recording vote:", error);
            setError(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={voteId}
                onChange={(e) => setVoteId(e.target.value)}
                placeholder="Vote ID"
                required
            />
            <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="User"
                required
            />
            <input
                type="text"
                value={option}
                onChange={(e) => setOption(e.target.value)}
                placeholder="Option"
                required
            />
            <button type="submit">Vote</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default Vote;
