import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logoWebtar from '../../images/logoWebtar.webp';

const ButtonLogo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const token = Cookies.get("token");
        if (token) {
            navigate("/homepage");
        } else {
            navigate("/");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center justify-center"
        >
            <img src={logoWebtar} alt="logo" className="w-48 h-auto" />
        </button>
    );
};

export default ButtonLogo;
