"use client";

import React, { useState } from "react";
 import { Avatar } from "../../../../components/ui/avatar";


export const UserProfile = () => {
  // aqui estamos almacenado os datos del usuario
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    gender: "",
    province: "",
    address: "",
  });

  
  const genders = ["Femenino", "Masculino", "No binario", "Prefiero no decirlo"];
  const provinces = ["Buenos Aires", "Córdoba", "Mendoza", "Santa Fe"];

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Formulario enviado con éxito");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "500px",
        margin: "auto",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      {/* Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Avatar
          name={`${formData.name} ${formData.lastName}`}
          src="https://via.placeholder.com/150" 
          fallback="E" 
          size="lg"
        />
        <p style={{ margin: 0 }}>Subir foto de perfil (opcional)</p>
      </div>

      {/* Nombre */}
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Apellido */}
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Ingresa tu apellido"
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Género */}
      <div>
        <label htmlFor="gender">Género:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="" disabled>
            Selecciona tu género
          </option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      {/* Provincia */}
      <div>
        <label htmlFor="province">Provincia:</label>
        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="" disabled>
            Selecciona tu provincia
          </option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      {/* Dirección */}
      <div>
        <label htmlFor="address">Dirección:</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="Ingresa tu dirección"
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      
      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "0.75rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Guardar perfil
      </button>
    </form>
  );
};

export default UserProfile;
