import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './MailTextEditor.css';
import { useState } from 'react';
import { useSendEmail } from '../../../hooks/apiHooks/useSendEmail';
import { toast } from 'sonner';
import { InputProvider } from '../../../context/InputProvider';
import { Input } from '../../../components/Input/Input';

export default function MailTextEditor({ value, onChange, placeholder }) {
    const { sendEmail, sending } = useSendEmail();
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [emailData, setEmailData] = useState({
        to: '',
        subject: ''
    });

    const handleSendClick = () => {
        if (!value || value === '<p><br></p>') {
            toast.error('Please write some content before sending.');
            return;
        }
        setIsEmailModalOpen(true);
    };

    const handleSendEmail = async (e) => {
        e.preventDefault();

        if (!emailData.to || !emailData.subject) {
            toast.error('Please fill in all fields.');
            return;
        }

        const success = await sendEmail({
            to: emailData.to,
            subject: emailData.subject,
            html: value
        });

        if (success) {
            setIsEmailModalOpen(false);
            setEmailData({ to: '', subject: '' });
        }
    };


    const modules = useMemo(() => ({
        toolbar: [
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'clean']
        ],
    }), []);

    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'list', 'bullet',
        'align',
        'link'
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="mail-text-editor-container bg-white rounded-lg shadow-sm border border-gray-200">
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules}
                    formats={formats}
                    placeholder={placeholder || "Compose your email..."}
                    className="bg-white"
                />
            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleSendClick}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                    Send Email
                </button>
            </div>

            {isEmailModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Send Email</h2>
                        <form onSubmit={handleSendEmail} className="flex flex-col gap-4">
                            <InputProvider type="email" required={true}>
                                <div className="flex flex-col gap-1">
                                    <Input.Label>To</Input.Label>
                                    <Input
                                        type="email"
                                        value={emailData.to}
                                        onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                                        placeholder="recipient@example.com"
                                        required
                                    />
                                </div>
                            </InputProvider>

                            <InputProvider type="text" required={true}>
                                <div className="flex flex-col gap-1">
                                    <Input.Label>Subject</Input.Label>
                                    <Input
                                        type="text"
                                        value={emailData.subject}
                                        onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                                        placeholder="Email Subject"
                                        required
                                    />
                                </div>
                            </InputProvider>

                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEmailModalOpen(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {sending ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}