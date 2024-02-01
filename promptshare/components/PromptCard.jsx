"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ prompt, handleTagClick, handleDelete, handleEdit }) => {
  const [copy, setCopy] = useState("");
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    console.log(prompt);

    if (prompt.creator._id === session?.user.id) return router.push("/profile");

    router.push(
      `/profile/${prompt.creator._id}?name=${prompt.creator.username}`
    );
  };

  const handleCopy = () => {
    setCopy(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopy(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={prompt.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-white">
              {prompt.creator.username}
            </h3>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copy === prompt.prompt
                ? "assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            alt="copy_icon"
            width={12}
            height={12}
            className="object-contain"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-300">{prompt.prompt}</p>
      <p
        className="font-inter text-sm cyan_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(prompt.tag)}
      >
        {prompt.tag}
      </p>
      {session?.user.id === prompt.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
