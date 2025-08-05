import React from 'react';
import { useUserDetailsForm } from '../hooks/useUserDetailsForm';
import { UserDetailsFormData } from '../models/userDetails';

interface UserDetailsFormProps {
    initialData?: Partial<UserDetailsFormData>;
    onSubmit?: (data: UserDetailsFormData) => void;
    onCancel?: () => void;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
    initialData,
    onSubmit,
    onCancel
}) => {
    const {
        formData,
        errors,
        handleChange,
        handleSubmit,
        resetForm
    } = useUserDetailsForm(initialData);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await handleSubmit();
        if (result && onSubmit) {
            onSubmit(result);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="space-y-4 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Organization Details */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Current Organization
                        <input
                            type="text"
                            value={formData.currentOrganization}
                            onChange={(e) => handleChange('currentOrganization', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.currentOrganization && (
                        <p className="text-red-500 text-xs">{errors.currentOrganization}</p>
                    )}
                </div>

                {/* Skills */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Skills (comma-separated)
                        <input
                            type="text"
                            value={formData.skills.join(', ')}
                            onChange={(e) => handleChange('skills', e.target.value.split(', ').filter(Boolean))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.skills && (
                        <p className="text-red-500 text-xs">{errors.skills}</p>
                    )}
                </div>

                {/* Employment Status */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Employment Status
                        <select
                            value={formData.currentEmploymentStatus}
                            onChange={(e) => handleChange('currentEmploymentStatus', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="Employed">Employed</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Freelancer">Freelancer</option>
                        </select>
                    </label>
                </div>

                {/* Available From */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Available From
                        <input
                            type="date"
                            value={formData.availableFrom}
                            onChange={(e) => handleChange('availableFrom', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.availableFrom && (
                        <p className="text-red-500 text-xs">{errors.availableFrom}</p>
                    )}
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Date of Birth
                        <input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.dateOfBirth && (
                        <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>
                    )}
                </div>

                {/* Current Salary */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Current Salary
                        <input
                            type="number"
                            value={formData.currentSalary}
                            onChange={(e) => handleChange('currentSalary', Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.currentSalary && (
                        <p className="text-red-500 text-xs">{errors.currentSalary}</p>
                    )}
                </div>

                {/* Experience */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Relevant Experience (years)
                        <input
                            type="number"
                            value={formData.relevantExperience}
                            onChange={(e) => handleChange('relevantExperience', Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.relevantExperience && (
                        <p className="text-red-500 text-xs">{errors.relevantExperience}</p>
                    )}
                </div>

                {/* Notice Period */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Notice Period (days)
                        <input
                            type="number"
                            value={formData.noticePeriod}
                            onChange={(e) => handleChange('noticePeriod', Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.noticePeriod && (
                        <p className="text-red-500 text-xs">{errors.noticePeriod}</p>
                    )}
                </div>

                {/* Salary Expectation */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Salary Expectation
                        <input
                            type="number"
                            value={formData.salaryExpectation}
                            onChange={(e) => handleChange('salaryExpectation', Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.salaryExpectation && (
                        <p className="text-red-500 text-xs">{errors.salaryExpectation}</p>
                    )}
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Full Address
                        <textarea
                            value={formData.fullAddress}
                            onChange={(e) => handleChange('fullAddress', e.target.value)}
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.fullAddress && (
                        <p className="text-red-500 text-xs">{errors.fullAddress}</p>
                    )}
                </div>

                {/* Status */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Status
                        <select
                            value={formData.status}
                            onChange={(e) => handleChange('status', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="In Review">In Review</option>
                            <option value="Submitted to Client">Submitted to Client</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </label>
                </div>

                {/* Salary Type */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Salary Type
                        <select
                            value={formData.salaryType}
                            onChange={(e) => handleChange('salaryType', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="Annual">Annual</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Hourly">Hourly</option>
                        </select>
                    </label>
                </div>

                {/* Total Experience */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Total Experience (years)
                        <input
                            type="number"
                            value={formData.totalExperience}
                            onChange={(e) => handleChange('totalExperience', Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </label>
                    {errors.totalExperience && (
                        <p className="text-red-500 text-xs">{errors.totalExperience}</p>
                    )}
                </div>

                {/* Language Skills */}
                <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Language Skills
                    </label>
                    {formData.languageSkills.map((skill, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={skill.language}
                                onChange={(e) => {
                                    const newSkills = [...formData.languageSkills];
                                    newSkills[index].language = e.target.value;
                                    handleChange('languageSkills', newSkills);
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Language"
                            />
                            <select
                                value={skill.proficiency}
                                onChange={(e) => {
                                    const newSkills = [...formData.languageSkills];
                                    newSkills[index].proficiency = e.target.value as
                                        | "Elementary"
                                        | "Limited Working"
                                        | "Professional Working"
                                        | "Full Professional"
                                        | "Native";
                                    handleChange('languageSkills', newSkills);
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option value="Elementary">Elementary</option>
                                <option value="Limited Working">Limited Working</option>
                                <option value="Professional Working">Professional Working</option>
                                <option value="Full Professional">Full Professional</option>
                                <option value="Native">Native</option>
                            </select>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => {
                            const newSkills = [...formData.languageSkills, { language: '', proficiency: 'Elementary' }];
                            handleChange('languageSkills', newSkills);
                        }}
                        className="mt-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Language
                    </button>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 mt-6">
                {onCancel && (
                    <button
                        type="button"
                        onClick={() => {
                            resetForm();
                            onCancel();
                        }}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
};
