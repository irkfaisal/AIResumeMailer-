export default function GenerateText({ loading, onGenerate }) {
    return (
        <div className="flex justify-center mt-6 w-full">
            <button onClick={onGenerate} disabled={loading} className="w-11/12 md:w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md text-lg">
                {loading ? "Generating..." : "Generate mail"}
            </button>
        </div>
    )
}