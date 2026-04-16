import React, { useState } from "react";

function PasswordRegex() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    if (value.length === 0) {
      setStrength("");
      return;
    }

    // Regex checks
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    let score = 0;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (value.length < 6 || score <= 1) {
      setStrength("Weak");
    } else if (score === 2 || score === 3) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  return (
    <div>
      <h2>Password Checker (Regex)</h2>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <p>Password Strength: {strength}</p>
    </div>
  );
}

export default PasswordRegex;