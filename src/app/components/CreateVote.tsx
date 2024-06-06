"use client";

import { useState, FormEvent } from 'react';
import axios from 'axios';

const CreateVote: React.FC = () => {
    const [voteId, setVoteId] = useState<string>('');
    const [options, setOptions] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            console.log({ voteId, options: options.split(',') });
            await axios.post('/api/vote', { voteId, options: options.split(',') });
            setVoteId('');
            setOptions('');
        } catch (error: any) {
            console.error("Error creating vote:", error);
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
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                placeholder="Options (comma separated)"
                required
            />
            <button type="submit">Create Vote</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default CreateVote;
