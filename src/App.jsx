import { useState } from "react";
import { Outlet } from "react-router-dom";

import AppContext from "./context/context";
import SideBar from "./components/SideBar";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const toggleSideNav = () => setShowSideNav((prev) => !prev);

  return (
    <AppContext.Provider value={{ showSideNav, toggleSideNav }}>
      <main className="max-w-[100vw] flex flex-col overflow-hidden">
        {showSideNav && <SideBar />}
        <Outlet />
      </main>
    </AppContext.Provider>
  );
}

export default App;
