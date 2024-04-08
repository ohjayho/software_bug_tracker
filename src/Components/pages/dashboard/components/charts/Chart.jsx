import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./Chart.css";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels, Legend);

const data = {
  labels: ["Critical", "Urgent", "Major"],
  datasets: [
    {
      label: "Tickets by Severity",
      data: [12, 19, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)"
      ]
    }
  ]
};

const options = {
  plugins: {
    legend: {
      position: "right"
    },
    datalabels: {
      color: "#ffffff"
    }
  }
};

const option = {};

const Chart = ({ title }) => {
  return (
    <div className="chart_container border_shadow_component">
      <div className="header_chart">
        <h1 className="title_chart">{`Tickets by ${title}`}</h1>
      </div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Chart;
