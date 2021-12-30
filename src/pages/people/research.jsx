import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Research(props) {
  const { t } = useTranslation();
  const tyler = t('people:tyler_name');
  const tylerBody = t('people:tyler_body');
  const roben = t('people:roben_name');
  const robenBody = t('people:roben_body');

  const REASEARCH = [
    {
      name: tyler,
      href: 'https://medium.com/asleepblog/people-in-asleep-ai와-사람-모두에-귀기울이는-ai-researcher-겸-operator-179a6230a8dd',
      body: tylerBody,
      src: [
        '/images/people/detail/2_Tyler_s_2x.jpg',
        '/images/people/detail/2_Tyler_m_2x.jpg',
        '/images/people/detail/2_Tyler_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Tyler_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Tyler_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Tyler_thumb-L_2x.jpg'
      ]
    },
    {
      name: roben,
      href: 'https://medium.com/asleepblog/people-in-asleep-%EB%8C%80%ED%95%99%EC%9B%90-%EB%8F%99%EB%A3%8C%EB%93%A4%EC%9D%84-%EB%94%B0%EB%9D%BC-%ED%9A%8C%EC%82%AC%EA%B9%8C%EC%A7%80-%EC%98%AE%EA%B8%B4-%EC%95%84%EB%A7%88-%EA%B3%A7-%ED%95%9C%EA%B5%AD%EC%96%B4-%EB%A7%88%EC%8A%A4%ED%84%B0-a0f70b79f1e3',
      body: robenBody,
      src: [
        '/images/people/detail/2_Roben_s_2x.jpg',
        '/images/people/detail/2_Roben_m_2x.jpg',
        '/images/people/detail/2_Roben_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Roben_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Roben_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Roben_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={REASEARCH} href={'/people#rnd'} />;
}

export default Research;
