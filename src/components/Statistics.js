import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Statistics({ bejegyzesek }) {
  const totalHours = bejegyzesek.reduce((osszeg, bejegyzes) => {
    const kezdesIdo = new Date(`1970-01-01T${bejegyzes.kezdes}`);
    const befejezesIdo = new Date(`1970-01-01T${bejegyzes.befejezes}`);
    const munkaora = (befejezesIdo - kezdesIdo) / 1000 / 3600; // órában
    return osszeg + munkaora;
  }, 0);

  const kategoriaDb = bejegyzesek.reduce((kategoriaOsszeg, bejegyzes) => {
    const cimke = bejegyzes.cimke;
    if (!kategoriaOsszeg[cimke]) kategoriaOsszeg[cimke] = 0;
    kategoriaOsszeg[cimke] += 1;
    return kategoriaOsszeg;
  }, {});

  const pieData = {
    labels: Object.keys(kategoriaDb),
    datasets: [
      {
        data: Object.values(kategoriaDb),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Statisztikák</h2>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Összesített munkaórák:</h3>
        <p className="text-gray-700">{totalHours.toFixed(2)} óra</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Kategóriák szerinti eloszlás:
        </h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default Statistics;
