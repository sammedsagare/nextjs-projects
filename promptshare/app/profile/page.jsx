"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPrompts(data);
      console.log(data);
    };

    fetchPrompts();
  }, []);

  const handleEdit = async (prompt) => {
    router.push(`/edit-prompt?id=${prompt._id}`);
  };

  const handleDelete = async (prompt) => {
    const confirmation = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (confirmation) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPrompts = prompts.filter(
          (item) => item._id !== prompt._id
        );

        setPrompts(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="View your profile and edit your details."
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
