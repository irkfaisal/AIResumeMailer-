import Loader from "../Loader/Loader";

const FileUploadCard = ({
    title,
    uploadLabel,
    previouslyUploaded,
    onFileChange,
    onUpload,
    selectedFile,
    loading,
    inputId
}) => {

    if (loading) return <Loader />;

    return (
        <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                {title}
            </h2>

            {previouslyUploaded?.originalName && (
                <div className="mb-6 p-3 bg-gray-50 rounded-md border">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                        Previously Uploaded
                    </p>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span
                            className="text-blue-600 truncate max-w-[160px]"
                            title={previouslyUploaded.originalName}
                        >
                            📄 {previouslyUploaded.originalName}
                        </span>
                        <span>{new Date(previouslyUploaded.updatedAt).toLocaleDateString()}</span>
                    </div>
                </div>
            )}

            <label className="block">
                <span className="sr-only">{uploadLabel}</span>
                <input
                    id={inputId}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={onFileChange}
                    className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        cursor-pointer"
                />
            </label>

            <div className="mt-4">
                <button
                    onClick={onUpload}
                    disabled={loading}
                    className={`px-6 py-2 text-white font-semibold rounded-lg shadow
                        transition-opacity focus:outline-none
                        ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    style={{ backgroundColor: '#5ce1e6' }}
                >
                    {loading ? 'Uploading...' : uploadLabel}
                </button>

                {selectedFile && (
                    <p className="mt-2 text-sm text-gray-500 truncate">
                        Selected: {selectedFile.name}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileUploadCard;
