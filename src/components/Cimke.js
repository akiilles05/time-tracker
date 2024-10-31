import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CimkeDistributionChart({ bejegyzesek }) {
  const kategoriak = bejegyzesek.reduce((osszefoglalo, bejegyzes) => {
    const cimke = bejegyzes.cimke;
    if (!osszefoglalo[cimke]) osszefoglalo[cimke] = 0;
    osszefoglalo[cimke] += 1;
    return osszefoglalo;
  }, {});

  const data = {
    labels: Object.keys(kategoriak),
    datasets: [
      {
        data: Object.values(kategoriak),
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

  return <Pie data={data} />;
}

export default CimkeDistributionChart;
