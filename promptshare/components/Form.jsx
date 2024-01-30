import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share fantastic prompts with the world, allowing your
        creativity and imagination to run free on any AI-powered platform!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-bold text-base text-white">
            Your GPT Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          ></textarea>
        </label>

        <label>
          <span className="font-satoshi font-bold text-base text-white">
            Tag <span className="font-normal">(#product, #webdev, #idea)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Enter a tag..."
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mt-5 gap-4">
          <Link href="/" className="text-white text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
