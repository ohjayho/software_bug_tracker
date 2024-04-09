import "./TeamModal.css";

const TeamModal = ({ setTeamModalOpen }) => {
  return (
    <div className="modal_container">
      <form className="modal">
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
            ></select>
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
