"use client";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check localStorage for dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(savedDarkMode);

    // Apply dark class to document root element
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);

    // Store dark mode preference in localStorage
    localStorage.setItem("darkMode", newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="pointer-cursor mx-4" onClick={toggleDarkMode}>
      {dark ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-black" />
      )}
    </div>
  );
}
