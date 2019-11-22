import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Funny", "Informative", "Ok", "Inspiring", "Fascinating"],
  datasets: [
    {
      label: "Education && TED",
      backgroundColor: [
        "rgb(224,42,29)",
        "rgb(192,192,192)",
        "rgb(224,42,29)",
        "rgb(192,192,192)",
        "rgb(224,42,29)"
      ],
      borderColor: [
        "rgb(192,192,192)",
        "rgb(224,42,29)",
        "rgb(192,192,192)",
        "rgb(224,42,29)",
        "rgb(192,192,192)",
        "rgb(224,42,29)"
      ],
      borderWidth: 3,
      hoverBackgroundColors: [
        "rgba(255,0,0)",
        "rgba(0,255,0)",
        "rgba(0,0,255)",
        "rgba(255,255,0)",
        "rgba(0,255,255)",
        "rgba(255,0,255)",
        "rgba(124,252,0)",
        "rgba(255,0,255)"
      ],
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [131, 446, 41, 1296, 1288]
    }
  ]
};

export default class chart extends React.Component {
  render() {
    return (
      <div className='chart'>
        <h2 className='chart__heading'>Ted Talks Data</h2>
        <Bar
          data={data}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    drawOnChartArea: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
