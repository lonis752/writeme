'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
      <div className='py-5 px-2'>
        <Link href='/' className=''>
          <p>« Back to Home</p>
        </Link>
      </div>
      <div className='flex items-center justify-center'>
        <div className='p-10 w-1/2'>
          <h1 className='text-2xl font-bold text-purple text-center'>
            Privacy Policy
          </h1>
          <p className='text-center'>Effective Date: March 27th, 2025</p>
          <br />
          <p>
            Welcome to WriteMe (&quot;Website,&quot; &quot;Service,&quot;
            &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). Your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            and protect your information when you visit our website.
          </p>
          <br />
          <p>1. Information We Collect</p>
          <br />
          <p>We may collect the following types of information:</p>
          <p>
            • Account Information: When you create an account, we collect your
            name, email address, and profile details.
          </p>
          <p>
            • User Content: Any text, images, or other data you submit while
            using WriteMe.
          </p>
          <p>
            • Cookies: We use cookies to improve your browsing experience. You
            can disable cookies in your browser settings.
          </p>
          <p>
            • Automatically Collected Data: We may collect anonymous data such
            as IP addresses, browser type, and usage patterns.
          </p>
          <br />
          <p>2. How We Use Your Information</p>
          <br />
          <p>We use collected information to:</p>
          <p>• Provide, maintain, and improve our services</p>
          <p>• Allow you to manage and edit your profile.</p>
          <p>• Monitor website traffic and analytics.</p>
          <p>• Ensure website security and prevent fraud.</p>
          <p>
            • Communicate with you regarding updates, security, or customer
            support.
          </p>
          <br />
          <p>3. Third-Party Services</p>
          <p>
            We may use third-party services for analytics, authentication, and
            security. These services may collect data based on their own privacy
            policies.
          </p>
          <br />
          <p>4. Data Protection</p>
          <p>
            We implement security measures to protect your information. However,
            no method of transmission over the internet is completely secure.
          </p>
          <br />
          <p>5. Your Rights</p>
          <p>
            Depending on your location, you may have rights regarding your
            personal data, including the right to access, modify, or delete your
            information.
          </p>
          <p>• You can edit or delete your account in your profile settings.</p>
          <p>• Contact us for additional requests regarding your data.</p>
          <br />
          <p>6. Changes to This Policy</p>
          <p>
            We may update this Privacy Policy from time to time. Continued use
            of our website after updates means you accept the revised policy.
          </p>
          <br />
          <p>7.Contact Information</p>
          <p>For any questions, contact us at lonk752@gmail.com</p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default page;
