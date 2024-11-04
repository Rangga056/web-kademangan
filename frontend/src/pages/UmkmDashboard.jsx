import Table from "../components/dashboard/Table";
import { useState, useEffect } from "react";

const UmkmDashboard = () => {
  const [umkm, setUmkm] = useState([]);
  useEffect(() => {
    try {
      const fetchUmkm = async () => {
        const res = await fetch("http://localhost:3000/UMKM");
        const data = await res.json();
        setUmkm(data);
      };
      fetchUmkm();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const columns = [
    { Header: "Nama UMKM", accessor: "nama_umkm" },
    { Header: "Kategori", accessor: "kategori" },
    { Header: "Deskripsi", accessor: "deskripsi" },
    { Header: "Gambar", accessor: "gambar" },
  ];

  // const data = [
  //   { name: "John Doe", age: 28, email: "john@example.com" },
  //   { name: "Jane Smith", age: 34, email: "jane@example.com" },
  //   { name: "Mike Johnson", age: 45, email: "mike@example.com" },
  // ];
  return (
    <div className="flex flex-wrap container  bg-secondary rounded-md">
      <div className="w-full mx-auto">
        <h1 className="text-3xl text-primary font-bold mb-20">Data Umkm</h1>
        <div className="flex items-center justify-between gap-3 mb-5">
          <form className="w-full">
            <input
              type="text"
              className="w-full px-1 py-3 border border-primary rounded-md"
            />
          </form>

          <button className="bg-primary text-secondary px-3 py-3 inline-flex items-center rounded-md">
            Cari
          </button>
        </div>
        {/* <BarAction /> */}
        <Table columns={columns} data={umkm} />
      </div>
    </div>
  );
};

export default UmkmDashboard;