'use client';
import React, { ComponentProps, ReactHTML } from 'react';
import { motion } from 'framer-motion';

// Word wrapper
const Wrapper = (props: ComponentProps<'span'>) => {
  // We'll do this to prevent wrapping of words using CSS
  return (
    <span className="word-wrapper inline-block overflow-hidden">
      {props.children}
    </span>
  );
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = (props: { text: string; el: keyof ReactHTML }) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: '200%',
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ');

  // Create storage array
  const words: string[][] = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0');
  });
  const DynamicMotionComponent = motion(props.el);
  return (
    <DynamicMotionComponent
      initial="hidden"
      animate={'visible'}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      }}
    >
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index} className="overflow-hidden">
            {words[index].flat().map((element, index) => {
              return (
                <motion.span
                  key={index}
                  style={{ display: 'inline-block' }}
                  variants={item}
                >
                  {element}
                </motion.span>
              );
            })}
          </Wrapper>
        );
      })}
    </DynamicMotionComponent>
  );
};

export default AnimatedText;
