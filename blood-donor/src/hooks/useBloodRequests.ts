import { useState, useEffect } from 'react';

interface BloodRequest {
    id: string;
    type: string;
    location: string;
    date: string;
    urgency: string;
    bagsNeeded: number;
}

export const useBloodRequests = () => {
    const [requests, setRequests] = useState<BloodRequest[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/blood-requests');
            const data = await response.json();
            setRequests(data);
        } catch (err) {
            setError('Failed to fetch blood requests');
        } finally {
            setLoading(false);
        }
    };

    const addRequest = async (newRequest: Omit<BloodRequest, 'id'>) => {
        try {
            const response = await fetch('/api/blood-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRequest),
            });
            const data = await response.json();
            setRequests(prev => [...prev, data]);
        } catch (err) {
            setError('Failed to add blood request');
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return { requests, loading, error, addRequest, fetchRequests };
}; 