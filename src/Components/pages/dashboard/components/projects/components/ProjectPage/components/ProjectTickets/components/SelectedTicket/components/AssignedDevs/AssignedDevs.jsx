import "./AssignedDevs.css";
import axios from "axios";
import { useEffect, useState } from "react";

const AssignedDevs = ({ selectedTicket }) => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const getAssignedDevs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/ticket_devs/${selectedTicket.ticket_id}`
        );
        setDevs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAssignedDevs();
  }, []);
  return (
    <div className="devs_container">
      {devs.map((dev) => {
        return (
          <div className="assigned_dev" key={dev.assigned_dev}>
            {dev.assigned_dev}
          </div>
        );
      })}
    </div>
  );
};

export default AssignedDevs;
