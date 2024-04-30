//import { useState } from "react";
import StrapCard from "./components/StrapCard";
import "bootstrap/dist/css/bootstrap.min.css";
import BootCard from "./components/BootCard";

import "./App.css";

function App() {
    return (
        <>
            <div className="bg-dark">
                <StrapCard />
                <BootCard />
            </div>
        </>
    );
}

export default App;
