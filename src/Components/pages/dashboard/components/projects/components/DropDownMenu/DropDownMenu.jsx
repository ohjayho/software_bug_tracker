import "./DropDownMenu.css";
import axios from "axios";

const DropDownMenu = ({
  project,
  setModalOpen,
  setIsEdit,
  handleDeleteProject
}) => {
  const handleEdit = async () => {
    setIsEdit(true);
    setModalOpen(true);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/projects/${project.id}`);
      handleDeleteProject(project.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="drop_down_menu_container border_shadow_component">
        <div className="edit_container">
          <div className="btn_edit btns_dropdown" onClick={handleEdit}>
            Edit
          </div>
        </div>
        <div className="delete_container">
          <div className="btn_delete btns_dropdown" onClick={handleDelete}>
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
