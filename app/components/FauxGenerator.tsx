'use client';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FauxGenerator = () => {
  const [link, setLink] = useState<string>('');

  return (
    <>
      <div>
        <div className='flex justify-center p-9 sm:pt-20'>
          <div className='max-w-5/6 flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center gap-10'>
              <motion.h1
                className='font-bold text-xl sm:text-2xl md:text-5xl'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Enter your Github repository URL
              </motion.h1>
              <motion.div
                className='flex items-center justify-center'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <Image
                  width={20}
                  height={20}
                  className='mt-4'
                  src='arrow.png'
                  alt='arrow image by Ayub Irawan'
                />
                <h2 className='py-8 px-4 font-bold text-gray-800 rounded-2xl bg-yellow-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)]'>
                  <span className='inline-block min-h-[50px] sm:min-h-1 sm:min-w-[400px] text-center'>
                    <Typewriter
                      words={[
                        'github.com/[username]/[repo-name]',
                        'Ditch Markdown.',
                        'Streamline Deployment.',
                        'Try it for yourself.',
                      ]}
                      loop={2}
                      cursor
                      cursorStyle='_'
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={2000}
                    />
                  </span>
                </h2>
              </motion.div>
            </div>

            <motion.form
              className='flex flex-col sm:flex-row gap-2 items-center justify-center p-10 w-2/3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <Input
                className='w-90'
                onChange={(e) => setLink(e.target.value)}
                value={link}
              />
              <Link href={`/sign-in`}>
                <Button
                  className='hover:bg-yellow-400 hover:text-black px-6 py-3 font-semibold rounded-lg shadow-lg 
                hover:shadow-xl active:shadow-md active:translate-y-1 transition'
                  type='submit'
                >
                  ↻ Generate
                </Button>
              </Link>
            </motion.form>

            <motion.h2
              className='max-w-5/6 text-center font-semibold'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            >
              Enter your GitHub repo to generate a polished README
              template—ready to copy, paste, and customize.
            </motion.h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FauxGenerator;
