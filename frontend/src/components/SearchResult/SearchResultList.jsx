import React from "react";
import icon from "../../images/icon.png";
import TarjetCompany from "../TarjetCompany";


const empresas = [
    { id: 1, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#E63946" },
    { id: 2, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#457B9D" },
    { id: 3, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#F4A261" },
    { id: 4, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#2A9D8F" },
    { id: 5, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#264653" },
    { id: 6, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#8D99AE" },
    { id: 7, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#FFB703" },
    { id: 8, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#6A0572" },
    { id: 9, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#D62828" },
    { id: 10, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#a8322c" },
    { id: 11, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#FFB703" },
    { id: 12, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#6A0572" },
    { id: 13, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#D62828" },
    { id: 14, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion: "Eslogan", tiempoCaducidad: "Tiempo de caducidad", bg: "#a8322c" }
];

const SearchResultList = () => {

    const templates = import.meta.glob("../../images/templates/*.jpg", { eager: true });
    const templateImages = Object.values(templates).map((mod) => mod.default);

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const empresasConFondo = empresas.map((empresa, index) => {
        if (index < templateImages.length) {
            return { ...empresa, bgImage: templateImages[index] };
        } else {
            return { ...empresa, bg: getRandomColor() };
        }
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {empresasConFondo.map((empresa) => (
                <div
                    key={empresa.id}
                    className="w-full h-[180px] sm:h-[22px] md:h-[250px] lg:h-[150px] mx-auto"
                >
                    <TarjetCompany
                        icon={empresa.imagen}
                        bg={empresa.bg}
                        bgImage={empresa.bgImage}
                        name={empresa.nombre}
                        slogan={empresa.tipoSuscripcion}
                        website={empresa.tiempoCaducidad}
                    />
                </div>
            ))}
        </div>
    )
}
export default SearchResultList;