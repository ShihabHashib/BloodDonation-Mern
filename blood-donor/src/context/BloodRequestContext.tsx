import React, { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";
import { IBloodRequest } from "../types";

interface BloodRequestContextType {
  bloodRequests: IBloodRequest[];
  getBloodRequests: () => Promise<IBloodRequest[]>;
  createBloodRequest: (requestData: Partial<IBloodRequest>) => Promise<void>;
  updateBloodRequest: (
    id: string,
    requestData: Partial<IBloodRequest>
  ) => Promise<void>;
  deleteBloodRequest: (id: string) => Promise<void>;
}

const BloodRequestContext = createContext<BloodRequestContextType | undefined>(
  undefined
);

export const BloodRequestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bloodRequests, setBloodRequests] = useState<IBloodRequest[]>([]);

  const getBloodRequests = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blood-requests`
      );
      if (Array.isArray(response.data)) {
        setBloodRequests(response.data);
        return response.data;
      } else {
        console.error("Invalid response data:", response.data);
        setBloodRequests([]);
        return [];
      }
    } catch (error) {
      console.error("Error fetching blood requests:", error);
      setBloodRequests([]);
      throw error;
    }
  }, []);

  const createBloodRequest = async (requestData: Partial<IBloodRequest>) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/blood-requests`,
        requestData
      );
      await getBloodRequests();
    } catch (error) {
      console.error("Error creating blood request:", error);
      throw error;
    }
  };

  const updateBloodRequest = async (
    id: string,
    requestData: Partial<IBloodRequest>
  ) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/blood-requests/${id}`,
        requestData
      );
      await getBloodRequests();
    } catch (error) {
      console.error("Error updating blood request:", error);
      throw error;
    }
  };

  const deleteBloodRequest = async (id: string) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/blood-requests/${id}`
      );
      await getBloodRequests();
    } catch (error) {
      console.error("Error deleting blood request:", error);
      throw error;
    }
  };

  return (
    <BloodRequestContext.Provider
      value={{
        bloodRequests,
        getBloodRequests,
        createBloodRequest,
        updateBloodRequest,
        deleteBloodRequest,
      }}
    >
      {children}
    </BloodRequestContext.Provider>
  );
};

export const useBloodRequest = () => {
  const context = useContext(BloodRequestContext);
  if (!context) {
    throw new Error(
      "useBloodRequest must be used within a BloodRequestProvider"
    );
  }
  return context;
};
