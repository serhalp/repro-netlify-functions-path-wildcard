import type { Config } from "@netlify/functions";

const handler = async (req: Request): Promise<Response> => {
  console.log({ url: req.url }, "Running the 'hello' function handler");
  return new Response("This was rendered by the 'hello' function");
};

export default handler;

export const config: Config = {
  path: "/*",
  preferStatic: true,
};
