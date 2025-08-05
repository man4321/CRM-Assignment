import { useState, useCallback } from 'react';
import { UserDetailsFormData, initialUserDetails } from '../models/userDetails';

interface ValidationErrors {
    [key: string]: string;
}

export const useUserDetailsForm = (initialData: Partial<UserDetailsFormData> = {}) => {
    const [formData, setFormData] = useState<UserDetailsFormData>({
        ...initialUserDetails,
        ...initialData
    });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validateForm = useCallback(() => {
        const newErrors: ValidationErrors = {};

        // Required fields validation
        if (!formData.currentOrganization) {
            newErrors.currentOrganization = 'Current organization is required';
        }

        if (!formData.skills || formData.skills.length === 0) {
            newErrors.skills = 'At least one skill is required';
        }

        if (!formData.availableFrom) {
            newErrors.availableFrom = 'Available from date is required';
        }

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
        }

        if (formData.currentSalary < 0) {
            newErrors.currentSalary = 'Current salary must be a positive number';
        }

        if (formData.relevantExperience < 0) {
            newErrors.relevantExperience = 'Relevant experience must be a positive number';
        }

        if (formData.noticePeriod < 0) {
            newErrors.noticePeriod = 'Notice period must be a positive number';
        }

        if (formData.salaryExpectation < 0) {
            newErrors.salaryExpectation = 'Salary expectation must be a positive number';
        }

        if (!formData.fullAddress) {
            newErrors.fullAddress = 'Full address is required';
        }

        if (formData.totalExperience < formData.relevantExperience) {
            newErrors.totalExperience = 'Total experience cannot be less than relevant experience';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);

    const handleChange = useCallback((
        field: keyof UserDetailsFormData,
        value: string | number | string[] | typeof formData.languageSkills
    ) => {
        setFormData((prev: UserDetailsFormData) => ({
            ...prev,
            [field]: value
        }));
    }, []);

    const handleSubmit = useCallback(async () => {
        if (validateForm()) {
            // Here you would typically make an API call to save the data
            return formData;
        }
        return null;
    }, [formData, validateForm]);

    const resetForm = useCallback(() => {
        setFormData(initialUserDetails);
        setErrors({});
    }, []);

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        validateForm
    };
};
