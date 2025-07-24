import React, { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content of card 1." },
    { title: "Card 2", content: "This is the content of card 2." },
    { title: "Card 3", content: "This is the content of card 3." },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <main className="p-5 font-sans">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <button
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}>
        Add New Post
      </button>
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </main>
  );
}
