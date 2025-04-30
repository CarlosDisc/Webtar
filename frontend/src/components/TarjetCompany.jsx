import React from "react";
import { useNavigate } from "react-router-dom";

const TarjetCompany = ({
    bg,
    bgImage,
    textColor,
    icon,
    altIcon,
    redirectTo,
    name,
    slogan,
    website,
    flipped,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (redirectTo) {
            navigate(redirectTo);
        }
    };

    const frontStyle = {
        backgroundColor: bg,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backfaceVisibility: "hidden",
    };

    const backStyle = {
        ...frontStyle,
        transform: "rotateY(180deg)",
    };

    return (
        <div
            className="relative cursor-pointer w-full h-full transition-transform hover:scale-[1.03] shadow-md"
            style={{ perspective: "1000px" }}
            onClick={handleClick}
        >
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Lado A */}
                <div
                    className="absolute w-full h-full flex flex-col items-center justify-center px-6 text-center"
                    style={frontStyle}
                >
                    <img
                        src={icon}
                        alt="Icono principal"
                        className="w-16 h-16 object-contain mb-4"
                    />
                    <h3
                        className="font-bold"
                        style={{
                            color: textColor,
                            fontSize: "1.25rem", // 20px
                        }}
                    >
                        {name}
                    </h3>
                    {slogan && (
                        <p
                            className="font-medium"
                            style={{
                                color: textColor,
                                fontSize: "1rem", // 16px
                            }}
                        >
                            {slogan}
                        </p>
                    )}
                </div>

                {/* Lado B */}
                <div
                    className="absolute w-full h-full flex flex-col items-center justify-center p-6 text-center"
                    style={backStyle}
                >
                    {altIcon && (
                        <img
                            src={altIcon}
                            alt="Icono alternativo"
                            className="w-12 h-12 mb-4 object-contain"
                        />
                    )}
                    <p
                        className="font-medium"
                        style={{
                            color: textColor,
                            fontSize: "1rem", // 16px
                        }}
                    >
                        <strong>Web:</strong> {website}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TarjetCompany;
