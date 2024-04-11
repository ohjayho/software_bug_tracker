import "./DropDownMenu.css";

const DropDownMenu = () => {
  return (
    <div className="drop_down_menu_container border_shadow_component">
      <div className="edit_container">
        <div className="btn_edit btns_dropdown">Edit</div>
      </div>
      <div className="delete_container">
        <div className="btn_delete btns_dropdown">Delete</div>
      </div>
    </div>
  );
};

export default DropDownMenu;
