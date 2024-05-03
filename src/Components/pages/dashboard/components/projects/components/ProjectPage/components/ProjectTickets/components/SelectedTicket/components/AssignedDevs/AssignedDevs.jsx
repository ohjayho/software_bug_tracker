import "./AssignedDevs.css";
import axios from "axios";
import { useEffect, useState } from "react";

const AssignedDevs = ({ selectedTicket }) => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const getAssignedDevs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/ticket_devs/${selectedTicket.id}`
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
          <div className="assigned_dev" key={dev.first_name}>
            {`${dev.first_name} ${dev.last_name}`}
          </div>
        );
      })}
    </div>
  );
};

export default AssignedDevs;
