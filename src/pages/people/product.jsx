import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Product(props) {
  const { t } = useTranslation();
  const melName = t('people:mel_name');
  const melBody = t('people:mel_body');
  const malcolmName = t('people:malcolm_name');
  const malcolmBody = t('people:malcolm_body');
  const jennyName = t('people:jenny_name');
  const jennyBody = t('people:jenny_body');
  const sarahName = t('people:sarah_name');
  const sarahBody = t('people:sarah_body');

  const RND = [
    {
      name: melName,
      href: 'https://medium.com/asleepblog/people-in-asleep-출국-일주일-전-비행기표-취소하고-1년-된-스타트업에-셀프-감금된-사연-bcee77cc7ea9',
      body: melBody,
      src: [
        '/images/people/detail/2_Mel_s_2x.jpg',
        '/images/people/detail/2_Mel_m_2x.jpg',
        '/images/people/detail/2_Mel_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Mel_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Mel_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Mel_thumb-L_2x.jpg'
      ]
    },
    {
      name: malcolmName,
      href: 'https://medium.com/asleepblog/people-in-asleep-가치에-중독된-경험-디자이너-6e61ae4f5fb3',
      body: malcolmBody,
      src: [
        '/images/people/detail/2_Malcolm_s_2x.jpg',
        '/images/people/detail/2_Malcolm_m_2x.jpg',
        '/images/people/detail/2_Malcolm_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Malcolm_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Malcolm_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Malcolm_thumb-L_2x.jpg'
      ]
    },
    {
      name: jennyName,
      href: 'https://medium.com/asleepblog/people-in-asleep-sleep-tech-스타트업-product-designer가-된-asmr-유튜버-c8dd55d17238',
      body: jennyBody,
      src: [
        '/images/people/detail/2_Jenny_s_2x.jpg',
        '/images/people/detail/2_Jenny_m_2x.jpg',
        '/images/people/detail/2_Jenny_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Jenny_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Jenny_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Jenny_thumb-L_2x.jpg'
      ]
    },
    {
      name: sarahName,
      href: 'https://medium.com/asleepblog/people-in-asleep-만들기를-좋아하는-창작가-에이슬립에서-수면-경험-창작에-도전하다-31274f1a11da',
      body: sarahBody,
      src: [
        '/images/people/detail/2_Sarah_s_2x.jpg',
        '/images/people/detail/2_Sarah_m_2x.jpg',
        '/images/people/detail/2_Sarah_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Sarah_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Sarah_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Sarah_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={RND} />;
}

export default Product;
