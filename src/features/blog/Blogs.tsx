import { Link } from "react-router-dom";
import Blog from "../../app/models/Blog";
import { useEffect, useState } from "react";
import { loadData } from "../../app/services/BlogServices";

export default function Blogs() {
  const [blogs, setBlog] = useState<Blog[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const fetchedBlogs = await loadData();
        setBlog(fetchedBlogs);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des blogs :", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="blog-list">
        <h1>Blogs</h1>
        {blogs?.map((blog) => (
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
