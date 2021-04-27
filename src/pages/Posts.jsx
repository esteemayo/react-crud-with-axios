import React from "react";

import PostTable from "../components/PostTable";

const Posts = ({ posts, onSort, onUpdate, onDelete }) => {
  return (
    <PostTable
      posts={posts}
      onSort={onSort}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  );
};

export default Posts;
