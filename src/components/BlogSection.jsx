import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogSection = ({ title = "Latest Blogs", limit = 6, className = "" }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        `https://dominadenetwork.com/wp-json/wp/v2/posts?_embed&per_page=${limit}`
      );
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, [limit]);

  // Utility to decode HTML entities
  const decodeEntities = (encodedString) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = encodedString;
    return textArea.value;
  };

  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Featured Image */}
              {blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={blog._embedded["wp:featuredmedia"][0].source_url}
                  alt={decodeEntities(blog.title.rendered)}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold">
                  {decodeEntities(blog.title.rendered)}
                </h3>
                {/* Excerpt */}
                <p className="text-gray-600 mt-2">
                  {decodeEntities(blog.excerpt.rendered.replace(/<[^>]+>/g, ""))}
                </p>
                {/* Read More Link */}
                <Link
                  to={`/Blogs/blog/${blog.slug}`}
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
