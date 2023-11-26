import { useParams } from "react-router";
import { fetchBlog, removeBlog } from "../../app/services/blog";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const { blog, isLoading, error } = fetchBlog(Number(id));

  const handleRemove = () => {
    removeBlog(Number(blog.id));
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="blog-details">
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog?.title}</h2>
            <p>Written by {blog?.author}</p>
            <div>{blog?.body}</div>
            <button onClick={handleRemove}>Remove Blog</button>
          </article>
        )}
      </div>
    </>
  );
}
