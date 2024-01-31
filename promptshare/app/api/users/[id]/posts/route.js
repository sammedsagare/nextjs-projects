import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    return new Response(JSON.stringify(prompts), {
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
