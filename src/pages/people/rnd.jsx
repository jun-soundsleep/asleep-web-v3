import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Rnd(props) {
  const { t } = useTranslation();

  const johnName = t('people:john_name');
  const johnBody = t('people:john_body');
  const julieName = t('people:julie_name');
  const julieBody = t('people:julie_body');
  const brianName = t('people:brian_name');
  const brianBody = t('people:brian_body');
  const joeyName = t('people:joey_name');
  const joeyBody = t('people:joey_body');

  const RND = [
    {
      name: johnName,
      href: 'https://medium.com/asleepblog/people-in-asleep-수면이라는-우주를-탐험하는-천문학도-출신-리드-엔지니어-이야기-9146991372c5',
      body: johnBody,
      src: [
        '/images/people/detail/2_John_s_2x.jpg',
        '/images/people/detail/2_John_m_2x.jpg',
        '/images/people/detail/2_John_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_John_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_John_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_John_thumb-L_2x.jpg'
      ]
    },
    {
      name: julieName,
      href: 'https://medium.com/asleepblog/people-in-asleep-잠을-좋아하던-잠꾸러기-에이슬립의-막내-엔지니어가-되어-잠을-연구하다-40d86a244266',
      body: julieBody,
      src: [
        '/images/people/detail/2_Julie_s_2x.jpg',
        '/images/people/detail/2_Julie_m_2x.jpg',
        '/images/people/detail/2_Julie_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Julie_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Julie_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Julie_thumb-L_2x.jpg'
      ]
    },
    {
      name: brianName,
      href: 'https://medium.com/asleepblog/people-in-asleep-대학생-신분-8년차-졸업을-미루고-에이슬립에-합류한-엔지니어-이야기-2684f46f0f3f',
      body: brianBody,
      src: [
        '/images/people/detail/2_Brian_s_2x.jpg',
        '/images/people/detail/2_Brian_m_2x.jpg',
        '/images/people/detail/2_Brian_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Brian_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Brian_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Brian_thumb-L_2x.jpg'
      ]
    },
    {
      name: joeyName,
      href: 'https://medium.com/asleepblog/people-in-asleep-150년된-회사에서-1-5년된-에이슬립으로-임베디드-소프트웨어-엔지니어의-스타트업-적응기-5979a462b42a',
      body: joeyBody,
      src: [
        '/images/people/detail/2_Joey_s_2x.jpg',
        '/images/people/detail/2_Joey_m_2x.jpg',
        '/images/people/detail/2_Joey_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Joey_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Joey_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Joey_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={RND} href={'/people#rnd'} />;
}

export default Rnd;
