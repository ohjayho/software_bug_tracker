import { useState } from "react";

const SelectMembers = ({ setMembers }) => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  return (
    <div className="addmembers_section_modal section_modal">
      <h2 className="subtitle_modal">Add Team Members</h2>
      <select
        name=""
        id=""
        className="select_modal"
        multiple
        onChange={(e) => {
          const selected = [];
          Array.prototype.forEach.call(e.target.options, function (opt) {
            // Since e.target.option whichi is htmloptionscollection is not iterable, use call function
            if (opt.selected) {
              selected.push(opt.value);
            }
          });
          setMembers(selected);
        }}
      >
        {users.map((user) => {
          console.log("users", user.id);
          return <option value={user.id}>{user.id}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectMembers;
