import Image, { ImageProps } from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage({ src, alt, className, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt}
      {...props}
      src={src}
      fill
      className={cn(
        "duration-700 ease-in-out",
        className as string,
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;
