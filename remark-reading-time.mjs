import * as mdast from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = mdast.toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
