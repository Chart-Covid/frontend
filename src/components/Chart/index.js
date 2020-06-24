import React, { useEffect, useState } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Axios from 'axios';

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await Axios.get(
        'https://corona.lmao.ninja/v2/historical/ita',
      );
      let data = []
      let days = []
      let cases = []
      let deaths = []
      let recovered = []
      for (const prop in result.data.timeline.cases) {
        days.push(prop)
        cases.push(result.data.timeline.cases[prop])
        deaths.push(result.data.timeline.deaths[prop])
        recovered.push(result.data.timeline.recovered[prop])
      }
      days.forEach((day, index) => {
        let object = {}
        object['name'] = day
        object['infected'] = cases[index]
        object['deaths'] = deaths[index]
        object['recovered'] = recovered[index]
        data.push(object)
      });
      setData(data)
    }
    getData();
  },[]);

  return (
    // <LineChart
    //   width={500}
    //   height={300}
    //   data={data}
    //   margin={{
    //     top: 5, right: 30, left: 20, bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line type="monotone" dataKey="deaths" stroke="#862a5c" activeDot={{ r: 8 }} />
    //   <Line type="monotone" dataKey="infected" stroke="#f4a548" />
    //   <Line type="monotone" dataKey="recovered" stroke="#30e2c5" />
    // </LineChart>
    <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
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
  );
}

export default Chart;