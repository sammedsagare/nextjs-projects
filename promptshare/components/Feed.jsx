"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompt] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch("/api/prompt/");
        if (!response.ok) {
          throw new Error(`Failed to fetch prompts: ${response.status}`);
        }

        const data = await response.json();
        setPrompt(data);
        console.log("Fetched prompts successfully:", data);
      } catch (error) {
        console.error("Error fetching prompts:", error.message);
      }
    };

    console.log("Executing useEffect"); // Log when useEffect is triggered

    fetchPrompts();
  }, []); // Dependency array is empty, meaning it runs once on mount

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    console.log("Input changed:", inputText);
    setSearchText(inputText);
    // You may want to trigger a new fetch based on the search text
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag / username."
          value={searchText}
          onChange={handleInputChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
