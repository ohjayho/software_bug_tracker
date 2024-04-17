import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./Chart.css";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels, Legend, Colors);
ChartJS.register({
  id: "NoData",
  afterDraw: (chart) => {
    if (chart.data.datasets[0].data.length == 0) {
      let ctx = chart.ctx;
      let width = chart.width;
      let height = chart.height;

      chart.clear();
      ctx.save();
      ctx.textAlign = "center";
      ctx.texBaseline = "middle";
      ctx.fillText("No ticket to display", width / 2, height / 2);
      ctx.restore();
    }
  }
});

const Chart = ({ title, tickets }) => {
  const type_data = {
    labels: tickets[0].map((ticket) => ticket.type),
    datasets: [
      {
        label: "Tickets by Type",
        data: tickets[0].map((ticket) => ticket.cnt)
      }
    ]
  };
  const status_data = {
    labels: tickets[1].map((ticket) => ticket.status),
    datasets: [
      {
        label: "Tickets by Status",
        data: tickets[1].map((ticket) => ticket.cnt)
      }
    ]
  };
  const priority_data = {
    labels: tickets[2].map((ticket) => ticket.priority),
    datasets: [
      {
        label: "Tickets by Priority",
        data: tickets[2].map((ticket) => ticket.cnt)
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

  let data;

  if (title == "Type") {
    data = type_data;
  }
  if (title == "Status") {
    data = status_data;
  }
  if (title == "Priority") {
    data = priority_data;
  }

  return (
    <div className="chart_container border_shadow_component">
      <div className="header_chart">
        <h1 className="title_chart">{`Tickets by ${title}`}</h1>
      </div>
      {<Pie data={data} options={options} />}
    </div>
  );
};

export default Chart;
