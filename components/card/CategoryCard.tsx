interface Props {
  category: string;
}

function CategoryCard({ category }: Props) {
  return <p className="font-xs p-1 bg-blueAccent w-fit inline">{category}</p>;
}

export default CategoryCard;
