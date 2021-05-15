import React, { useState } from "react";

export default function Table() {
  const noOfRows = 15;
  const noOfCols = 5;

  let rows = [];
  let cols = [];

  const [cell, setCell] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState(0);

  const [operations, setOperations] = useState([]);

  function inputhandler(e) {
    setValue(e.target.value);
  }

  function addrHandler(rowAd, colAd) {
    setCell({ x: rowAd, y: colAd });
  }

  for (let i = 0; i < noOfCols; i++) {
    cols.push({
      col: i,
      value: (
        <input
          type="text"
          id={String(cell.x) + "-" + String(i)}
          onChange={inputhandler}
        ></input>
      ),
    });
  }

  for (let i = 0; i < noOfRows; i++) {
    rows.push({
      row: i,
      value: (
        <tr key={i}>
          {cols.map((col) => (
            <td onClick={() => addrHandler(i, col.col)}>{col.value}</td>
          ))}
        </tr>
      ),
    });
  }

  return (
    <div>
      <table>
        <tbody>{rows.map((row) => row.value)}</tbody>
      </table>
      <button>Execute Function</button>
      <div>{value}</div>
      <div>x:{cell.x}</div>
      <div>y:{cell.y}</div>
    </div>
  );
}

// TODO: Implemnting the formula part
// Optimisation: Better way of rendering the cells
// Reduce the number of event triggers.
