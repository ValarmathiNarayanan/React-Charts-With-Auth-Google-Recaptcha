import React from "react";
import { Bar } from "react-chartjs-2";

export class ChartWithStaticData extends React.Component {
  constructor(props) {
    super(props);
    this.chartInstance = null;
    this.onRef = this.onRef.bind(this);
  }

  onRef(chart) {
    this.chartInstance = chart ? chart.chartInstance : null;
  }

  get data() {
    return {
      labels: ["Green", "Blue", "Orange", "Yellow", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          borderColor: "#fff",
          borderWidth: "3",
          hoverBorderColor: "#000",
          backgroundColor: ["#f38b4a", "#56d798", "#ff8397", "#6970d5"],
          hoverBackgroundColor: ["#f38b4a", "#56d798", "#ff8397", "#6970d5"]
        }
      ]
    };chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    }
  }

  options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
    hover: {
      animationDuration: 0,
      onHover: e => {
        const chartInstance = this.chartInstance;
        if (!chartInstance) {
          return;
        }

        if (chartInstance.getElementAtEvent) {
          const point = chartInstance.getElementAtEvent(e);
          e.target.style.cursor = point.length ? "pointer" : "default";
        }
      }
    },
    legend: {
      display: false
    },
    layout: {
      padding: {
        top: 24
      }
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: true
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: "transparent",
            drawBorder: false,
            zeroLineColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <Bar data={this.data} options={this.options} ref={this.onRef} />
      </div>
    );
  }
}
