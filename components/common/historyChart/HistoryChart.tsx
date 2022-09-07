import DescriptionCoin from "@components/common/DescriptionCoin/DescriptionCoin";
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
import useGetCoins from "hooks/useGetCoins";
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
const HistoryChart = () => {
  const { cryptoData } = useGetCoins();

  if (!cryptoData) return null;

  const { prices } = cryptoData;
  return (
    <div className="w-full justify-between max-w-7xl m-auto">
      <div>
        <DescriptionCoin />
      </div>
      <Line
        data={{
          labels: prices.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                : `${date.getHours()}: ${date.getMinutes()} AM`;
            return time.toLocaleString();
          }),
          datasets: [
            {
              data: prices.map((coin) => coin[1]),
              borderColor: "#312e81",
            },
          ],
        }}
      />
    </div>
  );
};

export default HistoryChart;
