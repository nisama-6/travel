/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import { PEOPLE_URL } from '@/constants';
import { motion } from 'framer-motion';

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-3xl 2xl:rounded-3xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-600 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="text-sm text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-bold text-white md:text-xl md:font-bold">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative mx-auto flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 2xl:max-w-container">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-hidden lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="mt-10 flex justify-end overflow-hidden px-6 lg:-mt-60 lg:mr-6">
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
          className="xl:rounded-5xl relative  w-full overflow-hidden rounded-3xl bg-green-600 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:px-16 xl:py-20"
        >
          <h2 className="text-2xl capitalize text-white md:text-3xl 2xl:text-6xl">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="xl:text-normarl mt-5 text-sm text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Camp;
