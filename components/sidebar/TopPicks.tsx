import TopPickCard from "components/card/TopPickCard";
import React from "react";

const DUMMY_TOPPICKS = [
  {
    title:
      "Indulgence unreserved is the alteration appearance my an astonished",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    category: "Next.js",
  },
  {
    title: "Sample title for blog post you might see as Next js is awesome",
    image:
      "https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQyMzY0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    category: "Tailwind CSS",
  },
  {
    title: "Crash Course: Core Concepts of Next.js And what new in Next js 12",
    image:
      "https://images.unsplash.com/photo-1516528387618-afa90b13e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    category: "Android",
  },
  {
    title: "React why is so popular. How dificul to learn React for beginner",
    image:
      "https://images.unsplash.com/photo-1476725994324-6f6833ea0631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQyMzc4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    category: "React.js",
  },
];

function TopPicks() {
  return (
    <div className="mt-8 md:mt-0">
      <h2 className="font-bold text-xl">Top Picks</h2>
      <div className="flex flex-col justify-center gap-3 mt-3">
        {DUMMY_TOPPICKS.map((pick, key) => (
          <TopPickCard key={key} pick={pick} />
        ))}
      </div>
    </div>
  );
}

export default TopPicks;
