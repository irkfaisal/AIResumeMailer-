export default function ResumeWorkspaceActionCard({ action, openModal }) {
    return (
        <div
            key={action.type}
            onClick={() => openModal(action.type)}
            className="glass-effect p-10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[250px] border border-gray-700/50 hover:border-gray-500 hover:scale-[1.02] group"
        >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {action.icon}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">{action.title}</h3>
            <p className="text-gray-400 text-center font-medium leading-relaxed">{action.desc}</p>
        </div>
    )
};
