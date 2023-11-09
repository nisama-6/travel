import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <nav className="padding-container mx-auto flex max-w-container items-center justify-between py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden gap-8 lg:flex ">
        <Link href="/">Home</Link>
        <Link href="/">How Hilink Work?</Link>
        <Link href="/">Services</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact Us</Link>
      </ul>
      <Button className="hidden bg-black font-bold text-white lg:flex">
        <Image width={24} height={24} src="/user.svg" alt="icon" />
        Login
      </Button>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
