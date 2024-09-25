import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <div className="main-container">
      <div className="social-media-container">
        <h3>Social Media Links: </h3>
        <div className="social-media-icons">
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
      <div>Email: dhiraj.shrotri@gmail.com</div>
      <div>Albany, NY, USA</div>
    </div>
  )
}