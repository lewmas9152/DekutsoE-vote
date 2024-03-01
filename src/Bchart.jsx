import { useContext } from "react";
import { ChoicesContext } from "./App";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Bchart = () => {
  const { votes } = useContext(ChoicesContext);
  const data = Object.entries(votes).map(([name, value]) => ({
    name,
    value,
  }));
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" tickLine={false} />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default Bchart;
