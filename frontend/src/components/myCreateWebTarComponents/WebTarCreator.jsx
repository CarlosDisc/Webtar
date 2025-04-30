import React, { useState } from "react";
import Header from "../homePageComponents/Header";
import StepOne from "./StepOne";

const WebTarCreator = () => {
    const [step, setStep] = useState(1);
    const [cardData, setCardData] = useState({
        logo: null,
        background: null,
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleDataChange = (field, value) => {
        setCardData({ ...cardData, [field]: value });
    };

    return (
        <div className=" min-h-screen flex flex-col ">
            <Header />
            <div className="mx-full p-4  bg-gray-300">
                <div className="max-w-2xl mx-auto p-6 ">
                    <h2 className="text-2xl font-bold mb-4">Crear Tarjeta — Paso {step}</h2>

                    {step === 1 && (
                        <StepOne
                            cardData={cardData}
                            onNext={nextStep}
                            onChange={handleDataChange}
                        />
                    )}

                    {/* Más pasos aquí */}
                </div>
            </div>
        </div>
    );
};

export default WebTarCreator;
