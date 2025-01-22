import React, { createContext, useContext, useState } from "react";
import { DonorForm, User } from "../types";

interface DonorContextType {
  donors: User[];
  loading: boolean;
  error: string | null;
  registerDonor: (donor: DonorForm) => Promise<void>;
  // ... other methods
}

const DonorContext = createContext<DonorContextType | undefined>(undefined);

export const DonorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [donors, setDonors] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerDonor = async (donor: DonorForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donor),
      });
      const data = await response.json();
      setDonors((prev) => [...prev, data]);
    } catch (err) {
      setError("Failed to register donor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DonorContext.Provider value={{ donors, loading, error, registerDonor }}>
      {children}
    </DonorContext.Provider>
  );
};

export const useDonors = () => {
  const context = useContext(DonorContext);
  if (context === undefined) {
    throw new Error("useDonors must be used within a DonorProvider");
  }
  return context;
};
