import { useEffect, useState } from "react";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import AllTechnologies from "./components/Technologies/technology";
import Footer from "./components/footer";
import type { dataType } from "./type/type";

function App() {
  const [technologies, setTechnologies] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch("/data.json");

        if (!res.ok) {
          throw new Error("Failed to fetch technology data");
        }

        const data: dataType[] = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {loading ? (
        <div className="flex min-h-75 items-center justify-center">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      ) : (
        <AllTechnologies data={technologies} />
      )}

      <Footer />
    </>
  );
}

export default App;