import Head from 'next/head';
import '../../styles/globals.css';
import '../../styles/font.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Ga  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R1W34L4RKY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R1W34L4RKY');
        `
          }}
        />
        <meta charSet="utf-8" />
        <title>에이슬립 Asleep</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="에이슬립 Asleep" />
        <meta
          name="description"
          content="최고의 수면을 경험하세요 당신을 위한 개인 맞춤형 인공지능 수면비서 에이슬립 수면을 알고, 삶을 바꿔보아요"
        />
        {/* 대표 url */}
        <meta
          name="keywords"
          content="에이슬립, asleep, 슬립테크, sleeptech, 수면비서, 수면 관리 솔루션, 수면기술, 수면ai, 수면 인공지능, 수면앱, 수면어플"
        />
        {/* og tag start  */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Grade Asleep" />
        <meta property="og:url" content="https://asleep.ai/" />
        <meta property="og:image" content="/images/ogtag_image.jpg" />
        <meta
          property="og:description"
          content="최고의 수면을 경험하세요 당신을 위한 개인 맞춤형 인공지능 수면비서 에이슬립 수면을 알고, 삶을 바꿔보아요"
        />
        {/* og tag end  */}
        {/* naver search */}
        <meta
          name="naver-site-verification"
          content="44e97390ee17dd922dc91575320f0ee4cf2ea3bc"
        />
        {/* naver search2 */}
        <meta
          name="naver-site-verification"
          content="af563ba67e8a5e5da2697fd66af4c6ab67683c3e"
        />
        {/* naver search3 www */}
        <meta
          name="naver-site-verification"
          content="44e97390ee17dd922dc91575320f0ee4cf2ea3bc"
        />
        <meta name="robots" content="index,follow" />
        {/* google search console*/}
        <meta
          name="google-site-verification"
          content="XvIurL0s5wSZnM15zaTnIMn06RProIle4WJSc5hwaCk"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* style */}
        <link rel="canonical" href="https://www.asleep.ai/" />
        {/* <link
          rel="preload"
          as="font"
          type="font"
          href="/fonts/RedHatDisplay/RedHatDisplay-Regular.ttf"
        /> */}
        {/* <link rel="preload" href="/images/tech/tech_1_l_2x.jpg" as="image" /> */}
        <link rel="preload" href={'/images/icon/asleep_logo.svg'} as="image" />
        <link
          rel="preload"
          href={'/images/icon/components-icons-icons-menu.svg'}
          as="image"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
