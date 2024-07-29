import { AboutUs } from './AboutUs.tsx';
import { GiftCards } from './GiftCards.tsx';
import { Header } from './Header.tsx';
import { Menu } from './Menu.tsx';
import { SkipLink } from './SkipLink.tsx';
import arrow from '../assets/arrow.svg';

export const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <GiftCards />
      <AboutUs />
      <div className="flex justify-center rounded-xl w-12 h-12 fixed bottom-12 right-12 bg-[#00754a]">
        <SkipLink skipTo="#Header">
          <button>
            <img src={arrow} alt="UP" />
          </button>
        </SkipLink>
      </div>
    </>
  );
};
