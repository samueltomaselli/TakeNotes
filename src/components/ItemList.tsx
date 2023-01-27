import { useState } from "react";
import { FaTrash, FaEdit, FaCheckSquare, FaTimesCircle } from "react-icons/fa";

type Props = {
  index: number;
  item: string;
  deleteItem: (index: number) => void;
  editItem: (index: number) => void;
  setEdit: React.Dispatch<React.SetStateAction<string>>;
};

export const ItemList = ({ index, item, deleteItem, editItem, setEdit }: Props) => {
  const [editInput, setEditInput] = useState<boolean>(false);

  const EditAndClose = () => {
    editItem(index);
    setEditInput(false);
  };

  return (
    <div className="relative">
      <div
        className={`${
          index % 2 === 0 ? "border-2 border-gray-800 accent-gray-800" : "border-2 border-purple-600 accent-purple-600"
        }  flex gap-10 justify-between p-4 rounded-lg h-full break-all max-sm:gap-5`}
      >
        <p className="text-lg font-bold h-auto max-sm:text-sm">{item}</p>
        <div className="flex justify-center items-center gap-5 max-sm:gap-3">
          <button onClick={() => setEditInput(true)} className="text-sm font-semibold">
            <FaEdit className="text-xl hover:scale-110" />
          </button>
          <button
            onClick={() => {
              deleteItem(index);
            }}
            className="text-sm font-semibold"
          >
            <FaTrash className="text-xl hover:scale-110" />
          </button>
        </div>
      </div>
      <div>
        {editInput && (
          <div
            className={`${
              index % 2 === 0 ? "border-2 border-gray-800 accent-gray-800" : "border-2 border-purple-600 accent-purple-600"
            }  flex gap-10 justify-between items-center p-4 rounded-lg h-full break-all absolute inset-0 bg-slate-100 max-sm:gap-5`}
          >
            <input
              onChange={(e) => setEdit(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? EditAndClose() : null)}
              type="text"
              defaultValue={item}
              className="w-full bg-white border-2 border-black rounded-lg px-4 py-2 font-semibold outline-none"
              autoFocus
            />
            <div className="flex justify-center items-center gap-5 max-sm:gap-3">
              <button
                onClick={() => {
                  EditAndClose();
                }}
                className="text-sm font-semibold"
              >
                <FaCheckSquare className="text-xl hover:scale-110" />
              </button>
              <button
                onClick={() => {
                  setEditInput(false);
                }}
                className="text-sm font-semibold"
              >
                <FaTimesCircle className="text-xl hover:scale-110" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
