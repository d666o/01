import { useState } from 'react';
import { giftCards } from '../data.ts';

export const GiftCards = () => {
  const [target, setTarget] = useState<number>(1);

  const increaseHandler = () => {
    if (target < 3) {
      setTarget((prev) => prev + 1);
    } else {
      setTarget(1);
    }
  };
  const decreaseHandler = () => {
    if (target > 1) {
      setTarget((prev) => prev - 1);
    } else {
      setTarget(3);
    }
  };
  return (
    <div className="flex justify-center" id="GiftCards">
      <div className="flex flex-col items-center gap-12 p-6 font-face text-4xl mb-52 w-2/3 bg-[#00754a] rounded-3xl">
        <div className="text-8xl">Gift cards</div>
        <div className="flex">
          {target === 1 && (
            <div className="animate-[slide_1.2s_cubic-bezier(0.39,_0.575,_0.565,_1)_both]">
              <img src={giftCards[target - 1].img} />
              <span>{giftCards[target - 1].desc}</span>
            </div>
          )}
          {target === 2 && (
            <div className="animate-[slide_1.2s_cubic-bezier(0.39,_0.575,_0.565,_1)_both]">
              <img src={giftCards[target - 1].img} />
              <span>{giftCards[target - 1].desc}</span>
            </div>
          )}
          {target === 3 && (
            <div className="animate-[slide_1.2s_cubic-bezier(0.39,_0.575,_0.565,_1)_both]">
              <img src={giftCards[target - 1].img} />
              <span>{giftCards[target - 1].desc}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-6">
          <button className="w-12 h-24 border-2 rounded-xl" onClick={decreaseHandler}>
            {'<'}
          </button>
          <button className="w-32 h-24 border-2 rounded-xl">BUY NOW</button>
          <button className="w-12 h-24 border-2 rounded-xl" onClick={increaseHandler}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};
