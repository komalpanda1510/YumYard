import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="flex w-full min-h-screen items-center justify-center p-4 bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex items-center gap-4 mb-4">
          <IoIosArrowRoundBack
            size={30}
            className="text-[#ff4d2d] cursor-pointer"
            onClick={() => navigate("/signin")}
          />

          <h1 className="text-2xl font-bold text-center text-[#ff4d2d]">
            Forgot Password
          </h1>
        </div>

        {step === 1 && (
          <div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-grey-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none border-gray-200
          "
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <button
              className={`w-full font-semibold py-2 mt-4 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
            >
              Send Otp
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-grey-700 font-medium mb-1"
              >
                OTP
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none border-gray-200
          "
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
              />
            </div>
            <button
              className={`w-full font-semibold py-2 mt-4 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
            >
              Verify
            </button>
          </div>
        )}


        {step === 3 && (
          <div>
            <div className="mb-6">
              <label
                htmlFor="newPassword"
                className="block text-grey-700 font-medium mb-1"
              >
                New Password
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none border-gray-200
          "
                placeholder="Enter new password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-grey-700 font-medium mb-1"
              >
                Confirm Password
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none border-gray-200
          "
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <button
              className={`w-full font-semibold py-2 mt-4 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
