import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {Top,Mid,Bottom} from "./RoutingComponents";

function RoutingExample() {
    return (
        <BrowserRouter>
        <nav>
            <Link to="/Top">Top</Link>
        </nav>
        <Routes>
            <Route path="/Top" element={<Top />} />
            <Route path="/Mid" element={<Mid />} />
            <Route path="/Bottom" element={<Bottom />} />
        </Routes>
        </BrowserRouter>
    );
}

export default RoutingExample;