/**
 *
 * Unused code
 *  
 */
import PreloadAnimation from "@/components/Layout-components/Preload/Preload";
import React, { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center align-middle">
          <PreloadAnimation extraLarge={true} />
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
