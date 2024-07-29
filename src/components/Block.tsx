import { ICoffe } from '../data';

interface IBlockProps {
  item: ICoffe;
}

export const Block: React.FC<IBlockProps> = (props) => {
  return (
    <div className="w-1/4 mb-2.5 flex flex-col items-center justify-between gap-2 bg-[#00754a] rounded-3xl p-2.5">
      <div className="text-5xl ">{props.item.title}</div>
      <div className="text-3xl self-start">{`Description: ${props.item.description}`}</div>
      <div className="self-start">{`Ingredients: ${props.item.ingredients.join(', ')}`}</div>
      <div>
        <img className="w-32 h-32 rounded-full" src={props.item.image} alt={props.item.title} />
      </div>
      <div>{`${props.item.id}$`}</div>
    </div>
  );
};
