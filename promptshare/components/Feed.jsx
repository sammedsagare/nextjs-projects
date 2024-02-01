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

  async function fetchPrompts() {
    try {
      const fetchedPrompts = await fetch("/api/prompt/");
      if (!fetchedPrompts.ok) {
        throw new Error(`Failed to fetch prompts: ${fetchedPrompts.status}`);
      }
      const data = await fetchedPrompts.json();
      console.log(data);
      setPrompt(data);
    } catch (error) {
      console.error("Error fetching prompts:", error.message);
    }
  }

  useEffect(() => {
    fetchPrompts();
  }, []);

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
