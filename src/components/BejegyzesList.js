import React from "react";

function BejegyzesList({ groupedBejegyzesek, deleteBejegyzes, editBejegyzes }) {
  if (Object.keys(groupedBejegyzesek).length === 0) {
    return <p className="text-center text-gray-500">Nincsenek bejegyzések</p>;
  }

  return (
    <div className="space-y-8">
      {Object.keys(groupedBejegyzesek).map((group) => (
        <div key={group}>
          <h2 className="text-xl font-bold text-gray-700 mb-2">{group}</h2>
          <div className="space-y-4">
            {groupedBejegyzesek[group].map((bejegyzes) => (
              <div
                key={bejegyzes.id}
                className="p-6 bg-gray-100 rounded-lg shadow-lg flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {bejegyzes.leiras}
                  </p>
                  <p className="text-sm text-gray-500">
                    {bejegyzes.datum} | {bejegyzes.kezdes} -{" "}
                    {bejegyzes.befejezes} ({bejegyzes.cimke})
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => editBejegyzes(bejegyzes)}
                    className="px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition duration-300 ease-in-out"
                  >
                    Szerkesztés
                  </button>
                  <button
                    onClick={() => deleteBejegyzes(bejegyzes.id)}
                    className="px-4 py-2 text-white bg-red-600 rounded-lg shadow hover:bg-red-700 transition duration-300 ease-in-out"
                  >
                    Törlés
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BejegyzesList;
