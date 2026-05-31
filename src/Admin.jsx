import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import * as XLSX from "xlsx";

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/api/enquiries')
      .then((res) => res.json())
      .then((data) => {
        console.log('API Data:', data);
        setEnquiries(data);
      })

      .catch((err) => {
        console.log('Fetch Error:', err);
      });
  }, []);
  const [search, setSearch] = useState("");
  const filteredEnquiries = enquiries.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.phone.includes(search)
  );
  const logout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/login";
  };

  if (!localStorage.getItem("isAdmin")) {
    return <Navigate to="/login" />;
  }
  const deleteEnquiry = async (id) => {

    if (!window.confirm("Delete enquiry?"))
      return;

    await fetch(
      `http://localhost:5000/api/enquiries/${id}`,
      {
        method: "DELETE",
      }
    );

    setEnquiries(
      enquiries.filter(
        (item) => item.id !== id
      )
    );
  };
  const exportToExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(filteredEnquiries);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Enquiries"
    );

    XLSX.writeFile(
      workbook,
      "Enquiries.xlsx"
    );
  };
  return (

    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          ← Back to Home
        </Link>

        <button
          onClick={logout}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>

      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        Enquiries Dashboard
      </h1>
      <p className="mb-4 text-green-500">
        Total Enquiries: {enquiries.length}
      </p>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name, Email or Phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 p-3 rounded-lg bg-zinc-900 border border-yellow-600 text-white"
        />
      </div>
      <div className="mb-4 text-yellow-500 font-semibold">
        Showing {filteredEnquiries.length} of {enquiries.length} enquiries
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-yellow-700">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {enquiries.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center">
                  No enquiries found
                </td>
              </tr>
            ) : (
              filteredEnquiries.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
                  <td>{item.created_at}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteEnquiry(item.id)}
                      className="bg-red-600 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <button
          onClick={exportToExcel}
          className="bg-green-600 px-4 py-2 rounded mb-4 block mx-auto"
        >
          Export Excel
        </button>
      </div>
    </div>
  );
}