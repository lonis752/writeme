import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

function LinkedImage() {
  return (
    <Link href='/'>
      <Image
        width={200}
        height={80}
        className='cursor-pointer mx-3 my-5'
        src='/writeme.png'
        alt='WriteMe.md logo'
      />
    </Link>
  );
}

const Navbar = () => {
  return (
    <header>
      <div className='flex items-center justify-between p- bg-yellow-400'>
        <div className='sm:hidden pl-5 text-yellow-400' aria-hidden="true">Hi</div>
        <LinkedImage />
        <div className='pr-5 font-semibold'>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='flex gap-5'>
              <SignInButton />
              <SignUpButton />
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
