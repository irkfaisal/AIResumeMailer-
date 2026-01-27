import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { jobDescriptionSchema } from '../jobDescriptionValidation';
import ArrayInput from './ArrayInput';
import { toast } from 'sonner';
import { InputProvider } from '../../../../context/InputProvider';
import { Input } from '../../../../components/Input/Input';
import { useModal } from '../../../../hooks/useModal';

export default function AddJobDescriptionForm() {
    const { closeModal } = useModal();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm({
        resolver: yupResolver(jobDescriptionSchema),
        mode: 'onBlur',
        defaultValues: {
            jobTitle: '',
            roles: [],
            skills: [],
            noticePeriod: '',
            additionalNotes: '',
        },
    });

    const roles = watch('roles');
    const skills = watch('skills');

    const handleAddRole = (role) => {
        setValue('roles', [...roles, role], { shouldValidate: true });
    };

    const handleRemoveRole = (index) => {
        const updatedRoles = roles.filter((_, i) => i !== index);
        setValue('roles', updatedRoles, { shouldValidate: true });
    };

    const handleAddSkill = (skill) => {
        setValue('skills', [...skills, skill], { shouldValidate: true });
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setValue('skills', updatedSkills, { shouldValidate: true });
    };

    const onSubmit = (data) => {
        console.log('Job Description Data:', data);
        // TODO: Save to localStorage or send to API
        localStorage.setItem('jobDescription', JSON.stringify(data));
        toast.success('Job description saved successfully!');
        closeModal();
    };

    const onError = (errors) => {
        console.error('Form validation errors:', errors);
        toast.error('Please fix the validation errors before submitting.');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
            {/* Job Title */}
            <InputProvider
                type="text"
                required={true}
                error={errors.jobTitle?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Job Title to Apply</Input.Label>
                    <Input
                        {...register('jobTitle')}
                        placeholder="e.g., Senior Software Engineer"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Roles & Responsibilities */}
            <Controller
                name="roles"
                control={control}
                render={() => (
                    <ArrayInput
                        label="Roles & Responsibilities"
                        placeholder="Describe a key responsibility..."
                        items={roles}
                        onAdd={handleAddRole}
                        onRemove={handleRemoveRole}
                        error={errors.roles?.message}
                        required={true}
                        inputType="textarea"
                        helperText="Add each role or responsibility separately. Press Enter or click Add."
                    />
                )}
            />

            {/* Skills Required */}
            <Controller
                name="skills"
                control={control}
                render={() => (
                    <ArrayInput
                        label="Skills Required"
                        placeholder="e.g., React, Node.js, Python"
                        items={skills}
                        onAdd={handleAddSkill}
                        onRemove={handleRemoveSkill}
                        error={errors.skills?.message}
                        required={true}
                        inputType="text"
                        helperText="Add each skill separately. Press Enter or click Add."
                    />
                )}
            />

            {/* Notice Period */}
            <InputProvider
                type="text"
                required={false}
                error={errors.noticePeriod?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Notice Period</Input.Label>
                    <Input
                        {...register('noticePeriod')}
                        placeholder="e.g., 30 days, Immediate, 2 weeks"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Additional Notes */}
            <InputProvider
                type="textarea"
                required={false}
                error={errors.additionalNotes?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Additional Brief Note About the Job</Input.Label>
                    <Input
                        {...register('additionalNotes')}
                        placeholder="Any additional information about the job, company culture, benefits, etc."
                        rows={4}
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#4bc8cd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] focus:ring-offset-1"
                >
                    Save Job Description
                </button>
            </div>
        </form>
    );
}
