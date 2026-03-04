import AdminLayout from "./AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Admin", "Guru", "Siswa", "Kelas"].map((item) => (
          <div key={item} className="bg-gray-900 border border-white/10 p-6 rounded-xl">
            <p className="text-gray-400 text-sm">Total {item}</p>
            <h3 className="text-3xl font-bold mt-2">0</h3>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
