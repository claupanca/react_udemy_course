import Link from "next/link";

const Logo: React.FC = () => {
  return (
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
  );
};

export default Logo;
