import React from "react";
import Chart from "react-apexcharts";

function Temperature({ tempData }) {
  const dataValues = tempData.map((item) => item.hour_temp_c);
  const categoryValues = tempData.map((item) => item.hour_t);
  return (
    <div>
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
            text: "Temperature",
            align: "left",
          },

          xaxis: {
            type: "datetime",
            categories: categoryValues,
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          colors: ["#FF8B3D"],
        }}
      />
    </div>
  );
}

export default Temperature;
