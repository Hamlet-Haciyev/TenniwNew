import React, { useEffect, useState } from "react";
import ChartData from "chart.js";
import { Chart, Doughnut, Line, Bar } from "react-chartjs-2";
import styled from "styled-components";
const Overview = () => {
  // const [chartData, setChartData] = useState({});
  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
  //     const data = await res.json();
  //     const cryptoName = [];
  //     const cryptoPriceUsd = [];
  //     data.data.map((crypto) => cryptoName.push(crypto.name));
  //     data.data.map((crypto) => cryptoPriceUsd.push(crypto.priceUsd));
  //     console.log(cryptoName);
  //     console.log(cryptoPriceUsd);
  //     setChartData({
  //       labels: cryptoName,
  //       datasets: [
  //         {
  //           label: "Price in USD",
  //           data: cryptoPriceUsd,
  //           backgroundColor: [
  //             "#ffbb11",
  //             "#ecf0f1",
  //             "#50AF95",
  //             "#f3ba2f",
  //             "#2a71d0",
  //           ],
  //         },
  //       ],
  //     });
  //   };
  //   fetchPrices();
  // }, []);
  const cryptoName = ["Bitcoin", "Ethereum", "Tether", "BNB", "USD Coin"];
  const cryptoPriceUsd = [
    "19294.4959339237637233",
    "1312.4647083010607204",
    "1.0003876372828858",
    "272.3066901481553513",
    "1.0002384009441524",
  ];

  const chartData = {
    labels: cryptoName,
    datasets: cryptoPriceUsd,
  };
  return (
    <OverviewContainer>
      asd
      {/* <Line data={chartData} options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices"
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}/> */}
      {/* <Chart type="line" data={chartData} /> */}
    </OverviewContainer>
  );
};
const OverviewContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
`;
export default Overview;
