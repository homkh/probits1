import { marked } from 'marked';

export const richTextReducer = async (contentArray) => {
  const rawText = contentArray
    .map((block) =>
      block.children
        .map((child) => (child.text || child.url || ""))
        .join("")
    )
    .join("\n\n");

  // Parse the markdown text to HTML
  const parsedRichText = marked.parse(rawText);

  // Add custom styles for list and other tags (e.g., headings)
  let styledRichText = parsedRichText
    .replace(/<ul>/g, "<ul style='list-style-type: circle;'>")
    .replace(/<a /g, "<a style='color:inherit; text-decoration:underline;' ") 
    .replace(/<h1>/g, "<h1 style='font-size:58px; font-weight:bold;'>")
    .replace(/<h2>/g, "<h2 style='font-size:24px; font-weight:bold; margin-bottom:12px;'>")
    .replace(/<h3>/g, "<h3 style='font-size:1.5rem; font-weight:bold;'>")
    .replace(
      /<p>/g,
      "<p style='font-size:17px; color:white !important; line-height:28px; margin-bottom:40px;'>")
    .replace(/<strong>/g, "<strong style='font-weight:bold;'>"); 

  return styledRichText;
};
