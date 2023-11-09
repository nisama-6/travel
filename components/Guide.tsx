'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface GuideProps {
  className?: string;
}

const Guide = (props: GuideProps) => {
  const { className } = props;

  return (
    <section className="flexCenter mx-auto flex-col 2xl:max-w-container">
      <div className="padding-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 uppercase text-green-600">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <motion.h2
            initial={{ translateX: -300, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: false, amount: 'some', margin: '-100px' }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
            className="text-6xl font-bold xl:max-w-[390px]"
          >
            Guide You to Easy Path
          </motion.h2>
          <p className="text-gray-500 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="relative flex w-full items-center justify-center">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-3xl"
        />

        <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex flex-col justify-between">
            <div className="flex w-full flex-col">
              <div className="flex w-full items-center justify-between">
                <p className="text-gray-400">Destination</p>
                <p className="font-bold text-green-600">48 min</p>
              </div>
              <p className="mt-2 text-xl font-bold">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-400">Start track</p>
              <h4 className="mt-2 whitespace-nowrap text-xl font-bold">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
