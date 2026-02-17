import * as yup from 'yup';

// Job Description Validation Schema
export const jobDescriptionSchema = yup.object().shape({
    jobTitle: yup
        .string()
        .required('Job title is required')
        .min(2, 'Job title must be at least 2 characters')
        .max(200, 'Job title must not exceed 200 characters'),

    companyName: yup
        .string()
        .required('Company Name is required')
        .min(2, 'Company Name must be at least 2 characters')
        .max(200, 'Company Name must not exceed 200 characters'),

    companyEmail: yup
        .string()
        .required('Company Email is required')
        .email('Invalid email format'),

    roles: yup
        .array()
        .of(
            yup.string()
                .min(5, 'Each role must be at least 5 characters')
                .max(500, 'Each role must not exceed 500 characters')
        )
        .min(1, 'At least one role & responsibility is required')
        .required('Roles & responsibilities are required'),

    skills: yup
        .array()
        .of(
            yup.string()
                .min(2, 'Each skill must be at least 2 characters')
                .max(100, 'Each skill must not exceed 100 characters')
        )
        .min(1, 'At least one skill is required')
        .required('Skills are required'),

    noticePeriod: yup
        .string()
        .nullable()
        .notRequired()
        .max(100, 'Notice period must not exceed 100 characters'),

    additionalNotes: yup
        .string()
        .nullable()
        .notRequired()
        .max(1000, 'Additional notes must not exceed 1000 characters'),
});
