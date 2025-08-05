import { useEffect, useState } from 'react';
import { UserDetailsFormData, convertDashboardDataToUserDetails } from '../models/userDetails';

interface DashboardData {
    label: string;
    value: string;
}

const details = [
    { label: 'Current Organization', value: 'World Bank Group' },
    { label: 'Summary', value: 'Current Organization' },
    { label: 'Skills', value: 'HTML, CSS, Javascript' },
    { label: 'Current Employment Status', value: 'Employed' },
    { label: 'Available From', value: 'Jul, 14, 2023' },
    { label: 'Date of Birth', value: '15 June 1993' },
    { label: 'Current Salary', value: '$6000' },
    { label: 'Relevant Experience', value: '7 Years' },
    { label: 'Notice Period', value: '90 Days' },
    { label: 'Salary Expectation', value: '$9000' },
    { label: 'Full Address', value: '9400 Ashton Rd, Philadelphia...' },
    { label: 'Status', value: 'Submitted to Client' },
    { label: 'Resume', value: 'Resume' },
    { label: 'Salary Type', value: 'Annual' },
    { label: 'Total Experience', value: '5 Years' },
    { label: 'Language Skills', value: 'English(Elementary proficiency)' },
];

const useDashboardController = () => {
    const [dashboardData, setDashboardData] = useState<DashboardData[] | null>(null);
    const [userDetails, setUserDetails] = useState<Partial<UserDetailsFormData> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                // const response = await fetch('/api/dashboard');
                // if (!response.ok) {
                //     throw new Error('Failed to fetch dashboard data');
                // }
                // const data: DashboardData = await response.json();
                setDashboardData(details);
                const convertedData = convertDashboardDataToUserDetails(details);
                setUserDetails(convertedData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const updateUserDetails = async (updatedData: UserDetailsFormData) => {
        try {
            // Here you would typically make an API call to update the data
            console.log('Updating user details:', updatedData);
            // For now, we'll just update the local state
            setUserDetails(updatedData);
            // Convert back to dashboard data format if needed
            // You might want to implement a reverse conversion function
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update user details');
            throw err;
        }
    };

    return { dashboardData, userDetails, loading, error, updateUserDetails };
}

export default useDashboardController;