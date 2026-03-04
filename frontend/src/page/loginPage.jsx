"use client";

import { useState } from "react";

export default function LoginPage() {
  const initialForm = {
    username: "",
    email: "",
    nip: "",
    nis: "",
    password: "",
  };

  const [role, setRole] = useState("siswa");
  const [form, setForm] = useState(initialForm);

  const roles = [
    { id: "siswa", label: "Siswa" },
    { id: "guru", label: "Guru" },
    { id: "admin", label: "Admin" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setForm(initialForm); // 🔥 reset semua field saat role berubah
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", {
      role,
      ...form,
    });

    alert(`Login sebagai ${role} berhasil (simulasi frontend)`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold">Sistem Rapor Online</h1>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-xl p-8 shadow-lg">
          {/* Role Selector */}
          <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
            {roles.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => handleRoleChange(r.id)}
                className={`flex-1 py-2 rounded-md text-sm font-semibold transition ${
                  role === r.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* ADMIN */}
            {role === "admin" && (
              <>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    required
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Masukkan username"
                    className="w-full bg-gray-800 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                    className="w-full bg-gray-800 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </>
            )}

            {/* GURU */}
            {role === "guru" && (
              <div>
                <label className="block text-sm text-gray-400 mb-2">NIP</label>
                <input
                  type="text"
                  name="nip"
                  required
                  value={form.nip}
                  onChange={handleChange}
                  placeholder="Masukkan NIP"
                  className="w-full bg-gray-800 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {/* SISWA */}
            {role === "siswa" && (
              <div>
                <label className="block text-sm text-gray-400 mb-2">NIS</label>
                <input
                  type="text"
                  name="nis"
                  required
                  value={form.nis}
                  onChange={handleChange}
                  placeholder="Masukkan NIS"
                  className="w-full bg-gray-800 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {/* PASSWORD */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Masukkan password"
                className="w-full bg-gray-800 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 py-2 rounded-md font-semibold hover:bg-indigo-500 transition-all duration-200 hover:scale-[1.02]"
            >
              Masuk sebagai {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Sistem Rapor Online
        </p>
      </div>
    </div>
  );
}