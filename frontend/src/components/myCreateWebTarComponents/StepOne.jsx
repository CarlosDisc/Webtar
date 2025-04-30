import React from "react";

const StepOne = ({ cardData, onNext, onChange }) => {
    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        onChange(field, file);
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block font-medium mb-2">Subir Logo</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "logo")}
                />
                {cardData.logo && (
                    <img
                        src={URL.createObjectURL(cardData.logo)}
                        alt="Logo Preview"
                        className="w-24 h-24 object-cover mt-2 rounded"
                    />
                )}
            </div>

            <div>
                <label className="block font-medium mb-2">Subir Imagen de Fondo</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "background")}
                />
                {cardData.background && (
                    <img
                        src={URL.createObjectURL(cardData.background)}
                        alt="Fondo Preview"
                        className="w-full h-32 object-cover mt-2 rounded"
                    />
                )}
            </div>

            <button
                onClick={onNext}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Siguiente
            </button>
        </div>
    );
};

export default StepOne;
