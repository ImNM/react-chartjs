import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer ,LabelList} from 'recharts';

const data = [
  {
    name: '10대',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '20대',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '30대',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '40대',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '50대',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '60대',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function RechartBar() {
    return (
       
        <ResponsiveContainer width="50%" height={400}>
        <BarChart
        layout = "vertical"
          width={500}
          height={300}
          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <YAxis  dataKey="name" type="category" scale="band"/>
       
          <XAxis type="number" />
         
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="orange" >
          <LabelList dataKey="pv" position="insideRight" />
          </Bar>
          <Bar dataKey="uv" fill="green" >
          <LabelList dataKey="uv" position="insideRight" />
          </Bar>
        </BarChart>
        </ResponsiveContainer>
      
    )
}

export default RechartBar


