export default function ButtonDefault({ text, onClick }) {
    return (
        <button 
            onClick={onClick} 
            className="w-full px-6 py-2 text-white font-semibold rounded-lg bg-black shadow-md 
                       transition duration-300 ease-in-out transform hover:bg-neutral-800 hover:scale-105"
        >
            {text}
        </button>
    );
}
