function CustomLink({ url, text }: { url: string; text: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default CustomLink;
