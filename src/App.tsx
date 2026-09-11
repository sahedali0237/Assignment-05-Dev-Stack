import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import AllTechnologies from "./components/Technologies/technology";

import type { dataType } from "./type/type";
import Footer from "./components/footer";


const dataFetch = async (): Promise<dataType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const dataPromise = dataFetch();

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<h2>Loading.......</h2>}>
        <AllTechnologies dataPromise={dataPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;