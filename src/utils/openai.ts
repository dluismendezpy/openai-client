import { Configuration, OpenAIApi } from "openai";

const configuration: Configuration = new Configuration({
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

// Create openai instance
const openai: OpenAIApi = new OpenAIApi(configuration);

export { openai };
