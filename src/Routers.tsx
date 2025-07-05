import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routing/Home";
import Details from "./routing/Details";

function Routers(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:photoId" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;