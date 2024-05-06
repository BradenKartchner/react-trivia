//import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootCard from "./components/BootCard";
import MenuCard from "./components/MenuCard";

import "./App.css";

function App() {
    return (
        <>
            <div className="bg-dark">
                <MenuCard />
                <BootCard />
            </div>
        </>
    );
}

export default App;
