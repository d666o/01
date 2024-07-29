import { useEffect, useState } from 'react';
import { Block } from './Block.tsx';
import { ICoffe } from '../data.ts';

export const Menu = () => {
  const [data, setData] = useState<Array<ICoffe>>([]);
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      setData(await resp.json());
    } catch {
      alert('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="font-face text-4xl flex flex-col items-center mb-52" id="Menu">
      <div className="text-8xl">Menu</div>
      <div className="flex flex-wrap gap-6 justify-center p-2.5">
        {data.map((item) => (
          <Block key={`${item.id}${item.description}`} item={item} />
        ))}
      </div>
    </div>
  );
};
