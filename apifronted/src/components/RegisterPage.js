import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    persistent: false,
  });
  const navigate = useNavigate();

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialCharacter: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false); // State to track overall form validity
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(""); // State to track error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      // Perform password strength validation
      const passwordLengthValid = value.length >= 8;
      const passwordUppercaseValid = /[A-Z]/.test(value);
      const passwordLowercaseValid = /[a-z]/.test(value);
      const passwordSpecialCharacterValid = /[!@#$%^&*(),.?":{}|<>]/.test(
        value
      );

      setPasswordValidation({
        length: passwordLengthValid,
        uppercase: passwordUppercaseValid,
        lowercase: passwordLowercaseValid,
        specialCharacter: passwordSpecialCharacterValid,
      });
      setIsValid(
        passwordLengthValid &&
          passwordUppercaseValid &&
          passwordLowercaseValid &&
          passwordSpecialCharacterValid
      );
    } else if (name === "username") {
      const usernameValid = value.length >= 6;
      if (!usernameValid) {
        setError("Username must be at least 6 characters long.");
      } else {
        setError(""); // Clear error if the input is valid
      }
    } else if (name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!emailValid) {
        setError("Please enter a valid email address.");
      } else {
        setError(""); // Clear error if the input is valid
      }
    }
    // Check if both username/email and password are valid
    setIsValid(
      passwordValidation.length &&
        passwordValidation.uppercase &&
        passwordValidation.lowercase &&
        passwordValidation.specialCharacter &&
        ((name === "username" && value.length >= 6) ||
          (name === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)))
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      );
      // Display success message
      alert("Registration successful");
      navigate("/Login");
      // Refresh the page
      //window.location.reload();
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred during registration."
      );
      console.error("Registration failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-3  cursor-pointer"
                onClick={toggleShowPassword}
              />
            </div>

            <div className="flex items-center mt-2 space-x-2">
              <ul className="list-disc list-inside">
                <li
                  style={{ color: passwordValidation.length ? "green" : "red" }}
                >
                  {passwordValidation.length ? "✓" : "✗"} 8 characters
                </li>
                <li
                  style={{ color: passwordValidation.uppercase ? "green" : "red" }}
                >
                  {passwordValidation.uppercase ? "✓" : "✗"} Uppercase
                </li>
                <li
                  style={{ color: passwordValidation.lowercase ? "green" : "red" }}
                >
                  {passwordValidation.lowercase ? "✓" : "✗"} Lowercase
                </li>
                <li
                 style={{ color: passwordValidation.specialCharacter ? "green" : "red" }}
                >
                  {passwordValidation.specialCharacter ? "✓" : "✗"} Special
                  Character
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={!isValid || loading}
              className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
                (!isValid || loading) && "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
