import React from 'react';
import Button from './Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="mx-auto items-center justify-center pb-[100px] 2xl:max-w-container">
      <div className="relative flex  w-full flex-col justify-between gap-32 overflow-hidden bg-pattern  bg-center bg-no-repeat py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-3xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-3xl font-bold lg:text-6xl xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-gray-400">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              className="flex items-center justify-center bg-white text-green-600"
            >
              <Image width={24} height={24} src="/apple.svg" alt="icon" />
              App Store
            </Button>
            <Button
              type="button"
              className="flex items-center justify-center border"
            >
              <Image width={24} height={24} src="/android.svg" alt="icon" />
              Play Store
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
