import { deleteBlog, loadData, loadOneData } from './BlogServices';

const fetchBlogs = loadData;
const fetchBlog = loadOneData;
const removeBlog = deleteBlog;

export {fetchBlogs, fetchBlog, removeBlog};