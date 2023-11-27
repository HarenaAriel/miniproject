import Blog from "../../models/Blog";
import RequestQuery from "../../models/RequestQuery";
import { delete_method, get_method } from "../http-client";

const baseUri = "http://localhost:3001/blogs";

function loadData() {
  const request: RequestQuery = {
    url: baseUri,
  };

  const { data, isLoading, error } = get_method(request);

  const blogs = data! as Blog[];
  return { blogs, isLoading, error };
}

function loadOneData(id: number) {
  const request: RequestQuery = {
    url: baseUri + "/" + id,
  };

  const { data, isLoading, error } = get_method(request);

  const blog = data! as Blog;
  return { blog, isLoading, error };
}

function deleteBlog(id: number) {
  const request: RequestQuery = {
    url: baseUri + "/" + id,
  };

  delete_method(request);
}

export { loadData, loadOneData, deleteBlog };
