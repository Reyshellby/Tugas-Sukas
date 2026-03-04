import AdminLayout from "./AdminLayout";
export default function AdminSubjectPage() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Manajemen Mata Pelajaran</h1>

      <form className="bg-gray-900 p-6 rounded-xl border border-white/10 space-y-4">
        <input placeholder="Nama Mapel" className="w-full bg-gray-800 p-2 rounded" />
        <button className="bg-indigo-600 px-4 py-2 rounded">Tambah Mapel</button>
      </form>

      <table className="w-full mt-8 text-sm">
        <thead className="border-b border-white/10 text-gray-400">
          <tr>
            <th className="text-left py-3">Nama</th>
            <th className="text-left py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/5">
            <td className="py-3">-</td>
            <td className="py-3 space-x-2">
              <button className="bg-yellow-600 px-2 py-1 rounded text-xs">Update</button>
              <button className="bg-red-600 px-2 py-1 rounded text-xs">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}