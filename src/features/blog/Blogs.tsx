import { Link } from "react-router-dom";
import { fetchBlogs } from "../../app/services/blog";
export default function Blogs() {
  const { blogs, isLoading, error } = fetchBlogs();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="blog-list">
        <h1>Blogs</h1>
        {error && <div>{error}</div>}
        {blogs &&
          blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={"/blogs/" + blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
