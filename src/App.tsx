import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Table from "./Table";
import Detail from "./Detail";

const TableDemo: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Table />} />
        <Route path="/detail" element={<Detail />} />

      </Routes>
    </Router>
  );
};
export default TableDemo;
