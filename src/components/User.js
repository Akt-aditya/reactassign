import React from "react";
import { Bar } from "react-chartjs-2";
import Data from "../data.json";


export default function User(props) {
  var id = props.match.params.id;
  var activity;
  var username;
  Data.members.map(member => {
    if (member.id == id) {
      username = member.real_name;
      activity = member.activity_periods;
    }
  });
  var lab = [3];
  var dataset = [3];
  var i = 0;
  var duration = 0;
  var la = activity.map(l => {
    lab[i] = l.start_date;
    dataset[i] = l.duration;
    duration += l.duration;
    i++;
  });
  var data = {
    labels: lab,
    datasets: [
      {
        label: "Duration",
        data: dataset,
        backgroundColor: ["yellow"]
      }
    ]
  };

  return (
    <section className="userdetail">
      <Bar data={data} />
      <div className="info">
        {username} has spent {duration} mins on the platform.
        <br />
        <ul>
          <span>{username} has been active on following dates:-</span>
          {lab.map(date => {
            return (
              <>
                <li>{`${date} `}</li>
                <br />
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
