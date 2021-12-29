import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Marketing(props) {
  const { t } = useTranslation();
  const kendrickName = t('people:kendrick_name');
  const kendrickBody = t('people:kendrick_body');
  const freddieName = t('people:freddie_name');
  const freddieBody = t('people:freddie_body');

  const MARKETING = [
    {
      name: kendrickName,
      href: 'https://medium.com/asleepblog/people-in-asleep-패션-스포츠를-넘어-이젠-수면을-정복하려는-에이슬립-cmo의-이야기-a6c1643a9073',
      body: kendrickBody,
      src: [
        '/images/people/detail/2_Kenrick_s_2x.jpg',
        '/images/people/detail/2_Kenrick_m_2x.jpg',
        '/images/people/detail/2_Kenrick_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Kenrick_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Kenrick_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Kenrick_thumb-L_2x.jpg'
      ]
    },
    {
      name: freddieName,
      href: 'https://medium.com/asleepblog/people-in-asleep-갓-태어난-스타트업에서-브랜드-디자이너라고-46f88945408c',
      body: freddieBody,
      src: [
        '/images/people/detail/2_Freddie_s_2x.jpg',
        '/images/people/detail/2_Freddie_m_2x.jpg',
        '/images/people/detail/2_Freddie_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Freddie_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Freddie_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Freddie_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={MARKETING} href={'/people#business'} />;
}

export default Marketing;
