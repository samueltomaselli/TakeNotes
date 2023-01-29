import { CgNotes } from "react-icons/cg";

export const Header = () => {
  return (
    <div className="text-4xl font-bold mb-5 flex justify-center items-center gap-2">
      <CgNotes className="text-purple-600" />
      <h1>
        Take<span className="text-purple-600">Notes</span>
      </h1>
    </div>
  );
};
