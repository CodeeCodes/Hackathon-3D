import React from "react";
import { Bar, Radar, Line } from "react-chartjs-2";

const data = {
  labels: ["Funny", "Sad", "Enthusiastic", "Angry", "Thought-provoking", "NA"],
  datasets: [
    {
      label: "Education && TED",
      backgroundColor: [
        "rgb(224,42,29)",
        // "rgb(192,192,192)",
        // "rgb(224,42,29)",
        // "rgb(192,192,192)",
        // "rgb(224,42,29)"
      ],
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class chart extends React.Component {
  render() {
    return (
      <div>
        <h2>Ted Talks Data</h2>
        <Line
          data={data}
          width={500}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
