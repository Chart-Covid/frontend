import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./styles.scss";

import Loader from "../Loader";

const Chart = ({ historical }) => {
  if (!historical) {
    return <Loader />;
  } else {
    let data = [];
    let days = [];
    let cases = [];
    let deaths = [];
    let recovered = [];
    for (const prop in historical.cases) {
      days.push(prop);
      cases.push(historical.cases[prop]);
      deaths.push(historical.deaths[prop]);
      recovered.push(historical.recovered[prop]);
    }
    days.forEach((day, index) => {
      let object = {};
      object["name"] = day;
      object["infected"] = cases[index];
      object["deaths"] = deaths[index];
      object["recovered"] = recovered[index];
      data.push(object);
    });
    return (
      <div className="chart__container">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="deaths" stackId="1" stroke="#862a5c" fill="#862a5c" />
            <Area type="monotone" dataKey="infected" stackId="1" stroke="#f4a548" fill="#f4a548" />
            <Area type="monotone" dataKey="recovered" stackId="1" stroke="#30e2c5" fill="#30e2c5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default Chart;
