'use client';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const Generator = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limitReached, setLimitReached] = useState<boolean>(false);
  const [remainingUses, setRemainingUses] = useState<number | null>(null);

  const copyText = () => {
    if (textRef.current) {
      const text = textRef.current.innerText; // Get only the text content
      navigator.clipboard.writeText(text); // Copy to clipboard
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const checkUsageLimit = async () => {
    try {
      const response = await fetch('/api/usage');
      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setRemainingUses(data.remaining);
      return data.remaining > 0;
    } catch (error) {
      console.error('Usage check failed:', error);
      setLimitReached(true);
      console.log(limitReached);
      return false;
    }
  };

  const URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/gpt'
      : '/api/gpt';

  const getContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const canGenerate = await checkUsageLimit();
    if (!canGenerate) {
      setLimitReached(true);
      return;
    }

    setIsLoading(true);

    try {
      // Call the POST API to update last usage time
      await fetch('/api/usage', { method: 'POST' });

      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `Using this GitHub repo link (${link}) and write a full README.md file with a thorough deep dive of their project with a title, replaceable area for preview image, detailed description of what the project does, list of the core features, list of tech stack, installation/repo cloning steps, future improvements, and a friendly message inviting contributions to the repo and format it like this:<div><div># Members Only</div><br /><div>![Project Preview](./preview-image.png) &lt;!-- Replace with an actual image path or URL --&gt;</div><br /><div>## 📖 Project Overview</div><br /><div>**project title** project desc.</div><br /><div>## ✨ Features</div><br /><div>- Feature1</div><div>- Feature2</div><br /><div>## 🛠️ Tech Stack</div><br /><div>- **Frontend**: EJS </div><div>- **Backend**: Node.js, Express.js</div><div>- **Database**: MongoDB with Mongoose ODM</div><div>- **Authentication**: Passport.js, bcrypt</div><div>- **Styling**: Custom CSS with Bootstrap</div><div>- **Middleware**: Express-session for session management</div><br /><div>## 🚀 Getting Started</div><br /><div>### 1️⃣ Clone the Repository</div><br /><div>\`\`\`sh</div><div>git clone https://github.com/lonis752/members-only.git</div><div>cd members-only</div><div>\`\`\`</div><br /><div>### 2️⃣ Install Dependencies</div><br /><div>\`\`\`sh</div><div>npm install</div><div>\`\`\`</div><br /><div>### 3️⃣ Set Up Environment Variables</div><br /><div>Create a \`.env\` file in the project root and add:</div><br /><div>\`\`\`ini</div><div>MONGO_URI=your_mongodb_connection_string</div><div>SESSION_SECRET=your_secret_key</div><div>\`\`\`</div><br /><div>### 4️⃣ Start the Development Server</div><br /><div>\`\`\`sh</div><div>npm start</div><div>\`\`\`</div><br /><div>The app will be running on \`http://localhost:3000\`.</div><br /><div>## 🔮 Future Improvements</div><br /><div>- Implementing user roles (e.g., admin, moderator)</div><div>- Adding user avatars for a more personalized experience</div><div>- Enhancing the UI with a modern design</div><div>- Implementing real-time messaging with WebSockets</div><br /><div>## 🤝 Contributing</div><br /><div>Contributions are welcome! If you have ideas for improvements, feel free to fork the repo, make changes, and submit a pull request. Let's build something awesome together! 🚀</div><br /><div>---</div><br /><div>Made with ❤️ by [name](GitHub link)</div><br /><br /></div>`,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      const messageContent = data?.message || 'No content received';

      const validContent = messageContent.split('```markdown');
      setContent(validContent.join(''));
    } catch (error) {
      console.error('Error fetching content:', error);
      setContent('Failed to load content.');
    } finally {
      setIsLoading(false);
      setLink('');
    }
  };

  const HTMLView: React.FC = () => {
    return (
      <div ref={textRef}
        className={
          content ? 'bg-gray-300 p-5 rounded-2xl w-full overflow-auto' : ''
        }
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <>
      <div
        className={
          isLoading
            ? 'flex flex-col gap-5 items-center justify-center h-[calc(100vh-300px)]'
            : 'hidden'
        }
      >
        <div className='flex gap-2'>
          <h1 className='font-bold text-lg sm:text-2xl md:text-5xl'>
            Your Markdown is being generated
          </h1>
          <div className='flex gap-1'>
            <h1 className='font-bold text-lg sm:text-2xl md:text-5xl animate-bounce'>
              .
            </h1>
            <h1 className='font-bold text-lg sm:text-2xl md:text-5xl animate-bounce'>
              .
            </h1>
            <h1 className='font-bold text-lg sm:text-2xl md:text-5xl animate-bounce'>
              .
            </h1>
          </div>
        </div>
        <div role='status'>
          <svg
            aria-hidden='true'
            className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
        </div>
      </div>
      <div className={isLoading ? 'hidden' : ''}>
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
                  width={100}
                  height={100}
                  className='w-20 h-20 mt-4'
                  src='/arrow.png'
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
              onSubmit={getContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <Input
                className=''
                onChange={(e) => setLink(e.target.value)}
                value={link}
                required
              />
              <Button
                disabled={!link.trim()}
                className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition ${
                  !link.trim() || remainingUses === 0
                    ? 'hover:bg-gray-400 text-yellow-400 cursor-not-allowed'
                    : 'hover:bg-yellow-400 hover:text-black hover:shadow-xl active:shadow-md active:translate-y-1'
                }`}
                type='submit'
              >
                ↻ Generate
              </Button>
            </motion.form>

            <motion.div
              className='max-w-5/6 text-center font-semibold'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            >
              <h2>
                Repo to a polished README Markdown template—ready to copy,
                paste, and customize.
              </h2>
              <p>
                You can generate markdown <strong>once per day!</strong> Make
                sure to double check your URL.
              </p>
              <p>
                Tip 💡: Add to your current readme file for us to get a better
                grasp of your project.
              </p>
            </motion.div>
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center p-10'>
          <div className={content ? 'flex gap-2' : 'hidden'}>
            <h2 className='font-semibold'>Here is your README template</h2>
            <Image
              height={30}
              width={30}
              src='/arrow-right.png'
              alt='arrow png by Muhazdinata'
              className='mt-1'
            />
            <button
              onClick={copyText}
              className='bg-gray-200 px-2 py-1 rounded-md text-sm hover:bg-gray-300'
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <HTMLView />
        </div>
      </div>
    </>
  );
};

export default Generator;
