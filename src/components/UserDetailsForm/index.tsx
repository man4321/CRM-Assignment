import { useEffect, useState } from "react";
import useDashboardController from "../../controllers/dashboardController";
import { useAppContext } from "../../store/appContext";
import "./UserDetailsForm.css";

const UserDetailsForm = ({ closeEditModel }: any) => {
    const { dashboardData, loading, error, updateUserDetails } =
        useDashboardController();
    const [formData, setFormData] = useState<any>({});
    const userDetails = useAppContext();
    console.log("User Details:", userDetails);

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
        closeEditModel();
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <form className="user-form">
                {dashboardData?.map((item) => (
                    <div key={item.label} className="user-form__row">
                        <label className="user-form__label">{item.label}:</label>
                        <input
                            type="text"
                            name={item.label}
                            onChange={(e) =>
                                setFormData({ ...formData, [item.label]: e.target.value })
                            }
                            className="user-form__input"
                            placeholder={`Enter ${item.label.toLowerCase()}`}
                            defaultValue={item.value}
                        />
                    </div>
                ))}
            </form>

            <div className="user-form__btn-container">
                <button className="user-form__btn" onClick={updateFormData}>
                    Save Changes
                </button>
            </div>
        </>
    );
};

export default UserDetailsForm;
