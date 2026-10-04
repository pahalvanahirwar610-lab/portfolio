import { useState, useEffect } from "react";

function TypingText({ fullText }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) {
        i = 0; // reset
        setDisplayText("");
      }
    }, 100); // speed adjust kar sakte ho
    return () => clearInterval(interval);
  }, [fullText]);

  return <p className="typing-text">{displayText}</p>;
}

export default TypingText;
