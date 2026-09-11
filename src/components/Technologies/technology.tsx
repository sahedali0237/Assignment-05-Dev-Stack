import type { dataType } from "../../type/type";

interface TechnologiesProps {
  data: dataType[];
}

const AllTechnologies = ({ data }: TechnologiesProps) => {
  return (
    <section>
      {data.map((technology) => (
        <div key={technology.id}>
          <h2>{technology.name}</h2>
          <p>{technology.description}</p>
        </div>
      ))}
    </section>
  );
};

export default AllTechnologies;