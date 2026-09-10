import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import AllTechnologies from "./components/Technologies/technologie";
import type { dataType } from "./type/type";

function App() {
  const [techData, setTechData] = useState<dataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dataFetch = async (): Promise<dataType[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    dataFetch()
      .then((data) => {
        setTechData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {isLoading ? (
        <div className="mt-20 flex w-full items-center justify-center">
          <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
      ) : (
        <AllTechnologies data={techData} />
      )}
    </>
  );
}

export default App;