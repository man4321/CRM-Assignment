export interface UserDetails {
    currentOrganization: string;
    summary: string;
    skills: string[];
    currentEmploymentStatus: 'Employed' | 'Unemployed' | 'Freelancer';
    availableFrom: Date;
    dateOfBirth: Date;
    currentSalary: number;
    relevantExperience: number;
    noticePeriod: number;
    salaryExpectation: number;
    fullAddress: string;
    status: 'Submitted to Client' | 'In Review' | 'Rejected' | 'Accepted';
    resume: string;
    salaryType: 'Annual' | 'Monthly' | 'Hourly';
    totalExperience: number;
    languageSkills: {
        language: string;
        proficiency: 'Elementary' | 'Limited Working' | 'Professional Working' | 'Full Professional' | 'Native';
    }[];
}

export interface UserDetailsFormData extends Omit<UserDetails, 'availableFrom' | 'dateOfBirth'> {
    availableFrom: string;
    dateOfBirth: string;
}

export const initialUserDetails: UserDetailsFormData = {
    currentOrganization: '',
    summary: '',
    skills: [],
    currentEmploymentStatus: 'Employed',
    availableFrom: new Date().toISOString().split('T')[0],
    dateOfBirth: '',
    currentSalary: 0,
    relevantExperience: 0,
    noticePeriod: 0,
    salaryExpectation: 0,
    fullAddress: '',
    status: 'In Review',
    resume: '',
    salaryType: 'Annual',
    totalExperience: 0,
    languageSkills: [{ language: 'English', proficiency: 'Elementary' }]
};

export const convertDashboardDataToUserDetails = (data: { label: string; value: string }[]): Partial<UserDetailsFormData> => {
    const result: Partial<UserDetailsFormData> = {};

    data.forEach(item => {
        switch (item.label) {
            case 'Current Organization':
                result.currentOrganization = item.value;
                break;
            case 'Summary':
                result.summary = item.value;
                break;
            case 'Skills':
                result.skills = item.value.split(', ');
                break;
            case 'Current Employment Status':
                result.currentEmploymentStatus = item.value as UserDetails['currentEmploymentStatus'];
                break;
            case 'Available From':
                result.availableFrom = new Date(item.value).toISOString().split('T')[0];
                break;
            case 'Date of Birth':
                result.dateOfBirth = new Date(item.value).toISOString().split('T')[0];
                break;
            case 'Current Salary':
                result.currentSalary = parseInt(item.value.replace('$', ''));
                break;
            case 'Relevant Experience':
                result.relevantExperience = parseInt(item.value);
                break;
            case 'Notice Period':
                result.noticePeriod = parseInt(item.value);
                break;
            case 'Salary Expectation':
                result.salaryExpectation = parseInt(item.value.replace('$', ''));
                break;
            case 'Full Address':
                result.fullAddress = item.value;
                break;
            case 'Status':
                result.status = item.value as UserDetails['status'];
                break;
            case 'Resume':
                result.resume = item.value;
                break;
            case 'Salary Type':
                result.salaryType = item.value as UserDetails['salaryType'];
                break;
            case 'Total Experience':
                result.totalExperience = parseInt(item.value);
                break;
            case 'Language Skills':
                const [language, proficiencyWithParens] = item.value.split('(');
                const proficiency = proficiencyWithParens.replace(')', '') as UserDetails['languageSkills'][0]['proficiency'];
                result.languageSkills = [{ language, proficiency }];
                break;
        }
    });

    return result;
};
