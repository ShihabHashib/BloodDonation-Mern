import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { API_ENDPOINTS } from "../config/api";
import { useNotification } from "../context/NotificationContext";

const patientSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    errorMap: () => ({ message: "Please select a valid blood type" }),
  }),
  hospital: z.string().min(3, "Address must be at least 3 characters"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  alternateContact: z.string().optional(),
  requiredUnits: z.number().min(1).max(10, "Maximum 10 units allowed"),
  urgencyLevel: z.string().min(1, "Please select a date"),
  hospitalAddress: z.string().min(10, "Hospital address must be detailed"),
  additionalNotes: z.string().optional(),
  postedBy: z.string().min(2, "Name must be at least 2 characters"),
});

type PatientFormData = z.infer<typeof patientSchema>;

const PatientRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
  });

  const { showNotification } = useNotification();
  const [captcha, setCaptcha] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
    userAnswer: "",
  });

  const generateNewCaptcha = () => {
    setCaptcha({
      ...captcha,
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
      userAnswer: "",
    });
  };

  const onSubmit = async (data: PatientFormData) => {
    // Verify captcha
    if (parseInt(captcha.userAnswer) !== captcha.num1 + captcha.num2) {
      showNotification("error", "Incorrect CAPTCHA answer. Please try again.");
      generateNewCaptcha();
      return;
    }

    try {
      const response = await fetch(API_ENDPOINTS.PATIENTS.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register patient");
      }

      const result = await response.json();
      showNotification(
        "success",
        result.message || "Blood request created successfully!"
      );
      reset();
      generateNewCaptcha();
    } catch (error) {
      console.error("Error registering patient:", error);
      showNotification(
        "error",
        error instanceof Error ? error.message : "Error registering patient"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">
            Blood Request Registration
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Patient Name</label>
              <input
                type="text"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Blood Type</label>
              <select
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("bloodType")}
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bloodType.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Location here"
                {...register("hospital")}
              />
              {errors.hospital && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.hospital.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter patient's or attendant's mobile number"
                {...register("mobile")}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Alternate Contact Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Emergency contact number"
                {...register("alternateContact")}
              />
              {errors.alternateContact && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.alternateContact.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Required Units</label>
              <input
                type="number"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                min="1"
                max="10"
                {...register("requiredUnits", { valueAsNumber: true })}
              />
              {errors.requiredUnits && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.requiredUnits.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Need Blood Within
              </label>
              <input
                type="date"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                min={new Date().toISOString().split("T")[0]}
                max={
                  new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                {...register("urgencyLevel")}
              />
              {errors.urgencyLevel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.urgencyLevel.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Hospital Address
              </label>
              <textarea
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter complete hospital address"
                {...register("hospitalAddress")}
              />
              {errors.hospitalAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.hospitalAddress.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter any additional information or special requirements"
                rows={3}
                {...register("additionalNotes")}
              />
              {errors.additionalNotes && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.additionalNotes.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Posted By</label>
              <input
                type="text"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your name or designation"
                {...register("postedBy")}
              />
              {errors.postedBy && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postedBy.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Verify you're human
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium">
                  {captcha.num1} + {captcha.num2} ={" "}
                </span>
                <input
                  type="number"
                  className="w-24 p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={captcha.userAnswer}
                  onChange={(e) =>
                    setCaptcha({ ...captcha, userAnswer: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={generateNewCaptcha}
                  className="p-2 text-red-500 hover:text-red-600"
                >
                  ↻ New
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 hover:bg-red-600 transition-colors"
            >
              Request Blood
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;
