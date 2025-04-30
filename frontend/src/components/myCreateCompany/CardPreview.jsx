import React from "react";

const CardPreview = ({
    nombreNegocio,
    slogan,
    logo,
    modo,
    colorFondo,
    colorTexto,
    posicion = 1,
    imagenFondo,
    fontFamily,
}) => {
    const customStyles =
        modo === "custom"
            ? {
                backgroundColor: colorFondo,
                color: colorTexto,
            }
            : modo === "template" && imagenFondo
                ? {
                    backgroundImage: `url(${imagenFondo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: colorTexto,
                }
                : {};

    const Botonera = ({ vertical = false }) => (
        <div
            className={`flex ${vertical ? "flex-col space-y-2" : "flex-row space-x-2"} mt-4`}
        >
            {[1, 2, 3].map((n) => (
                <button
                    key={n}
                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm"
                >
                    {n}
                </button>
            ))}
        </div>
    );

    const textoStyle = {
        color: colorTexto,
        fontFamily,
    };

    const renderContenido = () => {
        switch (posicion) {
            case 1:
                return (
                    <div className="flex flex-col items-center justify-center text-center gap-2">
                        <img src={logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                        <h2 className="text-base sm:text-lg font-bold" style={textoStyle}>{nombreNegocio}</h2>
                        <p className="text-xs sm:text-sm" style={textoStyle}>{slogan}</p>
                        <Botonera />
                    </div>
                );

            case 2:
                return (
                    <div className="flex flex-row items-center justify-between w-full gap-4">
                        <div className="flex flex-col items-start justify-center w-full text-left space-y-2">
                            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
                            <h2 className="text-base font-bold" style={textoStyle}>{nombreNegocio}</h2>
                            <p className="text-sm" style={textoStyle}>{slogan}</p>
                        </div>
                        <div className="w-[60px] flex justify-center">
                            <Botonera vertical />
                        </div>
                    </div>
                );


            case 3:
                return (
                    <div className="flex flex-row items-center justify-between w-full gap-4">
                        <div className="w-[60px] flex justify-center">
                            <Botonera vertical />
                        </div>
                        <div className="flex flex-col items-end justify-center w-full text-right space-y-2">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-16 h-16 object-contain ml-auto"
                            />
                            <h2 className="text-base font-bold" style={textoStyle}>{nombreNegocio}</h2>
                            <p className="text-sm" style={textoStyle}>{slogan}</p>
                        </div>
                    </div>
                );


            default:
                return <p className="text-red-500">Posición inválida</p>;
        }
    };

    return (
        <div
            className="p-4 rounded-xl shadow-md w-full max-w-md aspect-video bg-gray-100 bg-opacity-80"
            style={customStyles}
        >
            {renderContenido()}
        </div>
    );
};

export default CardPreview;
