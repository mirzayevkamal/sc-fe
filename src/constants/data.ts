import { FAQType, InfoItem, SubscriptionCardItem } from "../types/common.types";

export const infoData: InfoItem[] = [
  {
    id: 1,
    title: "ctaTextOne",
    description: "ctaDescOne",
    image: "assets/svg/info-1.svg",
  },
  {
    id: 2,
    title: "ctaTextTwo",
    description: "ctaDescTwo",
    image: "assets/svg/info-2.svg",
  },
  {
    id: 3,
    title: "ctaTextThree",
    description: "ctaDescThree",
    image: "assets/svg/info-3.svg",
  },
  {
    id: 4,
    title: "ctaTextFour",
    description: "ctaDescFour",
    image: "assets/svg/info-4.svg",
  },
];

export const subscriptionBenefits: string[] = [
    'multipleChannels',
    'autoAssignment',
    'quickResponses',
    'reporting',
  ];

  export const subscriptionData: SubscriptionCardItem[] = [
    {
      id: 1,
      price: 179,
      type: 'monthly',
      agents: 1,
      plan: 'basic',
    },
    {
      id: 2,
      price: 399,
      type: 'monthly',
      agents: 5,
      plan: 'plus',
    },
    {
      id: 3,
      price: 1499,
      type: 'monthly',
      agents: 15,
      plan: 'pro',
    },
  ];

  export const faqData: FAQType[] = [
    {
      id: 1,
      title: 'faqTitleOne',
      description: 'faqAnswerOne',
    },
    {
      id: 2,
      title: 'faqTitleTwo',
      description: 'faqAnswerTwo',
    },
    {
      id: 3,
      title: 'faqTitleThree',
      description: 'faqAnswerThree',
    },
    {
      id: 4,
      title: 'faqTitleFour',
      description: 'faqAnswerFour',
    },
    {
      id: 5,
      title: 'faqTitleFive',
      description: 'faqAnswerFive',
    },
  ];