import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {

  return (
    <div className="h-screen">
      <section className="justify-center content-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center text-black dark:text-gray-100">
          <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, type: 'spring', stiffness: 100, delay:0.5 }}
           viewport={{ once: true }}
            className="mx-auto max-w-xl text-center cursor-default"
          >
            
            <h1 className="select-none text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.<br/>
              <strong className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 sm:block">
                Let&apos;s Speak Up.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed tracking-widest">
              Communicate with confidence, succeed with ease
            </p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay:1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
              
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a
                className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-black shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto transition-all"
                href="/get-started"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
