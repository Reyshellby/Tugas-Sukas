"use client";
import { Link, useLocation } from "react-router-dom";
import Footbar from "../layout/footbar";

export default function Landing() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* ================= NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex justify-end px-6 lg:px-8 py-4">
          <a
            href="/login"
            className="bg-indigo-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Masuk
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="flex items-center justify-center text-center px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Sistem Rapor Online Sekolah
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Kelola nilai siswa secara digital, transparan, dan terintegrasi.
            Memudahkan guru dalam input nilai serta orang tua dalam memantau
            perkembangan akademik secara real-time.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="/login"
              className="bg-indigo-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-200"
            >
              Get Started
            </a>

            <a
              href="#"
              className="text-indigo-400 font-semibold px-3 py-3 hover:text-indigo-300 transition"
            >
              Pelajari Lebih Lanjut →
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          <div className="bg-gray-900 border border-white/10 p-6 rounded-xl hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-3">Manajemen Nilai</h3>
            <p className="text-gray-400">
              Guru dapat menginput nilai PTS, PAS, dan tugas harian dengan
              sistem validasi otomatis dan rekapitulasi instan.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 p-6 rounded-xl hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-3">Akses Orang Tua</h3>
            <p className="text-gray-400">
              Orang tua dapat memantau perkembangan akademik siswa secara
              online tanpa harus menunggu pembagian rapor manual.
            </p>
          </div>

          <div className="bg-gray-900 border border-white/10 p-6 rounded-xl hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-3">Keamanan Data</h3>
            <p className="text-gray-400">
              Data tersimpan secara terstruktur dengan sistem autentikasi dan
              kontrol akses berbasis peran (role-based access).
            </p>
          </div>

        </div>
      </section>

      <Footbar />
    </div>
  );
}