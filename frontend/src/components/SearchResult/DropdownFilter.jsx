import { useRef, useEffect } from "react";
import ArrowDown from "../../assets/arrows/arrow_down.png";

const DropdownFilter = ({
    icon,
    options,
    selected,
    setSelected,
    show,
    setShow,
    label = "",
}) => {
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref} className="relative flex-1">
            <button
                className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-10 py-2 rounded-lg"
                onClick={() => setShow(!show)}
                aria-haspopup="listbox"
                aria-expanded={show}
            >
                <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
                <span className="text-[#979797]">{selected}</span>
                <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 opacity-80" />
            </button>

            {show && (
                <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10 transition-all duration-200 ease-in-out">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setSelected(option);
                                setShow(false);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownFilter;