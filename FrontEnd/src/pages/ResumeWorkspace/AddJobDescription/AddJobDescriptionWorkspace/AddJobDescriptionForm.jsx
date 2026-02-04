import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { jobDescriptionSchema } from '../jobDescriptionValidation';
import ArrayInput from './ArrayInput';
import { toast } from 'sonner';
import { InputProvider } from '../../../../context/InputProvider';
import { Input } from '../../../../components/Input/Input';
import { useModal } from '../../../../hooks/useModal';
import { useJobDescription } from '../../../../hooks/apiHooks/useJobDescription';

export default function AddJobDescriptionForm() {
    const { addJob } = useJobDescription();
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

    const onSubmit = async (data) => {
        console.log('Job Description Data:', data);
        try {
            // await addJob(data);
            toast.success('Job description saved successfully!');
            closeModal();
            // Optional: fallback to localStorage if needed or as cache
            localStorage.setItem('jobDescription', JSON.stringify(data));
        } catch (error) {
            console.error("Failed to add job description:", error);
            toast.error("Failed to add job description.");
        }
    };

    const onError = (errors) => {
        console.error('Form validation errors:', errors);
        toast.error('Please fix the validation errors before submitting.');
    };

    return (
        <form id="add-job-description-form" onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
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
                render={({ field: { onChange, value } }) => (
                    <ArrayInput
                        label="Roles & Responsibilities"
                        placeholder="Describe a key responsibility..."
                        items={value || []}
                        onAdd={(newItem) => onChange([...(value || []), newItem])}
                        onRemove={(index) => onChange((value || []).filter((_, i) => i !== index))}
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
                render={({ field: { onChange, value } }) => (
                    <ArrayInput
                        label="Skills Required"
                        placeholder="e.g., React, Node.js, Python"
                        items={value || []}
                        onAdd={(newItem) => onChange([...(value || []), newItem])}
                        onRemove={(index) => onChange((value || []).filter((_, i) => i !== index))}
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
        </form>
    );
}
