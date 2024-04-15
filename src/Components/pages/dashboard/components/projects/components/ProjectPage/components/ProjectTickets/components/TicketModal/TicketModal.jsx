import "./TicketModal.css";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const TicketModal = ({ setTicketModalOpen, team, project_id }) => {
  console.log("아뒤아뒤", project_id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignDevs, setAssignDevs] = useState([]);
  const [timeEstimate, setTimeEstimate] = useState("");
  const [type, setType] = useState("ISSUE");
  const [priority, setPriority] = useState("URGENT");
  const [status, setStatus] = useState("TO DO");
  const [author, setAuthor] = useState(localStorage.getItem("currentUser"));
  const [ticketId, setTicketId] = useState(uuidv4());

  const handleAssignDevs = (e) => {
    let selected = [];
    Array.prototype.forEach.call(e.target.options, function (opt) {
      if (opt.selected) {
        selected.push([project_id, opt.value]);
      }
    });
    setAssignDevs(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = {
      ticket_id: ticketId,
      project_id: project_id,
      title: title,
      description: description,
      author: author,
      time_estimate: timeEstimate,
      type: type,
      priority: priority,
      status: status
    };
    try {
      await axios.post("http://localhost:8800/project_tickets", newTicket);
      // await axios.post("http://localhost:8800/ticket_members", assignDevs);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="modal_container">
      <form className="modal" onSubmit={handleSubmit}>
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
            <input
              type="text"
              className="input_name"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
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
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="middle_section_modal">
            <div className="assign_devs_modal inputs_middle ticket_inputs">
              <h2 className="title_assign_devs subtitle_modal">Assign Devs</h2>
              <select multiple onChange={handleAssignDevs} required>
                {team.map((mb) => (
                  <option value={mb.member} key={mb.member}>
                    {mb.member}
                  </option>
                ))}
              </select>
            </div>
            <div className="time_estimate_modal inputs_middle ticket_inputs">
              <h2 className="title_titme_estiamte subtitle_modal">
                Time Estimate (Hours)
              </h2>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setTimeEstimate(e.target.value)}
              />
            </div>
          </div>
          <div className="bottom_section_modal">
            <div className="type_modal inputs_bottom ticket_inputs">
              <h2 className="title_type subtitle_modal">Type</h2>
              <select
                onChange={(e) => setType(e.target.value)}
                defaultValue={"hey"}
              >
                <option value="ISSUE">ISSUE</option>
                <option value="VULNERABILITY">VULNERABILITY</option>
                <option value="BUG">BUG</option>
                <option value="REQUEST">REQUEST</option>
              </select>
            </div>
            <div className="priority_modal inputs_bottom ticket_inputs">
              <h2 className="title_priority subtitle_modal">Priority</h2>
              <select onChange={(e) => setPriority(e.target.value)}>
                <option value="URGENT">URGENT</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
              </select>
            </div>
            <div className="status_modal inputs_bottom ticket_inputs">
              <h2 className="title_status subtitle_modal">Status</h2>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option value="TO DO">TO DO</option>
                <option value="IN PROGRESS">IN PROGRESS</option>
                <option value="READY FOR REVIEW">READY FOR REVIEW</option>
                <option value="COMPLETED">COMPLETED</option>
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
