import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNotification } from "../context/NotificationContext";

// Add validation schema
const donorSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    errorMap: () => ({ message: "Please select a valid blood type" }),
  }),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

type DonorFormData = z.infer<typeof donorSchema>;

const DonorRegistration = () => {
  const { showNotification } = useNotification();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonorFormData>({
    resolver: zodResolver(donorSchema),
  });

  const onSubmit = async (data: DonorFormData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/donors/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      showNotification("success", "Registration successful!");
      reset();
      // Optionally redirect to login page
      // navigate('/login');
    } catch (error) {
      console.error("Error registering donor:", error);
      showNotification(
        "error",
        error.message || "Registration failed. Please try again later."
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">Donor Registration</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
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
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 hover:bg-red-600 transition-colors"
            >
              Register as Donor
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already a donor?{" "}
              <a href="/login" className="text-red-500 hover:text-red-600">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;
