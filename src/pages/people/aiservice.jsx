import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Aiservice(props) {
  const { t } = useTranslation();
  const kevin = t('people:kevin_name');
  const kevinBody = t('people:kevin_body');

  const REASEARCH = [
    {
      name: kevin,
      href: 'https://medium.com/asleepblog/people-in-asleep-케빈-기회를-잡고-되게-만들어봐-86b111dfd518',
      body: kevinBody,
      src: [
        '/images/people/detail/2_Kevin_s_2x.jpg',
        '/images/people/detail/2_Kevin_m_2x.jpg',
        '/images/people/detail/2_Kevin_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Kevin_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Kevin_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Kevin_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={REASEARCH} href={'/people#technical'} />;
}

export default Aiservice;
