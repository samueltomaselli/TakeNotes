import { useState } from "react";
import { InputAdd } from "./InputAdd";
import { ItemList } from "./ItemList";

export const Main = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState<string[]>(JSON.parse(localStorage.getItem("list") || "[]"));
  const [warn, setWarn] = useState<boolean>(false);
  const [edit, setEdit] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (item !== "") {
      setList([...list, item]);
      localStorage.setItem("list", JSON.stringify([...list, item]));
      setItem("");
      setWarn(false);
    } else {
      setWarn(true);
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const deleteItem = (index: number) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const editItem = (index: number) => {
    if (edit != "") {
      let newList = [...list];
      newList.splice(index, 1, edit);
      setList(newList);
      localStorage.setItem("list", JSON.stringify(newList));
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-5 w-5/6 sm:w-4/6 lg:w-3/6 xl:w-2/6">
      <InputAdd item={item} addItem={addItem} handleOnChange={handleOnChange} handleOnKeyDown={handleOnKeyDown} />
      {warn && <h1 className="text-purple-600 text-center font-medium">Erro: O campo deve ser preenchido.</h1>}
      <div className="flex flex-col gap-2">
        {list &&
          list.map((item, index) => (
            <div key={index}>
              <ItemList index={index} item={item} deleteItem={deleteItem} editItem={editItem} setEdit={setEdit} />
            </div>
          ))}
      </div>
    </div>
  );
};
