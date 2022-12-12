import Image, { ImageProps } from "next/image";
const NextImage = (props: ImageProps) => {
	return <Image {...props} className="w-full" width={800} height={600} />;
};
export default NextImage;
