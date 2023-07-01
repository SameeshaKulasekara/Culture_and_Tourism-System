import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v2/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  const data = React.useMemo(() => blogs, [blogs]);
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Stock", accessor: "stock" },
      { Header: "Price", accessor: "price" },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <button onClick={() => deleteBlogHandler(row.original.id)}>
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const deleteBlogHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v2/blogs/${id}`);
      setBlogs((prevState) => prevState.filter((blog) => blog.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllBlogs;
