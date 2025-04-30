import React, { useState } from "react";
import CardPreview from "./CardPreview";
import ButtonCustom from "../Buttons/ButtonCustom";
import SelectFont from "./SelectFont";
import ButtonCustomWhite from "../Buttons/ButtonCustomWhite";
import profileDefault from "../../images/profileDefault.png";
import ColorPalette from "./ColorPalette";

const TemplateStyle = () => {
    const [nombreNegocio, setNombreNegocio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [slogan, setSlogan] = useState("");
    const [logo, setLogo] = useState(profileDefault);
    const [posicion, setPosicion] = useState(1);
    const [imagenFondo, setImagenFondo] = useState();
    const [fontColor, setFontColor] = useState("#000000");
    const [fontFamily, setFontFamily] = useState("Arial");

    const templates = import.meta.glob("../../images/templates/*.jpg", {
        eager: true,
    });
    const templateImages = Object.values(templates).map((mod) => mod.default);

    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full max-w-4xl px-4 mx-auto  rounded-xl flex flex-col items-center">
            {/* Subida de Logo */}
            <div className="mb-6 pt-6 w-full">
                <h2 className="text-lg font-semibold mb-2 text-center">Logo</h2>
                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {logo && (
                            <div className="flex justify-center">
                                <img
                                    src={logo}
                                    alt="Logo Preview"
                                    className="w-24 h-24 object-cover rounded-lg shadow"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                            id="logo-input"
                            className="hidden"
                        />
                        <label
                            htmlFor="logo-input"
                            className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                        >
                            Subir Logo
                        </label>
                    </div>
                </div>
            </div>

            {/* Formulario */}
            <div className="w-full max-w-md">
                {/* Nombre de Negocio */}
                <div className="mb-6">
                    <label htmlFor="nombreNegocio" className="block text-lg font-semibold mb-2">
                        Nombre de Negocio
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre de tu negocio"
                        id="nombreNegocio"
                        value={nombreNegocio}
                        onChange={(e) => setNombreNegocio(e.target.value)}
                        className="my-input-style w-full"
                        required
                    />
                </div>

                {/* Categoría */}
                <div className="mb-6">
                    <label htmlFor="categoria" className="block text-lg font-semibold mb-2">
                        Categoría
                    </label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="my-input-style w-full"
                        required
                    >
                        <option value="">Selecciona una categoría</option>
                        <option value="comida">Comida</option>
                        <option value="accesorios">Accesorios</option>
                        <option value="juguetes">Juguetes</option>
                        <option value="salud">Salud</option>
                    </select>
                </div>

                {/* Eslogan */}
                <div className="mb-6">
                    <label htmlFor="descripcion" className="block text-lg font-semibold mb-2">
                        Presentación o Eslogan
                    </label>
                    <input
                        type="text"
                        placeholder="Descripción breve o eslogan"
                        id="descripcion"
                        value={slogan}
                        onChange={(e) => setSlogan(e.target.value)}
                        className="my-input-style w-full"
                        required
                    />
                </div>

                {/* Selector de fuente */}
                <div className="mb-6">
                    <SelectFont selectedFont={fontFamily} onChangeFont={setFontFamily} />
                </div>

                {/* Selector de color */}
                <div className="mb-10 w-full">
                    <ColorPalette
                        label="Color de Fuente"
                        initialColor={fontColor}
                        onColorChange={(color) => {
                            setFontColor(color);
                        }}
                    />
                </div>
            </div>

            {/* Selección de Template */}
            <div className="w-full px-4">
                <h3 className="text-lg font-semibold mb-4 text-center">Seleccionar Template</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4">
                    {templateImages.map((img, index) => (
                        <div
                            key={index}
                            className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${imagenFondo === img
                                    ? "scale-105 border-2 border-blue-500"
                                    : "border-transparent hover:scale-105"
                                }`}
                            onClick={() => setImagenFondo(img)}
                        >
                            <img src={img} alt={`Template ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
                                Template {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Botones de diseño */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6">
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg text-white font-semibold transition ${posicion === 1 ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    onClick={() => setPosicion(1)}
                >
                    Diseño 1
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg text-white font-semibold transition ${posicion === 2 ? "bg-green-700" : "bg-green-500 hover:bg-green-600"
                        }`}
                    onClick={() => setPosicion(2)}
                >
                    Diseño 2
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg text-white font-semibold transition ${posicion === 3 ? "bg-purple-700" : "bg-purple-500 hover:bg-purple-600"
                        }`}
                    onClick={() => setPosicion(3)}
                >
                    Diseño 3
                </button>
            </div>

            {/* Vista previa */}
            <CardPreview
                nombreNegocio={nombreNegocio}
                slogan={slogan}
                logo={logo}
                modo="template"
                posicion={posicion}
                imagenFondo={imagenFondo}
                colorTexto={fontColor}
                fontFamily={fontFamily}
            />

            {/* Botones finales */}
            <div className="w-full max-w-md p-6">
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <ButtonCustomWhite text="Omitir" />
                    <ButtonCustom text="Guardar Perfil" />
                </div>
            </div>
        </div>
    );
};

export default TemplateStyle;
