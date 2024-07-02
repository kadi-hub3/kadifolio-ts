"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  dark
}: {
  words: string;
  className?: string;
  dark?: boolean;

}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split("/n").map(line => line.trim().split(" "));
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((line, lineIndex) => (
          <div key={`line-${lineIndex}`}>
            {line.map((word, wordIndex) => (
              <motion.span
                key={`${word}-${lineIndex}-${wordIndex}`}
                className={`${lineIndex > 0 && 'text-purple'} ${dark?' text-black':'text-white'}`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
