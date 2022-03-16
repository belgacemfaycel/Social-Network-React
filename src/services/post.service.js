import axios from "axios";
import authHeader from "./auth-header";
const API_URL = `http://localhost:4200/api/auth/post`;

const getPost = () => {
  return axios.get(API_URL );
};
const getPostById = (id) => {
  return axios.get(API_URL +id , { headers: authHeader() });
};
const addPost = () => {
  return axios.get(API_URL , { headers: authHeader() });
};
const editPOst = () => {
  return axios.get(API_URL , { headers: authHeader() });
};
const deletePost = () => {
  return axios.get(API_URL , { headers: authHeader() });
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPost,
  getPostById,
  addPost,
  editPOst,
  deletePost
};
