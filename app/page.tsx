"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import StaggerChildren, { childVariants } from "@/animations/staggerChildren";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
  Variant,
} from "framer-motion";

export default function Home() {
  const [pulse, setPulse] = useState(false);
  const socials = [
    {
      id: 1,
      icon: <Facebook />,
      href: "https://web.facebook.com/groups/midrevisuals/",
    },
    {
      id: 2,
      icon: <Youtube />,
      href: "https://www.youtube.com/@midrevisual2025",
    },
    {
      id: 3,
      icon: <Instagram />,
      href: "https://www.instagram.com/midre_visual/",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setPulse(true);
    }, 7000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className={pulse ? "animate-pulse" : ""}>
        <StaggerChildren className="flex flex-col w-screen  h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            exit={{ opacity: 0 }}
          >
            <img
              className="object-cover w-32 mb-5"
              src="/midre.png"
              alt="Beautwealt Logo"
            />
          </motion.div>
          <motion.div
            variants={childVariants}
            className="relative w-[200px] h-[30px]"
          >
            <div className="absolute bg-blue-950 skew-x-12 w-[200px] h-[30px]"></div>
            <div className="absolute flex justify-center w-full h-full">
              <StaggerText
                once
                text="Coming soon..."
                el="div"
                className="italic font-bold text-white mt-[1.8px]"
              />
            </div>
          </motion.div>

          <ul className="mt-2 flex justify-center w-full items-center space-x-4">
            {socials.map((social, i) => (
              <motion.li
                key={i}
                initial={{
                  opacity: 0,
                  translateY: 70,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2 + 2,
                }}
                className="text-base text-center cursor-pointer text-blue-950"
              >
                <Link target="_blank" href={social.href}>
                  {social.icon}
                </Link>
              </motion.li>
            ))}
          </ul>
        </StaggerChildren>
      </main>
    </AnimatePresence>
  );
}

type StaggerTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const StaggerText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: StaggerTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
