import { useState, useEffect } from 'react';
import { BLOOD_REQUEST_MOCK_DATA } from '../data';

interface BloodRequest {
    id: string;
    type: string;
    location: string;
    date: string;
    urgency: string;
    bagsNeeded: number;
    patientName: string;
    contactNumber: string;
    hospitalAddress: string;
    additionalNotes: string;
    postedBy: string;
    status: string;
}

export const useBloodRequests = () => {
    const [requests, setRequests] = useState<BloodRequest[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Simulate API call with mock data
    const fetchRequests = async () => {
        setLoading(true);
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setRequests(BLOOD_REQUEST_MOCK_DATA as unknown as BloodRequest[]);
        } catch (error) {
            setError('Failed to fetch blood requests');
            console.error(error);
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