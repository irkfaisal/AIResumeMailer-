import { useFormContext } from 'react-hook-form';
import { InputProvider } from '../../../../../../context/InputProvider';
import { Input } from '../../../../../../components/Input/Input';

export default function ProfessionalDetails() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6">
            {/* Skills */}
            <InputProvider
                type="text"
                required={true}
                error={errors.skills?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Skills</Input.Label>
                    <Input
                        {...register('skills')}
                        placeholder="e.g., JavaScript, React, Node.js, Python"
                    />
                    <p className="text-xs text-gray-500">Separate multiple skills with commas</p>
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Tools */}
            <InputProvider
                type="text"
                required={false}
                error={errors.tools?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Tools & Technologies</Input.Label>
                    <Input
                        {...register('tools')}
                        placeholder="e.g., VS Code, Git, Docker, AWS"
                    />
                    <p className="text-xs text-gray-500">Separate multiple tools with commas</p>
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Specialization */}
            <InputProvider
                type="text"
                required={true}
                error={errors.specialization?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Specialization</Input.Label>
                    <Input
                        {...register('specialization')}
                        placeholder="e.g., Full-Stack Development, Machine Learning, DevOps"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Professional Summary */}
            <InputProvider
                type="textarea"
                required={false}
                error={errors.professionalSummary?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Professional Summary</Input.Label>
                    <Input
                        {...register('professionalSummary')}
                        placeholder="Brief overview of your professional background and expertise..."
                        rows={4}
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Project Link */}
            <InputProvider
                type="url"
                required={true}
                error={errors.projectLink?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Project Link</Input.Label>
                    <Input
                        {...register('projectLink')}
                        placeholder="https://github.com/username/project or https://project-demo.com"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Project Description */}
            <InputProvider
                type="textarea"
                required={true}
                error={errors.projectDescription?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Project Description</Input.Label>
                    <Input
                        {...register('projectDescription')}
                        placeholder="Describe your project, technologies used, and your role..."
                        rows={4}
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Additional Info */}
            <InputProvider
                type="textarea"
                required={false}
                error={errors.additionalInfo?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Additional Information</Input.Label>
                    <Input
                        {...register('additionalInfo')}
                        placeholder="Any other relevant information (certifications, awards, achievements, etc.)"
                        rows={3}
                    />
                    <Input.Error />
                </div>
            </InputProvider>
        </div>
    );
}
