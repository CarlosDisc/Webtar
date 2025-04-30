import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shareIcon from "../../assets/tarjetsIconBar/share.webp";
import servicesIcon from "../../assets/tarjetsIconBar/services.webp";
import photosIcon from "../../assets/tarjetsIconBar/images.webp";
import videoIcon from "../../assets/tarjetsIconBar/video.webp";
import scheduleIcon from "../../assets/tarjetsIconBar/schedule.webp";
import locationIcon from "../../assets/tarjetsIconBar/location.webp";

import Header from "../homePageComponents/Header";
import SearchBar from "../homePageComponents/SearchBar";
import Information from "../homePageComponents/Information";
import Images from "./Images";
import Services from "./Services";
import Share from "./Share";
import Schedule from "./Schedules";
import Videos from "./Videos";
import Location from "./Location";
import CoWorkers from "./CoWorkers";
import icon from "../../images/icon.png";
import TarjetCompany from "../TarjetCompany";

const PerfilTarjetPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar el componente
    }, []);

    const openingHours = {
        Lunes: "9:00 AM - 5:00 PM", // Horario continuo
        Martes: { mañana: "9:00 AM - 12:00 PM", tarde: "2:00 PM - 5:00 PM" }, // Horario dividido
        Miercoles: "9:00 AM - 5:00 PM",
        Jueves: { mañana: "9:00 AM - 12:00 PM", tarde: "2:00 PM - 5:00 PM" },
        Viernes: "9:00 AM - 5:00 PM",
        Sabado: "Cerrado",
        Domingo: "Cerrado"
    };
    const tarjetData = [
        {
            bg: "#00cfad",
            textColor: "#0d00ff",
        }
    ]

    const iconOptions = [
        { icon: shareIcon, id: "share" },
        { icon: servicesIcon, id: "services" },
        { icon: photosIcon, id: "photos" },
        { icon: videoIcon, id: "video" },
        { icon: scheduleIcon, id: "schedule" },
        { icon: locationIcon, id: "location" }
    ];


    const handleIconClick = (component) => {
        setSelectedComponent(prev => (prev === component ? null : component));
    };

    return (
        <div>
            <Header />
            <SearchBar />
            <div className="flex flex-col items-center mt-8 pb-5 relative">
                <div className="absolute left-0 right-0 flex justify-center gap-3 sm:gap-4 z-10 mt-60 sm:mt-80 md:mt-80 lg:mt-80 xl:mt-80">
                    {[
                        { icon: shareIcon, id: "share" },
                        { icon: servicesIcon, id: "services" },
                        { icon: photosIcon, id: "photos" },
                        { icon: videoIcon, id: "video" },
                        { icon: scheduleIcon, id: "schedule" },
                        { icon: locationIcon, id: "location" }
                    ].map(({ icon, id }) => (
                        <motion.button
                            key={id}
                            className={`p-[4px] rounded-full shadow-lg transition-all duration-300 ${selectedComponent === id
                                ? "bg-white"
                                : "bg-white"
                                }`}
                            onClick={() => handleIconClick(id)}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: selectedComponent === id ? 1.2 : 1 }}
                        >
                            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                                <img
                                    src={icon}
                                    alt={id}
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                        </motion.button>
                    ))}
                </div>

                <div className="w-full max-w-[600px] h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                    <TarjetCompany
                        bg={tarjetData[0].bg}
                        icon={icon}
                        name="Empresa XYZ"
                        slogan="Tu mejor opción"
                        width="600px"
                        height="350px"
                        flipped={false}
                        textColor={tarjetData[0].textColor}
                        iconSize="w-40 h-40"
                    />
                </div>
                <AnimatePresence>
                    {selectedComponent && (
                        <motion.div
                            key={selectedComponent}
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col justify-center items-center mt-5 mx-auto w-auto transition-all duration-300 ease-in-out"
                        >
                            <div className="mt-4 pl-4 pr-4 w-full text-center">
                                {selectedComponent === "share" && <Share bg={tarjetData[0].bg} icon={shareIcon} />}
                                {selectedComponent === "services" && <Services bg={tarjetData[0].bg} icon={servicesIcon} />}
                                {selectedComponent === "photos" && <Images bg={tarjetData[0].bg} icon={photosIcon} />}
                                {selectedComponent === "video" && <Videos bg={tarjetData[0].bg} icon={videoIcon} />}
                                {selectedComponent === "schedule" && <Schedule openingHours={openingHours} bg={tarjetData[0].bg} icon={scheduleIcon} />}
                                {selectedComponent === "location" && <Location bg={tarjetData[0].bg} icon={locationIcon} />}
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="pb-5">
                <CoWorkers />
            </div>
            <Information />
        </div>
    );
};

export default PerfilTarjetPage;
