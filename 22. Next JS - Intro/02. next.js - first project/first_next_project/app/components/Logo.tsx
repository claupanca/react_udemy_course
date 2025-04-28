import Link from "next/link";

const Logo: React.FC = () => {
  return (
    // <a href='/' className='flex items-center gap-4 z-10'>
    <Link href='/'>
      <img
        height='60'
        width='60'
        alt='The Wild Oasis logo'
        src='./others/logo.png'
      />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
    // </a>
  );
};

export default Logo;
