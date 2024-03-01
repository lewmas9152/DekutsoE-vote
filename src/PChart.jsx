import { useContext, useState } from "react";
import { ChoicesContext } from "./App";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8047"];

const Pchart = () => {
  const { votes } = useContext(ChoicesContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const data = Object.entries(votes).map(([name, value]) => ({
    name,
    value,
  }));

  const onMouseOver = (data, index) => {
    setActiveIndex(index);
  };

  const onMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        outerRadius={80}
        innerRadius={60}
        labelLine={false}
        activeIndex={activeIndex}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={entry.name}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip
        formatter={(value, name) => [value, name]}
        labelFormatter={(value) => data[value].name}
        contentStyle={{ backgroundColor: "#f5f5f5", border: "1px solid #dcdcdc" }}
        cursor={{ stroke: "#999999", strokeWidth: 0.5 }}
        isAnimationActive={false}
        separator=": "
        position={{ y: 200 }}
        viewBox={{ x: 0, y: 0, width: 400, height: 400 }}
        animationEasing="ease-out"
      />
    </PieChart>
  );
};

export default Pchart;
