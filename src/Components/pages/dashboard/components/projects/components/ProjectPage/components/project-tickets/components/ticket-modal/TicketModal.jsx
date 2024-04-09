import "./TicketModal.css";

const TicketModal = ({ setTicketModalOpen }) => {
  return (
    <div className="modal_container">
      <form className="modal">
        <div className="header_modal">
          <h1 className="title_modal">Create Ticket</h1>
          <h1
            className="close_btn_modal"
            onClick={() => {
              setTicketModalOpen(false);
            }}
          >
            Χ
          </h1>
        </div>
        <div className="content_modal">
          <div className="name_section_modal section_modal">
            <h2 className="subtitle_modal">Title</h2>
            <input type="text" className="input_name" required />
          </div>
          <div className="description_section_modal section_modal">
            <h2 className="subtitle_modal">Ticket Description</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textarea_modal"
              required
            ></textarea>
          </div>
          <div className="middle_section_modal">
            <div className="assign_devs_modal inputs_middle ticket_inputs">
              <h2 className="title_assign_devs subtitle_modal">Assign Devs</h2>
              <select multiple>
                <option value="">hey</option>
              </select>
            </div>
            <div className="time_estimate_modal inputs_middle ticket_inputs">
              <h2 className="title_titme_estiamte subtitle_modal">
                Time Estimate (Hours)
              </h2>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="bottom_section_modal">
            <div className="type_modal inputs_bottom ticket_inputs">
              <h2 className="title_type subtitle_modal">Type</h2>
              <select>
                <option>hey</option>
              </select>
            </div>
            <div className="priority_modal inputs_bottom ticket_inputs">
              <h2 className="title_priority subtitle_modal">Priority</h2>
              <select>
                <option>hey</option>
              </select>
            </div>
            <div className="status_modal inputs_bottom ticket_inputs">
              <h2 className="title_status subtitle_modal">Status</h2>
              <select>
                <option>hey</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer_modal">
          <button className="submit_btn_modal">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TicketModal;
