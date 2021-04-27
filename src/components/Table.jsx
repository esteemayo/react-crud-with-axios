import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ data, columns }) => {
  return (
    <table className="table table-striped table-hover">
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
