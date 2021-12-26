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
      href: '',
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
      href: '',
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
      href: '',
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
      href: '',
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
