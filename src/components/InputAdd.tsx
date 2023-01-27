type Props = {
  item: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  addItem: () => void;
};

export const InputAdd = ({ item, handleOnChange, handleOnKeyDown, addItem }: Props) => {
  return (
    <div className="flex gap-2">
      <input
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        value={item}
        placeholder="Insira uma anotação"
        type="text"
        className="w-full border-2 text-xl max-sm:text-sm border-gray-800 rounded-lg outline-none p-4 font-semibold focus:scale-100"
      />
      <button
        onClick={() => addItem()}
        className="text-base max-sm:text-sm  border-2 rounded-lg p-2 selection:border-gray-800 bg-purple-600 border-gray-800 text-white font-bold hover:scale-105"
      >
        Adicionar
      </button>
    </div>
  );
};
