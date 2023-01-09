new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wendsday",
      "Thursday",
      "Friday",
      "Sunday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#7f2034",
          "#7f2034",
          "#7f2034",
          "#7f2034",
          "#7f2034",
          "#7f2034",
          "#7f2034",
        ],
        data: [6, 12, 7, 5, 6, 4, 8],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Code Time",
    },
  },
});
