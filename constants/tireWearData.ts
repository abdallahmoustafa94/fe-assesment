export const tireWearData = {
  icon: "/assets/icons/tire-wire.svg",
  label: "Tire Wear",
  series: [25],
  colors: ["#fff"],
  options: {
    colors: ["#ffffff", "#ffffff"],
    chart: {
      foreColor: "#000",
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -140,
        endAngle: 140,
        track: {
          background: "rgba(244, 245, 249, 0.9)",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 9,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },

          value: {
            offsetY: -2,
            fontSize: "22px",
            style: {
              color: "#fff",
            },
          },
        },
        hollow: {
          margin: 5,
          size: "60%",
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "solid",
      colors: ["#F6CC0D"],
    },
  },
};
