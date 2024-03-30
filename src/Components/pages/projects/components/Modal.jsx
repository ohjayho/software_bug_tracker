import "./Modal.css";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="modal_container">
      <div className="modal">
        <div className="header_modal">
          <h1 className="title_modal">Add New Project</h1>
          <h1 className="close_btn_modal" onClick={() => setModalOpen(false)}>
            Χ
          </h1>
        </div>
        <div className="content_modal">
          <div className="name_section_modal section_modal">
            <h2 className="subtitle_modal">Project Name</h2>
            <input type="text" className="input_name" />
          </div>
          <div className="description_section_modal section_modal">
            <h2 className="subtitle_modal">Project Description</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textarea_modal"
            ></textarea>
          </div>
          <div className="addmembers_section_modal section_modal">
            <h2 className="subtitle_modal">Add Team Members</h2>
            <select name="" id="" className="select_modal" multiple="multiple">
              <option value="">5재</option>
              <option value="">동라프</option>
              <option value="">앙큼</option>
            </select>
          </div>
        </div>
        <div className="footer_modal">
          <button className="submit_btn_modal">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
