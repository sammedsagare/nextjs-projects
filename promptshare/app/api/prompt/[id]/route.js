import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//get to read prompt
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt not found.", {
        status: 404,
        statusText: "Prompt not found",
      });
    }
    return new Response(JSON.stringify(prompt), {
      status: 200,
      statusText: "Prompts fetched",
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch prompts.", {
      status: 500,
      statusText: "Internal server error",
    });
  }
};

//patch to update prompt

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findByIdAndUpdate(params.id, {
      prompt,
      tag,
    });

    if (!existingPrompt) {
      return new Response("Prompt not found.", {
        status: 404,
        statusText: "Prompt not found",
      });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response("Prompt edited successfully.", {
      status: 200,
      statusText: "Prompt edited",
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update prompt.", {
      status: 500,
      statusText: "Internal server error",
    });
  }
};

//delete to delete prompt
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully.", {
      status: 200,
      statusText: "Prompt deleted",
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete prompt.", {
      status: 500,
      statusText: "Internal server error",
    });
  }
};
