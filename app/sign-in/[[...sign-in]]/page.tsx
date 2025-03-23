import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-250px)]'>
      <SignIn />
    </div>
  );
}
