// src/components/LogoutButton.tsx
"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ redirect: false });
    window.location.href = "/api/auth/keycloak-logout";
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-red-700 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Logout
    </button>
  );
}
