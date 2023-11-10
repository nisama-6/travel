'use client';
import { FEATURES } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="padding-container relative flex w-full max-w-container justify-end">
        <div className="flex w-[440px] flex-1 flex-shrink-0 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="-translate-x-36 translate-y-20 rotate-12 object-contain 3xl:translate-x-0 "
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-4xl font-bold lg:text-6xl">Our Features</h2>
          </div>
          <ul className="lg:mg-20 mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                initial={{ translateX: -50, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ once: false, amount: 'some', margin: '-100px' }}
                transition={{
                  delay: 0.2 * index,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({
  title,
  icon,
  description,
  ...rest
}: FeatureItemProps & ComponentProps<typeof motion.li>) => {
  return (
    <motion.li className="flex w-full flex-1 flex-col items-start" {...rest}>
      <div className="rounded-full bg-green-600 p-4 lg:p-7">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="mt-5 text-xl font-bold capitalize lg:text-3xl">{title}</h2>
      <p className="mt-5 bg-white/80 text-gray-400 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </motion.li>
  );
};

export default Features;
