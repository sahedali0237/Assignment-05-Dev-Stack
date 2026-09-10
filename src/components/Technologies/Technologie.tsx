import React from "react";
import type { dataType } from "../../type/type";


interface TechnologyProps {
  data: dataType[];
}

const Technologie: React.FC<TechnologyProps> = ({ data }) => {
  console.log(data);

  return null;
};

export default Technologie;