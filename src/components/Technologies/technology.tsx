import type { dataType } from "../../type/type";


interface TechnologyProps {
  dataPromise: dataType[];
}

const Technology: React.FC<TechnologyProps> = ({ dataPromise }) => {
  console.log(dataPromise);

  return null;
};

export default Technology;