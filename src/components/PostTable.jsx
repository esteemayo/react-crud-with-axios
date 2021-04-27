import React from "react";
import { FaPen, FaRegTimesCircle } from "react-icons/fa";

import Button from "./Button";
import Table from "./Table";

const PostTable = ({ posts, onUpdate, onDelete }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "body", label: "Body" },
    {
      path: "update",
      label: "Update",
      content: (data) => (
        <Button
          onClick={() => onUpdate(data)}
          icon={<FaPen />}
          color="primary"
          text="Update"
        />
      ),
    },
    {
      path: "delete",
      label: "Delete",
      content: (data) => (
        <Button
          onClick={() => onDelete(data.id)}
          icon={<FaRegTimesCircle />}
          color="danger"
          text="Delete"
        />
      ),
    },
  ];

  return <Table data={posts} columns={columns} />;
};

export default PostTable;
