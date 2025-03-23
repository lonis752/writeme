'use client';

import FauxGenerator from './components/FauxGenerator';
import Generator from './components/Generator';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <SignedOut>
        <FauxGenerator />
      </SignedOut>
      <SignedIn>
        <Generator />
      </SignedIn>
    </main>
  );
}
