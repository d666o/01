import logo from '../assets/logo.svg';
import { SkipLink } from './SkipLink.tsx';

export const Header = () => {
  return (
    <header
      className="font-face text-4xl flex items-center gap-12 h-28 bg-[#00754a] mb-52"
      id="Header"
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-6">
        <SkipLink skipTo="#Menu">
          <button className="flex gap-2">
            <span className="hover:animate-[text_0.6s_both] hover:underline underline-offset-2">
              menu
            </span>
          </button>
        </SkipLink>
        <SkipLink skipTo="#GiftCards">
          <button className="flex gap-2">
            <span className="hover:animate-[text_0.6s_both] hover:underline underline-offset-2">
              gift cards
            </span>
          </button>
        </SkipLink>
        <SkipLink skipTo="#AboutUs">
          <button className="flex gap-2">
            <span className="hover:animate-[text_0.6s_both] hover:underline underline-offset-2">
              about us
            </span>
          </button>
        </SkipLink>
      </div>
    </header>
  );
};
