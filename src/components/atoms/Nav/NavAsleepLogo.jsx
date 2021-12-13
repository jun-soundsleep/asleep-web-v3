import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavAsleepLogo() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preload" href={'/images/icon/asleep_logo.svg'} as="image" />
      </Head>
      <Link href={'/'} locale={router.locale}>
        <a>
          <img
            width={96}
            height={17}
            src="/images/icon/asleep_logo.svg"
            alt={'asleepLogo'}
          />
        </a>
      </Link>
    </>
  );
}

export default NavAsleepLogo;
