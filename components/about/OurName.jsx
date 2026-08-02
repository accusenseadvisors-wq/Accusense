"use client";

import { useCallback, useState } from "react";
import { motion } from "motion/react";

const letters = [
  { letter: "A", word: "Accounting", headingAccent: false },
  { letter: "C", word: "Compliance", headingAccent: false },
  { letter: "C", word: "Consulting", headingAccent: false },
  { letter: "U", word: "Understanding", headingAccent: false },
  { letter: "S", word: "Solutions", headingAccent: true },
  { letter: "E", word: "Excellence", headingAccent: true },
  { letter: "N", word: "Numbers", headingAccent: true },
  { letter: "S", word: "Strategy", headingAccent: true },
  { letter: "E", word: "Expertise", headingAccent: true },
];

const EASE = [0.22, 1, 0.36, 1];
const DIM = "text-[#1a1a1a]/15";

const intro = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const introItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } };
const word = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } };
const char = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } };
const wordList = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } } };
const wordItem = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } } };

export default function OurName() {
  const [hovered, setHovered] = useState(null);

  const handleEnter = useCallback((e) => {
    setHovered(Number(e.currentTarget.dataset.idx));
  }, []);

  const handleLeave = useCallback(() => setHovered(null), []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={intro}>
          <motion.span variants={introItem} className="eyebrow justify-center">
            Our name
          </motion.span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={word}
          className="mb-10 mt-5 flex flex-wrap items-center justify-center text-[clamp(2.2rem,7vw,5rem)]! font-black leading-[1.05] tracking-tight"
        >
          {letters.map((entry, i) => {
            const isDimmed = hovered !== null && hovered !== i;
            return (
              <motion.span
                key={i}
                data-idx={i}
                variants={char}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className={`cursor-default transition-colors duration-300 ${
                  isDimmed ? DIM : entry.headingAccent ? "text-accent" : "text-[#1a1a1a]"
                }`}
              >
                {entry.letter}
              </motion.span>
            );
          })}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={wordList}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[1.4rem] font-bold sm:text-[1.85rem]"
        >
          {letters.map((entry, i) => {
            const isDimmed = hovered !== null && hovered !== i;
            return (
              <motion.span
                key={entry.word}
                data-idx={i}
                variants={wordItem}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="flex cursor-default items-center gap-3"
              >
                <span>
                  <span className={`transition-colors duration-300 ${isDimmed ? DIM : "text-accent"}`}>
                    {entry.word[0]}
                  </span>
                  <span className={`transition-colors duration-300 ${isDimmed ? DIM : "text-[#1a1a1a]"}`}>
                    {entry.word.slice(1)}
                  </span>
                </span>
                {i < letters.length - 1 && <span className="text-muted">·</span>}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          className="mx-auto mt-9 text-lg text-muted"
        >
          Nine principles, one name — <span className="font-semibold text-[#1a1a1a]">Accusense</span>. Everything we
          do is built to live up to it.
        </motion.p>
      </div>
    </section>
  );
}
