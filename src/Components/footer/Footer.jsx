import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <div className="footer_content">Terms</div>
        <div className="footer_content">Privacy</div>
        <div className="footer_content">Security</div>
        <div className="footer_content">Status</div>
        <div className="footer_content">Docs</div>
        <div className="footer_content">Contact</div>
        <div className="footer_content">Manage cookies</div>
        <div className="footer_content">
          Do not share my personal information
        </div>
      </div>
      <div className="footer_info">
        <div className="info_img"></div>
        <div className="info_company_name">ⓒ 2024 Software Bug Tracker</div>
      </div>
    </div>
  );
};

export default Footer;
