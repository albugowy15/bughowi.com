import { OGProperties } from "@components/common/OpenGraph";
import { useMemo } from "react";

type OGImage = {
	alt: string;
	type: string;
	url: string;
	width?: string;
	height?: string;
} | null;

type PageOgData = Omit<OGProperties, "image" | "card"> & {
	card?: OGProperties["card"];
	image: OGImage;
};

const useOpenGraph = (data: PageOgData) => {
	const ogProperties = useMemo<OGProperties>(() => {
		return {
			url: data.url,
			title: data.title,
			type: data.type,
			author: data.author,
			site_name: data.site_name,
			description: data.description,
			image: data.image
				? {
						type: data.image.type,
						url: data.image.url,
						alt: data.image.alt || "",
						height: data.image.height || "720",
						width: data.image.width || "420",
				  }
				: null,
			card: data.card || data.image ? "summary_large_image" : "summary",
			section: data.section,
			modified_time: data.modified_time,
			published_time: data.published_time,
		};
	}, [data]);

	return ogProperties;
};

export default useOpenGraph;
