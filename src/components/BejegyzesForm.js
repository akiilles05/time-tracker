import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function BejegyzesForm({ addBejegyzes, editingBejegyzes }) {
  const [form, setForm] = useState({
    datum: new Date().toISOString().split("T")[0],
    kezdes: "",
    befejezes: "",
    leiras: "",
    cimke: "projekt",
  });

  useEffect(() => {
    if (editingBejegyzes) {
      setForm(editingBejegyzes);
    }
  }, [editingBejegyzes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBejegyzes = editingBejegyzes
      ? { ...form, id: editingBejegyzes.id }
      : { ...form, id: uuidv4() };
    addBejegyzes(newBejegyzes);
    setForm({
      datum: "",
      kezdes: "",
      befejezes: "",
      leiras: "",
      cimke: "projekt",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-4 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {editingBejegyzes
          ? "Bejegyzés szerkesztése"
          : "Új bejegyzés hozzáadása"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700">Dátum</label>
          <input
            type="date"
            className="form-input px-4 py-2 rounded-lg shadow-md w-full"
            value={form.datum}
            onChange={(e) => setForm({ ...form, datum: e.target.value })}
            max={`${new Date().getFullYear()}-12-31`}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Kezdési idő</label>
          <input
            type="time"
            className="form-input px-4 py-2 rounded-lg shadow-md w-full"
            value={form.kezdes}
            onChange={(e) => setForm({ ...form, kezdes: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Befejezési idő</label>
          <input
            type="time"
            className="form-input px-4 py-2 rounded-lg shadow-md w-full"
            value={form.befejezes}
            onChange={(e) => setForm({ ...form, befejezes: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700">Leírás</label>
        <input
          type="text"
          className="form-input px-4 py-2 rounded-lg shadow-md w-full"
          placeholder="Feladat leírása"
          value={form.leiras}
          onChange={(e) => setForm({ ...form, leiras: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Címke</label>
        <select
          className="form-select px-4 py-2 rounded-lg shadow-md w-full"
          value={form.cimke}
          onChange={(e) => setForm({ ...form, cimke: e.target.value })}
        >
          <option value="projekt">Projekt</option>
          <option value="ugyfel">Ügyfél</option>
          <option value="egyeb">Egyéb</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        {editingBejegyzes ? "Frissítés" : "Mentés"}
      </button>
    </form>
  );
}

export default BejegyzesForm;
