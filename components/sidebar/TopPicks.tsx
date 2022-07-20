import TopPickCard from "components/card/TopPickCard";
import React from "react";

const DUMMY_TOPPICKS = [
  {
    title:
      "Indulgence unreserved is the alteration appearance my an astonished",
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1501785888041-af3ef285b470%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMXwxfDB8MXxhbGx8fHx8fHx8fA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080%26utm_source%3Dunsplash_source%26utm_medium%3Dreferral%26utm_campaign%3Dapi-credit&w=640&q=75",
    category: "Next.js",
  },
  {
    title: "Sample title for blog post you might see as Next js is awesome",
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1501785888041-af3ef285b470%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMXwxfDB8MXxhbGx8fHx8fHx8fA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080%26utm_source%3Dunsplash_source%26utm_medium%3Dreferral%26utm_campaign%3Dapi-credit&w=640&q=75",
    category: "Tailwind CSS",
  },
  {
    title: "Crash Course: Core Concepts of Next.js And what new in Next js 12",
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1501785888041-af3ef285b470%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMXwxfDB8MXxhbGx8fHx8fHx8fA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080%26utm_source%3Dunsplash_source%26utm_medium%3Dreferral%26utm_campaign%3Dapi-credit&w=640&q=75",
    category: "Android",
  },
  {
    title: "React why is so popular. How dificul to learn React for beginner",
    image:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1501785888041-af3ef285b470%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMXwxfDB8MXxhbGx8fHx8fHx8fA%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080%26utm_source%3Dunsplash_source%26utm_medium%3Dreferral%26utm_campaign%3Dapi-credit&w=640&q=75",
    category: "React.js",
  },
];

function TopPicks() {
  return (
    <div>
      <h2 className="font-bold text-xl mt-8 md:mt-0">Top Picks</h2>
      <div className="flex flex-col justify-center gap-3 mt-3">
        {DUMMY_TOPPICKS.map((pick, key) => (
          <TopPickCard key={key} pick={pick} />
        ))}
      </div>
    </div>
  );
}

export default TopPicks;
