import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Para animaciones
import tarjet from '../../images/tarjet.png'; // Tu imagen de ejemplo

const Imagenes = ({ bg, icon }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual
    const [isPreview, setIsPreview] = useState(false); // Estado para mostrar la previsualización
    const [previewImage, setPreviewImage] = useState(null); // Estado para almacenar la imagen seleccionada

    // Array de imágenes simuladas (todas son la misma imagen en este caso)
    const images = [...Array(5)].map((_, index) => (
        <img
            key={index}
            src={tarjet}
            alt={`tarjet ${index + 1}`}
            className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            onClick={() => handlePreview(tarjet)} // Al hacer clic, muestra la previsualización
        />
    ));

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePreview = (image) => {
        setPreviewImage(image);
        setIsPreview(true); // Activa la vista previa
    };

    const closePreview = () => {
        setIsPreview(false); // Cierra la vista previa
        setPreviewImage(null);
    };

    return (
        <div>
            <div
                className="relative w-full p-4 rounded-lg"
                style={{ backgroundColor: bg }}
            >
                {/* Imagen actual con animación de transición */}
                <div className='bg-white '>
                    {/* Título + Icono con fondo blanco */}
                    <div className="bg-white  p-3 px-6  flex items-center gap-4 w-auto mx-10 ">
                        {icon && (
                            <img
                                src={icon}
                                alt="icono"
                                className="w-8 h-8 object-contain"
                            />
                        )}
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
                            LO QUE HACEMOS
                        </h1>
                    </div>

                    {/* Slider */}
                    <motion.div
                        className="flex justify-center p-6"
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {images[currentIndex]}
                    </motion.div>

                    {/* Botones de navegación */}
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                        onClick={handlePrev}
                    >
                        &#60;
                    </button>
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                        onClick={handleNext}
                    >
                        &#62;
                    </button>
                </div>
            </div>


            {/* Previsualización de la imagen al hacer clic */}
            {isPreview && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative w-full sm:w-4/5 md:w-3/4 lg:w-1/2 bg-white p-4 rounded-lg shadow-xl">
                        <img
                            src={previewImage}
                            alt="Previsualización"
                            className="w-full h-auto object-contain"
                        />
                        <button
                            onClick={closePreview}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Imagenes;
