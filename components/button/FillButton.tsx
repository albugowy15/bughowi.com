interface Button {
  url: string;
  title: string;
}

function FillButton({ url, title }: Button) {
  return (
    <a
      href={url}
      className="text-center block bg-blueAccent py-3 px-10 rounded-lg my-4 w-full tracking-widest font-bold hover:bg-blue-800 transition-colors duration-500"
    >
      {title}
    </a>
  );
}

export default FillButton;
