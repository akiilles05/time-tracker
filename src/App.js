import React, { useState, useEffect } from "react";
import BejegyzesForm from "./components/BejegyzesForm";
import BejegyzesList from "./components/BejegyzesList";
import Statistics from "./components/Statistics";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from "date-fns";

function App() {
  const [bejegyzesek, setBejegyzesek] = useState(() => {
    // Adatok betöltése a localStorage-ból, ha vannak
    const storedBejegyzesek = localStorage.getItem("bejegyzesek");
    return storedBejegyzesek ? JSON.parse(storedBejegyzesek) : [];
  });
  const [editingBejegyzes, setEditingBejegyzes] = useState(null);
  const [view, setView] = useState("daily"); // Napi, heti vagy havi nézet beállítása

  // Adatok betöltése a localStorage-ból
  useEffect(() => {
    const storedBejegyzesek =
      JSON.parse(localStorage.getItem("bejegyzesek")) || [];
    setBejegyzesek(storedBejegyzesek);
  }, []);

  // Adatok mentése a localStorage-ba
  useEffect(() => {
    localStorage.setItem("bejegyzesek", JSON.stringify(bejegyzesek));
  }, [bejegyzesek]);

  // Bejegyzés hozzáadása vagy szerkesztése
  const addBejegyzes = (newBejegyzes) => {
    if (editingBejegyzes) {
      setBejegyzesek(
        bejegyzesek.map((bejegyzes) =>
          bejegyzes.id === editingBejegyzes.id ? newBejegyzes : bejegyzes
        )
      );
      setEditingBejegyzes(null); // Szerkesztési mód kikapcsolása
      toast.success("Bejegyzés frissítése sikeres!");
    } else {
      setBejegyzesek([...bejegyzesek, newBejegyzes]);
      toast.success("Bejegyzés mentése sikeres!");
    }
  };

  // Bejegyzés törlése
  const deleteBejegyzes = (id) => {
    setBejegyzesek(bejegyzesek.filter((b) => b.id !== id));
    toast.error("Bejegyzés törölve!");
  };

  // Bejegyzés szerkesztése
  const editBejegyzes = (bejegyzes) => {
    setEditingBejegyzes(bejegyzes);
  };

  // Bejegyzések csoportosítása a nézet (view) alapján
  const groupBejegyzesek = () => {
    const grouped = {};

    bejegyzesek.forEach((bejegyzes) => {
      let key;
      if (view === "daily") {
        key = format(new Date(bejegyzes.datum), "yyyy-MM-dd");
      } else if (view === "weekly") {
        const start = startOfWeek(new Date(bejegyzes.datum));
        const end = endOfWeek(new Date(bejegyzes.datum));
        key = `${format(start, "yyyy-MM-dd")} - ${format(end, "yyyy-MM-dd")}`;
      } else if (view === "monthly") {
        key = format(new Date(bejegyzes.datum), "yyyy-MM");
      }

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(bejegyzes);
    });

    return grouped;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Időnyilvántartó Rendszer
      </h1>

      {/* Nézetválasztó (Napi, Heti, Havi) */}
      <div className="flex justify-center mb-4">
        <select
          className="form-select px-4 py-2 rounded-lg shadow-md"
          onChange={(e) => setView(e.target.value)}
          value={view}
        >
          <option value="daily">Napi nézet</option>
          <option value="weekly">Heti nézet</option>
          <option value="monthly">Havi nézet</option>
        </select>
      </div>

      <BejegyzesForm
        addBejegyzes={addBejegyzes}
        editingBejegyzes={editingBejegyzes}
      />

      {/* Csoportosított bejegyzések átadása a BejegyzesList komponensnek */}
      <BejegyzesList
        groupedBejegyzesek={groupBejegyzesek()}
        deleteBejegyzes={deleteBejegyzes}
        editBejegyzes={editBejegyzes}
      />

      {/* Statisztikai modul */}
      <Statistics bejegyzesek={bejegyzesek} />

      <ToastContainer />
    </div>
  );
}

export default App;
