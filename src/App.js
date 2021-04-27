import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "./services/postService";

import AddButton from "./components/AddButton";
import PostForm from "./components/PostForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import About from "./pages/About";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

axios.defaults.baseURL = "http://localhost:9000";

function App() {
  const [showAddPost, setShowAddPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState({
    id: null,
    title: "",
    body: "",
  });

  useEffect(() => {
    (async function getPosts() {
      const postsFomServer = await fetchPosts();
      setPosts(postsFomServer);
    })();
  }, []);

  const fetchPosts = async () => {
    const { data } = await getPosts();
    return data;
  };

  const addPost = async (post) => {
    if (post.id) {
      if (posts.find((p) => p.id === post.id)) {
        const postIndex = posts.findIndex((p) => p.id === post.id);
        const updPost = [...posts];
        const { data } = await updatePost(post);
        updPost.splice(postIndex, 1, data);
        setPosts(updPost);

        setEditingPost({ id: null, title: "", body: "" });
      }
    } else {
      const { data } = await createPost(post);
      setPosts([data, ...posts]);

      // post.id = posts.length + 1;
      // setPosts([post, ...posts])
    }
  };

  const handleDeletePost = async (id) => {
    const originalPosts = [...posts];
    const post = originalPosts.filter((p) => p.id !== id);
    setPosts(post);

    try {
      await deletePost(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This post has already been deleted!");
      setPosts(originalPosts);
    }
  };

  const handleUpdatePost = (post) => {
    setEditingPost(post);
  };

  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <AddButton
                onAdd={() => setShowAddPost(!showAddPost)}
                onShow={showAddPost}
              />
              {showAddPost && (
                <PostForm addPost={addPost} editingPost={editingPost} />
              )}
            </div>
          </div>
          <br />
          {posts.length > 0 && (
            <p className="text-center">
              Showing {posts.length} posts in the database.
            </p>
          )}
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <>
                  {posts.length > 0 ? (
                    <Posts
                      posts={posts}
                      onUpdate={handleUpdatePost}
                      onDelete={handleDeletePost}
                      {...props}
                    />
                  ) : (
                    "There are no posts in the database"
                  )}
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
