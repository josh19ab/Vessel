import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
import {  Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
        <Link to={'/'}><a href="">VESSEL</a></Link> 
        </motion.span>
        <div className="social">
          <a href="https://linkedin.com/in/john-abraham-110596215">
            <img src="/link.png" alt="" />
          </a>
          <a href="https://www.instagram.com/vj.ohn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src="/insta.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@johnabraham7209">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://dribbble.com/VE_SS_EL/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22VE_SS_EL%22&utm_content=%22About%20VE_SS_EL%22&utm_medium=Social_Share">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;