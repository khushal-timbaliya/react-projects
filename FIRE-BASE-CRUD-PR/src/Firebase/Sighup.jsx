import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    city: "",
    hobby: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    pass: "",
    city: "",
    hobby: "",
  });

  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors on input change
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "*Enter name";
    if (!formData.email.trim()) newErrors.email = "*Enter email";
    if (!formData.pass.trim()) newErrors.pass = "*Enter password";
    if (!formData.city.trim()) newErrors.city = "*Enter city";
    if (!formData.hobby.trim()) newErrors.hobby = "*Enter hobby";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle signup submission
  const handleSignup = () => {
    if (!validateForm()) return;

    const { name, email, pass, city, hobby } = formData;

    createUserWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        setDoc(doc(db, "users", data.user.uid), {
          name,
          email,
          city,
          hobby,
        })
          .then(() => {
            navigate("/dashboard");
          })
          .catch((err) => {
            console.error("Error saving to Firestore:", err.message);
          });
      })
      .catch((error) => {
        console.error("Error during signup:", error.message);
        if (error.code === "auth/email-already-in-use") {
          setErrors((prev) => ({ ...prev, email: "Email already in use" }));
        } else if (error.code === "auth/weak-password") {
          setErrors((prev) => ({ ...prev, pass: "Password is too weak" }));
        }
      });
  };

  return (
    <div className="signup-container">
      <h1 className="heading">Sign Up Form</h1>
      <div className="navigation">
        <button className="nav-btn">
          <Link className="link" to={"/signin"}>
            Sign In
          </Link>
        </button>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Name"
          onChange={handleInputChange}
        />
        <p className="error-msg">{errors.name}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={handleInputChange}
        />
        <p className="error-msg">{errors.email}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="password"
          name="pass"
          value={formData.pass}
          placeholder="Enter Password"
          onChange={handleInputChange}
        />
        <p className="error-msg">{errors.pass}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="city"
          value={formData.city}
          placeholder="Enter City"
          onChange={handleInputChange}
        />
        <p className="error-msg">{errors.city}</p>
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="hobby"
          value={formData.hobby}
          placeholder="Enter Hobby"
          onChange={handleInputChange}
        />
        <p className="error-msg">{errors.hobby}</p>
      </div>
      <button className="submit-btn" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}
