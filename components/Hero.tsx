import Image from 'next/image';
import Button from './Button';
interface HeroProps {
  className?: string;
}

const Hero = (props: HeroProps) => {
  const { className } = props;

  return (
    <section className="padding-container relative  mx-auto grid grid-cols-1 gap-12 bg-pattern-2 bg-bottom [background-size:140%] lg:grid-cols-2 lg:py-20 2xl:max-w-container  2xl:px-0">
      <div className="flex flex-col gap-10">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="text-5xl font-bold leading-[120%] lg:text-[88px]">
          Putuk Truno Camp Area
        </h1>
        <p className="text-gray-500">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="font-bold lg:text-xl">
            198k<span className="ml-1 font-light">Excellent Reviews</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className=" bg-green-600 text-white">Download App</Button>
          <Button className="button flex  justify-center">
            <Image src="/play.svg" alt="camp" width={25} height={25} />
            How we work?
          </Button>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-black px-7 py-8 ">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className=" text-gray-400">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-xl font-bold text-white">Aguas Calientes</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className=" block text-gray-400">Distance</p>
              <p className="text-xl font-bold text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className=" block text-gray-400">Elevation</p>
              <p className="text-xl font-bold text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
