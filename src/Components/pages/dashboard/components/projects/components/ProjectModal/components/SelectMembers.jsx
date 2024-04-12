import { useState, useEffect } from "react";
import axios from "axios";

const SelectMembers = ({ setSelectedMembers, uuid }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="addmembers_section_modal section_modal">
      <h2 className="subtitle_modal">Add Team Members</h2>
      <select
        name=""
        id=""
        className="select_modal"
        multiple
        onChange={(e) => {
          let selected = [];
          Array.prototype.forEach.call(e.target.options, function (opt) {
            // Since e.target.option whichi is htmloptionscollection is not iterable, use call function
            if (opt.selected) {
              selected = [...selected, [uuid, opt.value]];
            }
          });
          setSelectedMembers(selected);
        }}
        required
      >
        {users.map((user) => {
          // console.log("users", user.id);
          return (
            <option value={user.id} key={user.id}>
              {user.id}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectMembers;
