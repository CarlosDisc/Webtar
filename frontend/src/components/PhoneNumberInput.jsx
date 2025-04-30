import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = ({ value, onChange }) => {
	return (
		<PhoneInput
			international
			defaultCountry="BO"
			value={value}
			onChange={onChange}  // <-- aquí delega al padre
			className="w-26 px-3 py-2 border-gray-400 shadow-lg shadow-gray-400/40 rounded-lg text-gray-700 text-center bg-[#F1F1F1]"
		/>
	);
};

export default PhoneNumberInput;
