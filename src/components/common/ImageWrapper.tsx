import Image from "next/image";

export default function ImageWrapper({ src, alt }: { src: string; alt: string }) {
	<div>
		<Image src={src} alt={alt} />
	</div>;
}
