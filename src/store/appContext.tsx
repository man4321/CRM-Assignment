import { useState, createContext, ReactNode, useContext } from "react";

const initialData = [
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

type AppContextType = {
    contextUserDetails: typeof initialData;
    contextUpdateUserDetails: (updatedData: typeof initialData) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState(initialData);

    const updateUserDetails = (updatedData: typeof initialData) => {
        console.log('Updating user details in context:', updatedData);
        setUserData(updatedData);
    };
    return (
        <AppContext.Provider value={{ contextUserDetails: userData, contextUpdateUserDetails: updateUserDetails }}>
            {children}
        </AppContext.Provider>
    );

};

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}
