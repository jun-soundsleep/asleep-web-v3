import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function Index() {
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale);
  console.log(locales);
  console.log(defaultLocale);

  const { t, lang } = useTranslation();
  const title = t('common:greeting');
  console.log(title);

  return (
    <div>
      <Head>
        <title>Asleep Web</title>
      </Head>
      <div>{t('greeting')}</div>
      <Link href="/" locale="en">
        <a>영어</a>
      </Link>
      <Link href="/" locale="ko">
        <a>한국어</a>
      </Link>
    </div>
  );
}

const Test = styled.div`
  font-family: 'Pretendard';
  width: 500px;
  height: 500px;
  background-color: var(--main-color);
`;
