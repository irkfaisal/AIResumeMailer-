import { useFormContext } from 'react-hook-form';
import { InputProvider } from '../../../../../../context/InputProvider';
import { Input } from '../../../../../../components/Input/Input';


export default function BasicDetails() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6">
            {/* Full Name */}
            <InputProvider
                type="text"
                required={true}
                error={errors.fullName?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Full Name</Input.Label>
                    <Input
                        {...register('fullName')}
                        placeholder="Enter your full name"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Email */}
            <InputProvider
                type="email"
                required={true}
                error={errors.email?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Email Address</Input.Label>
                    <Input
                        {...register('email')}
                        placeholder="your.email@example.com"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* Phone */}
            <InputProvider
                type="tel"
                required={true}
                error={errors.phone?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>Phone Number</Input.Label>
                    <Input
                        {...register('phone')}
                        placeholder="+1 (555) 123-4567"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            {/* LinkedIn Link */}
            <InputProvider
                type="url"
                required={true}
                error={errors.linkedinLink?.message}
            >
                <div className="flex flex-col gap-1">
                    <Input.Label>LinkedIn Profile</Input.Label>
                    <Input
                        {...register('linkedinLink')}
                        placeholder="https://linkedin.com/in/yourprofile"
                    />
                    <Input.Error />
                </div>
            </InputProvider>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* GitHub Link */}
                <InputProvider
                    type="url"
                    required={false}
                    error={errors.githubLink?.message}
                >
                    <div className="flex flex-col gap-1">
                        <Input.Label>GitHub Profile</Input.Label>
                        <Input
                            {...register('githubLink')}
                            placeholder="https://github.com/yourusername"
                        />
                        <Input.Error />
                    </div>
                </InputProvider>

                {/* Twitter/X Link */}
                <InputProvider
                    type="url"
                    required={false}
                    error={errors.twitterLink?.message}
                >
                    <div className="flex flex-col gap-1">
                        <Input.Label>Twitter/X Profile</Input.Label>
                        <Input
                            {...register('twitterLink')}
                            placeholder="https://twitter.com/yourusername"
                        />
                        <Input.Error />
                    </div>
                </InputProvider>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Portfolio Link */}
                <InputProvider
                    type="url"
                    required={false}
                    error={errors.portfolioLink?.message}
                >
                    <div className="flex flex-col gap-1">
                        <Input.Label>Portfolio Website</Input.Label>
                        <Input
                            {...register('portfolioLink')}
                            placeholder="https://yourportfolio.com"
                        />
                        <Input.Error />
                    </div>
                </InputProvider>

                {/* Article Link */}
                <InputProvider
                    type="url"
                    required={false}
                    error={errors.articleLink?.message}
                >
                    <div className="flex flex-col gap-1">
                        <Input.Label>Article/Blog Link</Input.Label>
                        <Input
                            {...register('articleLink')}
                            placeholder="https://yourblog.com/article"
                        />
                        <Input.Error />
                    </div>
                </InputProvider>
            </div>
        </div>
    );
}
