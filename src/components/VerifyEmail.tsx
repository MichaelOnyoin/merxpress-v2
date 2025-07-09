import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const VerifyEmail = () => {
  const [status, setStatus] = useState('Verifying...');
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      const { url } = router.query;

      if (!url || typeof url !== 'string') return;

      try {
        await axios.get(url);
        setStatus('Email successfully verified! Redirecting...');
        setTimeout(() => router.push('/login'), 3000);
      } catch (error) {
        setStatus('Verification failed. The link may have expired.');
      }
    };

    verify();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-medium">{status}</p>
    </div>
  );
};

export default VerifyEmail;
// This component handles the email verification process.