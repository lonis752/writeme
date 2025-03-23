'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const Generator = () => {
  const [link, setLink] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(link);
  console.log(content);
  const URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/gpt'
      : '/api/gpt';

  const getContent = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Sending request to:', URL);

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `Using this GitHub repo link (${link}) and write a full README.md file with a thorough deep dive of their project with a title, replaceable area for preview image, detailed description of what the project does, list of the core features, list of tech stack, installation/repo cloning steps, future improvements, and a friendly message inviting contributions to the repo and format it like this:<div><div># Members Only</div><br /><div>![Project Preview](./preview-image.png) &lt;!-- Replace with an actual image path or URL --&gt;</div><br /><div>## 📖 Project Overview</div><br /><div>**project title** project desc.</div><br /><div>## ✨ Features</div><br /><div>- Feature1</div><div>- Feature2</div><br /><div>## 🛠️ Tech Stack</div><br /><div>- **Frontend**: EJS </div><div>- **Backend**: Node.js, Express.js</div><div>- **Database**: MongoDB with Mongoose ODM</div><div>- **Authentication**: Passport.js, bcrypt</div><div>- **Styling**: Custom CSS with Bootstrap</div><div>- **Middleware**: Express-session for session management</div><br /><div>## 🚀 Getting Started</div><br /><div>### 1️⃣ Clone the Repository</div><br /><div>\`\`\`sh</div><div>git clone https://github.com/lonis752/members-only.git</div><div>cd members-only</div><div>\`\`\`</div><br /><div>### 2️⃣ Install Dependencies</div><br /><div>\`\`\`sh</div><div>npm install</div><div>\`\`\`</div><br /><div>### 3️⃣ Set Up Environment Variables</div><br /><div>Create a \`.env\` file in the project root and add:</div><br /><div>\`\`\`ini</div><div>MONGO_URI=your_mongodb_connection_string</div><div>SESSION_SECRET=your_secret_key</div><div>\`\`\`</div><br /><div>### 4️⃣ Start the Development Server</div><br /><div>\`\`\`sh</div><div>npm start</div><div>\`\`\`</div><br /><div>The app will be running on \`http://localhost:3000\`.</div><br /><div>## 🔮 Future Improvements</div><br /><div>- Implementing user roles (e.g., admin, moderator)</div><div>- Adding user avatars for a more personalized experience</div><div>- Enhancing the UI with a modern design</div><div>- Implementing real-time messaging with WebSockets</div><br /><div>## 🤝 Contributing</div><br /><div>Contributions are welcome! If you have ideas for improvements, feel free to fork the repo, make changes, and submit a pull request. Let's build something awesome together! 🚀</div><br /><div>---</div><br /><div>Made with ❤️ by [name](GitHub link)</div><br /><br /></div>`,
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Response JSON:', data);

      // ✅ Extract content correctly
      const messageContent = data?.message || 'No content received';
      console.log('Extracted content:', messageContent);

      const validContent = messageContent.split("```markdown");
      setContent(validContent);
    } catch (error) {
      console.error('Error fetching content:', error);
      setContent('Failed to load content.');
    } finally {
      setIsLoading(false);
    }
  };

  const HTMLView: React.FC = () => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
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
            Your content is being generated
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
        <form onSubmit={getContent}>
          <Input onChange={(e) => setLink(e.target.value)} />
          <Button type='submit'>Generate</Button>
        </form>
        <HTMLView />
      </div>
    </>
  );
};

export default Generator;
