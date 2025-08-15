import { useEffect, useState } from "react";
import useDashboardController from "../controllers/dashboardController";
import { useAppContext } from "../store/appContext";


const UserDetailsForm = () => {
    const { dashboardData, loading, error, updateUserDetails } = useDashboardController();
    const [formData, setFormData] = useState<any>({});
    const userDetails = useAppContext();
    console.log('User Details:', userDetails);

    useEffect(() => {
        if (dashboardData) {
            const initialFormData: any = {};
            dashboardData.forEach((item) => {
                initialFormData[item.label] = item.value;
            });
            setFormData(initialFormData);
        }
    }, [dashboardData]);

    const updateFormData = () => {
        updateUserDetails(formData);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <form style={formStyle}>
                {dashboardData?.map((item) => (
                    <div key={item.label} style={fieldRowStyle}>
                        <label style={labelStyle}>{item.label}:</label>
                        <input
                            type="text"
                            name={item.label}
                            onChange={(e) => setFormData({ ...formData, [item.label]: e.target.value })}
                            style={inputStyle}
                            placeholder={`Enter ${item.label.toLowerCase()}`}
                            defaultValue={item.value}
                        />
                    </div>
                ))}
            </form>
            <button style={{ ...btnStyle, marginTop: '0rem' }} onClick={updateFormData}>
                Save Changes
            </button>
        </>
    );
}

export default UserDetailsForm;

const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '0.2rem',
    flexWrap: 'wrap',
    alignItems: 'center',
};

const fieldRowStyle: React.CSSProperties = {
    width: 'max-content',
    alignItems: 'center',
    display: 'flex',
    marginBottom: '12px',
};

const labelStyle: React.CSSProperties = {
    marginBottom: '4px',
    fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const btnStyle: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
};