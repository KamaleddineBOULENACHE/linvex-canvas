import { useState, useEffect } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

const TextScramble = ({ text, className = "" }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    if (!isScrambling) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;
    const maxIterations = 10;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, isScrambling]);

  return <span className={`scramble-text ${className}`}>{displayText}</span>;
};

export default TextScramble;
