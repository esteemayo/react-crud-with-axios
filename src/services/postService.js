import http from "./httpService";

const apiEndpoint = "/posts";

function postUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPosts() {
  return http.get(apiEndpoint);
}

export function getPost(post) {
  return http.get(postUrl(post.id));
}

export function createPost(post) {
  return http.post(apiEndpoint, post);
}

export function updatePost(post) {
  return http.put(postUrl(post.id), post);
}

export function deletePost(id) {
  return http.delete(postUrl(id));
}
