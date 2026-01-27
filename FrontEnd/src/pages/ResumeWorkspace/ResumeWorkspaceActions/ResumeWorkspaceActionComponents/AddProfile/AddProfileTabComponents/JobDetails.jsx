import { useFormContext } from 'react-hook-form';
import { InputProvider } from '../../../../../../context/InputProvider';
import { Input } from '../../../../../../components/Input/Input';

export default function JobDetails() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6">
            {/* Current Job Title */}
            <InputProvider
                type="text"
                required={true}
                error={errors.jobTitle?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Current Job Title</Input.Label>
                    <Input
                        {...register('jobTitle')}
                        placeholder="e.g., Senior Software Engineer"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Years of Experience */}
            <InputProvider
                type="number"
                required={true}
                error={errors.yearsOfExperience?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Years of Experience</Input.Label>
                    <Input
                        {...register('yearsOfExperience', { valueAsNumber: true })}
                        placeholder="e.g., 5"
                        min="0"
                        step="0.5"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Current Job Location */}
            <InputProvider
                type="text"
                required={false}
                error={errors.jobLocation?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Current Job Location</Input.Label>
                    <Input
                        {...register('jobLocation')}
                        placeholder="e.g., San Francisco, CA or Remote"
                    />
                    <Input.Error />
                </div>
            </InputProvider>
        </div>
    );
}
