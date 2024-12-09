"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BlogsCard from "@/components/ui/card/BlogsCard";
import blogSample from "../../../../public/assets/images/blogSample.jpg";
import bgEllipse from "@/../../public/assets/images/blogsBgEllipse.png";

interface BlogAttributes {
  title: string;
  category: string;
  content: string;
  author_name: string;
  image?: {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };
}

interface Blog {
  id: number;
  attributes: BlogAttributes;
}

const strapiBackendUrl = process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL;

const BlogPage: FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogsPerPage] = useState<number>(6);

  const router = useRouter();

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${strapiBackendUrl}/api/blogs?populate=*`);
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate pagination data
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleTitleClick = (id: number) => {
    router.push(`/blogs/${id}`);
  };

  // Handle pagination controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-20 w-full flex-1  bg-ellips-bg bg-center bg-cover bg-repeat-y mx-auto flex flex-col relative px-5">
      <section className="w-full md:w-11/12 2xl:w-10/12 mx-auto mt-8">
        <motion.div
          className="text-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="text-[#3571F0] text-lg md:text-xl font-normal transition-all duration-300 ease-in-out hover:underline hover:text-blue-500 hover:font-medium hover:scale-110">
            Our Blogs{" "}
          </span>
          <h1 className="hidden md:block md:text-4xl lg:text-5xl font-bold mt-3 font-gotham">
            <span className="block md:leading-[60px]">
              Stories, insights, and advice{" "}
            </span>
            <span className="block md:leading-[60px]">
              that will transform how you{" "}
            </span>
            <span className="block md:leading-[60px]">build for the web.</span>
          </h1>
          {/* text for the mobiles devices */}
          <h1 className="md:hidden text-[2.25rem] leading-[46.8px] font-bold mt-3 font-gotham w-full">
            Stories, insights, and advice that will transform how you build for
            the web.{" "}
          </h1>
        </motion.div>
      </section>

      {loading && <div className="w-full h-auto mx-auto loader"></div>}

      {error && (
        <p className="text-center text-lg text-red-500">Error: {error}</p>
      )}

      {!loading && !error && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 md:gap-4 2xl:gap-6 gap-5 w-full sm:w-11/12 2xl:w-10/12 mx-auto pt-10 items-center">
          {currentBlogs.map((blog) => {
            const imageUrl = blog.attributes.image?.data?.attributes?.url;
            return (
              <BlogsCard
                key={blog.id}
                image={imageUrl || blogSample.src}
                category={blog.attributes.category}
                title={blog.attributes.title}
                onClick={() => handleTitleClick(blog.id)}
              />
            );
          })}
        </section>
      )}

      <div className="flex items-center justify-center mt-8 space-x-4 relative z-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-2.5 py-1 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          ←
        </button>
        <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
