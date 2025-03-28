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
            Terms and Conditions
          </h1>
          <p className='text-center'>Effective Date: March 27th, 2025</p>
          <br />
          <p>
            Welcome to WriteMe (&quot;Website,&quot; &quot;Service,&quot;
            &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By accessing or
            using our website and services, you agree to be bound by these Terms
            and Conditions. If you do not agree, please do not use our services.
          </p>
          <br />
          <p>1. Use of Our Services</p>
          <p>
            You agree to use our website in compliance with applicable laws and
            regulations. You may not use our services for any illegal or
            unauthorized purpose.
          </p>
          <br />
          <p>2. Account Registration</p>
          <p>
            To access certain features, you must create an account. You agree to
            provide accurate information and keep your account secure. You are
            responsible for any activity that occurs under your account.
          </p>
          <br />
          <p>3. User Content</p>
          <p>
            By posting, uploading, or submitting content to WriteMe, you grant
            us a non-exclusive, worldwide license to use, store, and display
            your content as necessary to operate the service. You are
            responsible for the content you share and must not post illegal or
            harmful material.
          </p>
          <br />
          <p>4. Prohibited Activities</p>
          <br />
          <p>You agree not to:</p>
          <p>
            • Use the service for fraudulent, illegal, or harmful activities.
          </p>
          <p>• Impersonate others or misrepresent your identity.</p>
          <p>• Attempt to hack, disrupt, or harm the website or its users.</p>
          <br />
          <p>5. Account Deletion</p>
          <p>
            You may delete your account at any time. We may also suspend or
            terminate accounts that violate these terms.
          </p>
          <br />
          <p>6. Service Availability</p>
          <p>
            We strive to keep WriteMe available, but we do not guarantee
            uninterrupted service. We may update, modify, or discontinue parts
            of the service without prior notice.
          </p>
          <br />
          <p>7. Limitation of Liability</p>
          <p>
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from the use of our website or
            services.
          </p>
          <br />
          <p>6. Privacy Policy</p>
          <p>
            Your data is handled in accordance with our Privacy Policy, which
            you can find <Link href='/privacy-policy'>here</Link>
          </p>
          <br />
          <p>7. Changes to These Terms</p>
          <p>
            We may update these Terms and Conditions from time to time.
            Continued use of our services after updates means you accept the
            revised terms.
          </p>
          <br />
          <p>8. Contact Information</p>
          <p>For any questions, contact us at lonk752@gmail.com</p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default page;
