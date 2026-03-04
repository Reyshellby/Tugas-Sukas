export default function AdminLayout({ children }) {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex">
      <aside className="w-64 bg-gray-900 border-r border-white/10 p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
        <nav className="space-y-3 flex-1 text-sm">
          <a href="/admin" className="block hover:text-indigo-400">Dashboard</a>
          <a href="/admin/manage-admin" className="block hover:text-indigo-400">Admin</a>
          <a href="/admin/teachers" className="block hover:text-indigo-400">Guru</a>
          <a href="/admin/students" className="block hover:text-indigo-400">Siswa</a>
          <a href="/admin/academic-year" className="block hover:text-indigo-400">Tahun Ajaran</a>
          <a href="/admin/classes" className="block hover:text-indigo-400">Kelas</a>
          <a href="/admin/major" className="block hover:text-indigo-400">Jurusan</a>
          <a href="/admin/subject" className="block hover:text-indigo-400">Mata Pelajaran</a>
          <a href="/admin/assignment" className="block hover:text-indigo-400">Assignment</a>
        </nav>
        <button className="mt-6 bg-red-600 py-2 rounded-md font-semibold hover:bg-red-500 transition">Logout</button>
      </aside>

      <main className="flex-1 p-8 space-y-8">{children}</main>
    </div>
  );
}
