import React from "react";
import Chart from "react-apexcharts";

function Precipitation({ precipiData }) {
  const dataValues = precipiData.map((item) => item.hour_rain);
  const categoryValues = precipiData.map((item) => item.hour_t);

  return (
    <>
      <Chart
        type="area"
        height={150}
        series={[
          {
            data: dataValues,
          },
        ]}
        options={{
          zoom: {
            enabled: false,
          },
          dataLabels: {
            enabled: false,
          },

          stroke: {
            curve: "smooth",
          },
          title: {
            text: "Precipitation",
            align: "left",
          },

          xaxis: {
            type: "datetime",
            categories: categoryValues,
          },
          tooltip: {
            x: {
              format: " HH:mm",
            },
          },
          colors: ["#00C8FE"],
        }}
      />
    </>
  );
}

export default Precipitation;
