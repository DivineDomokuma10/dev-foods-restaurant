import { useState } from "react";

import Hero from "./pageSections/Hero";
import Menu from "./pageSections/Menu";
import About from "./pageSections/About";
import SideBar from "./components/SideBar";
import AppContext from "./context/context";
import Contact from "./pageSections/Contact";
import Reservation from "./pageSections/Reservation";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const toggleSideNav = () => setShowSideNav((prev) => !prev);

  return (
    <AppContext.Provider value={{ showSideNav, toggleSideNav }}>
      <main className="max-w-[100vw] h-fit flex flex-col overflow-y-auto overflow-x-hidden bg-[url('/gallery-3.jpg')] bg-no-repeat bg-cover bg-fixed">
        {showSideNav && <SideBar />}
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Contact />
      </main>
    </AppContext.Provider>
  );
}

export default App;
