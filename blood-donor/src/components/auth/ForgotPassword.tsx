import React from "react";

const ForgotPassword: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Send Reset Link
          </button>

          <p className="text-center text-sm text-gray-600">
            Remember your password?{" "}
            <a href="/login" className="text-red-600 hover:text-red-500">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
