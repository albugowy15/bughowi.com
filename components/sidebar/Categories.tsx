import CategoryCard from "components/card/CategoryCard";

const DUMMY_CATEGORIES = [
  "next.js",
  "tailwindcss",
  "react.js",
  "android",
  "graphql",
  "api",
  "back-end",
  "front-end",
  "mobile",
];

function Categories() {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl">Categories</h2>
      <div className="flex gap-3 w-full flex-wrap mt-3">
        {DUMMY_CATEGORIES.map((category, key) => (
          <p
            key={key}
            className="px-1 py-[0.02rem] bg-blueAccent rounded-md inline-flex"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Categories;
