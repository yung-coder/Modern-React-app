"use client";

import { motion, Variants } from "framer-motion";

import styles from "../styles";

import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          Think
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>iff</h1>
          <h1 className={`${styles.heroHeading}`}>erent</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] z-[0] -top-[30px]" />
        <img
          src="/cover.jpg"
          alt=""
          className="rounded-tl-2xl w-full sm:h-[500px] h-[350px] object-cover z-10 "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
