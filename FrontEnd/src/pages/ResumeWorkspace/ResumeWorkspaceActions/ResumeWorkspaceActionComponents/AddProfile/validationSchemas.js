import * as yup from 'yup';

const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const basicDetailsSchema = yup.object().shape({
    fullName: yup
        .string()
        .required('Full name is required')
        .min(2, 'Full name must be at least 2 characters')
        .max(100, 'Full name must not exceed 100 characters'),

    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),

    phone: yup
        .string()
        .required('Phone number is required')
        .matches(phoneRegex, 'Please enter a valid phone number'),

    linkedinLink: yup
        .string()
        .required('LinkedIn profile link is required')
        .matches(urlRegex, 'Please enter a valid URL'),

    githubLink: yup
        .string()
        .nullable()
        .notRequired()
        .test('is-url', 'Please enter a valid URL', (value) => {
            if (!value) return true;
            return urlRegex.test(value);
        }),

    twitterLink: yup
        .string()
        .nullable()
        .notRequired()
        .test('is-url', 'Please enter a valid URL', (value) => {
            if (!value) return true;
            return urlRegex.test(value);
        }),

    portfolioLink: yup
        .string()
        .nullable()
        .notRequired()
        .test('is-url', 'Please enter a valid URL', (value) => {
            if (!value) return true;
            return urlRegex.test(value);
        }),

    articleLink: yup
        .string()
        .nullable()
        .notRequired()
        .test('is-url', 'Please enter a valid URL', (value) => {
            if (!value) return true;
            return urlRegex.test(value);
        }),
});

// Job Details Schema
export const jobDetailsSchema = yup.object().shape({
    jobTitle: yup
        .string()
        .required('Current job title is required')
        .min(2, 'Job title must be at least 2 characters')
        .max(100, 'Job title must not exceed 100 characters'),

    yearsOfExperience: yup
        .number()
        .required('Years of experience is required')
        .min(0, 'Years of experience cannot be negative')
        .max(50, 'Years of experience must not exceed 50')
        .typeError('Please enter a valid number'),

    jobLocation: yup
        .string()
        .nullable()
        .notRequired()
        .max(200, 'Job location must not exceed 200 characters'),
});

// Professional Details Schema
export const professionalDetailsSchema = yup.object().shape({
    skills: yup
        .string()
        .required('Skills are required')
        .min(2, 'Please enter at least one skill'),

    tools: yup
        .string()
        .nullable()
        .notRequired(),

    specialization: yup
        .string()
        .required('Specialization is required')
        .min(2, 'Specialization must be at least 2 characters')
        .max(200, 'Specialization must not exceed 200 characters'),

    professionalSummary: yup
        .string()
        .nullable()
        .notRequired()
        .max(1000, 'Professional summary must not exceed 1000 characters'),

    projectLink: yup
        .string()
        .required('Project link is required')
        .matches(urlRegex, 'Please enter a valid URL'),

    projectDescription: yup
        .string()
        .required('Project description is required')
        .min(10, 'Project description must be at least 10 characters')
        .max(500, 'Project description must not exceed 500 characters'),

    additionalInfo: yup
        .string()
        .nullable()
        .notRequired()
        .max(500, 'Additional info must not exceed 500 characters'),
});

// Combined schema for all tabs
export const addProfileSchema = yup.object().shape({
    ...basicDetailsSchema.fields,
    ...jobDetailsSchema.fields,
    ...professionalDetailsSchema.fields,
});
