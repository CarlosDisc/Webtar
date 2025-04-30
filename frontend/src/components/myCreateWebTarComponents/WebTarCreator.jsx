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
    <div>
      <Header />

      <div className="max-w-xl mx-auto p-4">
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
  );
};

export default WebTarCreator;
