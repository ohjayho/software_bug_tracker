import "./Administration.css";

const Administration = () => {
  return (
    <div className="administration_container">
      <h1 className="header_administration title_container">Administration</h1>
      <div className="administration_content">
        <div className="organization_container border_shadow_component">
          <div className="header_organization_container header_components">
            <h1 className="title_organization_container title_header">
              Organization
            </h1>
          </div>
          <div className="table_administration_wrapper">
            <table className="table_administration">
              <tbody>
                <tr>
                  <td>Jay</td>
                </tr>
                <tr>
                  <td>John</td>
                </tr>
                <tr>
                  <td>Samantha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="edit_user_information_container border_shadow_component">
          <div className="header_edit_user_information header_components">
            <h1 className="title_edit_user_information title_header">
              Edit User Information
            </h1>
          </div>
          <div className="user_information_wrapper">
            <form className="user_information_container">
              <h1 className="user_name">Jay Ho Oh</h1>
              <div className="user_first_section">
                <div className="first_name_container">
                  <label htmlFor="first_name">First Name</label>
                  <input type="text" name="" id="first_name" />
                </div>
                <div className="last_name_container">
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" name="" id="last_name" />
                </div>
              </div>
              <div className="user_second_section">
                <div className="phone_container">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="" id="phone" />
                </div>
                <div className="authorization_container">
                  <label htmlFor="authorization_level">
                    Authorization Level
                  </label>
                  <input type="text" name="" id="authorization_level" />
                </div>
              </div>
              <div className="user_third_section">
                <div className="email_container">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="" id="email" />
                </div>
              </div>
              <div className="user_button_section">
                <button className="btn_user_info btn_submit btn_new">
                  Submit
                </button>
                <button className="btn_user_info btn_remove">
                  Remove User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
