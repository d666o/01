import fiveCard from './assets/fiveCard.svg';
import twentyCard from './assets/twentyCard.svg';
import fiftyCard from './assets/fiftyCard.svg';

export interface ICoffe {
  title: string;
  description: string;
  ingredients: Array<string>;
  image: string;
  id: number;
}

interface ICard {
  id: number;
  img: string;
  desc: string;
}

export const giftCards: Array<ICard> = [
  {
    id: 1,
    img: fiveCard,
    desc: 'Gift amount: 5$',
  },
  {
    id: 2,
    img: twentyCard,
    desc: 'Gift amount: 20$',
  },
  {
    id: 3,
    img: fiftyCard,
    desc: 'Gift amount: 50$',
  },
];
