import React from 'react';
import tarjet from '../../images/tarjet.png';

const servicesData = [
    {
        title: "Desarrollo Web",
        subservices: [
            "Creación de sitios responsivos",
            "E-commerce y tiendas online",
            "Optimización SEO",
            "Mantenimiento de páginas web"
        ]
    },
    {
        title: "Marketing Digital",
        subservices: [
            "Gestión de redes sociales",
            "Campañas de anuncios",
            "Email marketing",
            "Análisis de métricas"
        ]
    },
    {
        title: "Seguridad Informática",
        subservices: [
            "Auditorías de seguridad",
            "Pruebas de penetración",
            "Monitoreo de redes",
            "Protección de datos"
        ]
    },
    {
        title: "Soporte Técnico",
        subservices: [
            "Mantenimiento de equipos",
            "Instalación de software",
            "Gestión de servidores",
            "Respaldo y recuperación de datos"
        ]
    }
];

const Services = ({ bg, icon }) => {
    return (
        <div className="w-full px-4 py-8">
            <div
                className="w-[80%] sm:w-[90%] lg:w-[80vw] mx-auto p-4 rounded-2xl"
                style={{ backgroundColor: bg }}
            >
                <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
                    {/* Título con ícono */}
                    <div className="flex items-center gap-3 mb-8">
                        {icon && (
                            <img
                                src={icon}
                                alt="icono"
                                className="w-8 h-8 object-contain"
                            />
                        )}
                        <h1 className="text-3xl font-bold text-gray-700">NUESTROS SERVICIOS</h1>
                    </div>

                    {/* Lista de servicios */}
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center justify-start py-6 border-t first:border-t-0"
                        >
                            <img
                                src={tarjet}
                                alt={`Servicio ${index + 1}`}
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
                            />
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                                <ul className="pl-5 mt-2 text-gray-600 list-disc">
                                    {service.subservices.map((sub, subIndex) => (
                                        <li key={subIndex} className="text-base">{sub}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
