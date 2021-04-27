import React, { useState, useEffect } from "react";

import Input from "./Input";
import Loader from "./Loader";
import Button from "./Button";

const PostForm = ({ addPost, editingPost }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    setPost(editingPost);
  }, [editingPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (post.title.trim() === "") {
      errors.title = "Title must not be empty 😢";
    }

    if (post.body.trim() === "") {
      errors.body = "Body must not be empty 😢";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setErrors({});

    if (post.id) {
      addPost(post);
      setPost({ title: "", body: "" });
      setLoading(false);
    } else {
      addPost(post);
      setPost({ title: "", body: "" });
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            label="Title"
            value={post.title}
            onChange={handleChange}
            error={errors.title}
          />

          <Input
            type="text"
            name="body"
            label="Body"
            value={post.body}
            onChange={handleChange}
            error={errors.body}
          />

          <Button
            color={post.id ? "info" : "success"}
            text={post.id ? "Update" : "Create"}
          />
        </form>
      )}
    </>
  );
};

export default PostForm;
