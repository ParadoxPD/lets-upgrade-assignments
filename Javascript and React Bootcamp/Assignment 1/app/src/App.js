import React, { useState } from "react";

import file from "./assets/Sample-Spreadsheet-10-rows.csv";
import "./App.css";
import Papa from "papaparse";

function App() {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  const handleParse = () => {
    Papa.parse(file, {
      download: true,
      complete: function (input) {
        const records = input.data;
        setData(records);
      },
    });
  };

  if (data.length === 0) handleParse();
  console.log(data);

  return (
    <div className="App">
      <table className="table">
        <tr className="row">
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
          <th className="table-heading">Hello</th>
        </tr>
        {data.map((row) => {
          console.log(row);
          return (
            <tr className="row">
              {row.map((element) => {
                return <td className="row">{element}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
