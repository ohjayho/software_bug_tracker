import "./TeamModal.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TeamModal = ({ notSelectedTeam, setTeamModalOpen, project_id }) => {
  const [addMembers, setAddMembers] = useState([]);
  const [newMembers, setNewMembers] = useState([]);
  const [initialRender, setInitialRender] = useState(true);

  const handleMembers = (e) => {
    let selected = [];
    Array.prototype.forEach.call(e.target.options, function (opt) {
      if (opt.selected) {
        selected = [...selected, [project_id, opt.value]];
      }
    });
    setAddMembers(selected);
    console.log(selected);
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    const uploadMembers = async () => {
      try {
        await axios.post(`http://localhost:8800/project_members`, newMembers);
      } catch (err) {
        console.log(err);
      }
    };
    uploadMembers();
  }, [newMembers]);

  const teamSubmitHandle = () => {
    setNewMembers(addMembers);
  };

  return (
    <div className="modal_container">
      <form onSubmit={teamSubmitHandle} className="modal">
        <div className="header_modal">
          <h1 className="title_modal">Add Member</h1>
          <h1
            className="close_btn_modal"
            onClick={() => setTeamModalOpen(false)}
          >
            Χ
          </h1>
        </div>
        <div className="content_modal">
          <div className="addmembers_section_modal section_modal">
            <h2 className="subtitle_modal">Add Team Members</h2>
            <select
              name=""
              id=""
              className="select_modal"
              multiple
              required
              onChange={(e) => handleMembers(e)}
            >
              {notSelectedTeam.map((nst) => {
                return (
                  <option key={nst.id} value={nst.id}>
                    {`${nst.first_name} ${nst.last_name}`}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="footer_modal">
          <button className="submit_btn_modal">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TeamModal;
