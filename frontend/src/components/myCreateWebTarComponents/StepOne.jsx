import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import ButtonCustom from "../Buttons/ButtonCustom";

const StepOne = ({ cardData, onNext, onChange }) => {
    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        onChange(field, file);
    };

    return (
        <div className="space-y-4">
            <div>
                <div className="">
                    <label className="block font-medium mb-2">Subir Logo</label>
                    <div className="w-50">
                        <ButtonDefault
                            text="Seleccionar Logo"
                            onClick={() => document.getElementById("file-input-logo").click()}
                        />
                    </div>
                    <input
                        type="file"
                        id="file-input-logo"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "logo")}
                        className="hidden"
                    />
                    {cardData.logo && (
                        <img
                            src={URL.createObjectURL(cardData.logo)}
                            alt="Logo Preview"
                            className="w-24 h-24 object-cover mt-2 rounded"
                        />
                    )}</div>
            </div>

            <div>
                <label className="block font-medium mb-2">Subir Imagen de Fondo</label>
                <div className="w-50">
                    <ButtonDefault
                        text="Seleccionar Fondo"
                        onClick={() => document.getElementById("file-input-background").click()}
                    />
                </div>
                <input
                    type="file"
                    id="file-input-background"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "background")}
                />
                {cardData.background && (
                    <img
                        src={URL.createObjectURL(cardData.background)}
                        alt="Fondo Preview"
                        className="object-cover mt-2 rounded"
                        style={{ aspectRatio: '9 / 5', width: '100%' }}
                    />
                )}
            </div>

            <div className="mt-4 py-2 w-50">
                <ButtonCustom
                    text="Siguiente"
                    onClick={onNext} />
            </div>
        </div>
    );
};

export default StepOne;
