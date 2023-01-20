import { Dispatch, useState } from "react";

import { openai } from "@/utils";
import { ValueProps } from "@/types";

const useGenerateImage = (): [
	({ value }: ValueProps) => Promise<void>,
	string,
	boolean,
	Dispatch<string>,
] => {
	const [imageUrl, setImageUrl] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const generateImage = async ({ value }: ValueProps): Promise<void> => {
		try {
			setLoading(true);
			const res = await openai.createImage({
				prompt: value,
				n: 1,
				size: "1024x1024",
			});
			setImageUrl(res.data.data[0].url as string);
		} catch (error: any) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	return [generateImage, imageUrl, loading, setImageUrl];
};

export { useGenerateImage };
