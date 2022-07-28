import React, { useEffect, useRef, useState } from "react";
import {
  Chart as Chartjs,
  CategoryScale,
  Legend,
  LinearScale,
  BarElement,
  LineController,
  Title,
  LineElement,
  BarController,
  Tooltip,
  PointElement,
} from "chart.js";
import { historyOptions } from "chartconfig/chartConfig";
import { Line } from "react-chartjs-2";

Chartjs.register(
  CategoryScale,
  Legend,
  LineController,
  LinearScale,
  BarController,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip
);
const HistoryChart = ({ data }) => {
  return (
    <div>
      <Line
        data={{
          labels: data?.prices.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                : `${date.getHours()}: ${date.getMinutes()} AM`;
            return time.toLocaleString();
          }),
          datasets: [
            {
              data: data?.prices.map((coin) => coin[1]),
              borderColor: "#312e81",
            },
          ],
        }}
      />
    </div>
  );
};

export default HistoryChart;
