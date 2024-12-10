import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        `https://dominadenetwork.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
      );
      const data = await response.json();
      setBlog(data[0]); // Assuming the slug is unique and retrieves one post
    };

    fetchBlog();
  }, [slug]);

  const decodeEntities = (encodedString) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = encodedString;
    return textArea.value;
  };

  if (!blog) return <p className="text-center mt-12 h-screen">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <img
          src={blog._embedded["wp:featuredmedia"][0].source_url}
          alt={decodeEntities(blog.title.rendered)}
          className="w-full h-96 object-cover rounded-lg mb-3 shadow-lg"
        />
      )}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2 leading-tight">
        {decodeEntities(blog.title.rendered)}
      </h1>
      <div className="text-sm text-gray-500 mb-8">
        Published on:{" "}
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      {/* Blog Content */}
      <article
        className="mt-2 prose prose-lg prose-indigo max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
      />
    </div>
  );
};

export default BlogPage;
