"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

interface ResultsProps {
    voteId: string;
}

const Results: React.FC<ResultsProps> = ({ voteId }) => {
    const [results, setResults] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
            setError(null);
            try {
                const response = await axios.get(`/api/vote?voteId=${voteId}`);
                setResults(response.data);
            } catch (error: any) {
                console.error("Error fetching results:", error);
                setError(error.response?.data?.message || "An error occurred");
            }
        };

        if (voteId) {
            fetchResults();
        }
    }, [voteId]);

    return (
        <div>
            <h3>Results for {voteId}</h3>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <pre>{JSON.stringify(results, null, 2)}</pre>
            )}
        </div>
    );
};

export default Results;
