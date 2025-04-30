import React from 'react';

const Videos = ({ bg, icon }) => {
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Ejemplo de URL de YouTube (puedes cambiarla)

    return (
        <div className="flex justify-center items-center p-4"
            style={{ backgroundColor: bg }}>
            <div className="w-full md:w-[600px] lg:w-[800px] bg-white">
                <div className="flex items-center gap-3 p-2">
                    {icon && (
                        <img
                            src={icon}
                            alt="icono"
                            className="w-8 h-8 object-contain"
                        />
                    )}
                    <h1 className="text-3xl font-bold text-gray-700">NUESTRO VIDEO</h1>
                </div>
                <div className='p-2'>
                    <iframe
                        width="100%"
                        height="400px"
                        src={videoUrl}
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>

    );
};
export default Videos;