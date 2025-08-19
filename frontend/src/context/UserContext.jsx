// UserContext.jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <UserContext.Provider value={{ step, setStep, nextStep, prevStep }}>
      {children}
    </UserContext.Provider>
  );
};
