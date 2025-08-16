import { useEffect, useState } from 'react';
import { useAppContext } from '../store/appContext';

interface DashboardData {
    label: string;
    value: string;
}
const convertDashboardData = (data: any) => {
    const result: DashboardData[] = [];
    Object.keys(data).forEach(key => {
        result.push({
            label: key,
            value: data[key]
        });
        return result

    });
    return result;
}

const useDashboardController = () => {
    const [dashboardData, setDashboardData] = useState<DashboardData[] | null>(null);
    const { contextUserDetails, contextUpdateUserDetails } = useAppContext()
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                setDashboardData(contextUserDetails);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, [contextUserDetails]);

    const updateUserDetails = async (updatedData: any) => {
        try {
            const convertedData = convertDashboardData(updatedData);
            contextUpdateUserDetails(convertedData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update user details');
            throw err;
        }
    };

    return { dashboardData, loading, error, updateUserDetails };
}

export default useDashboardController;