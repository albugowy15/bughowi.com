import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function NavbarSocialMedia() {
  return (
    <>
      <a
        href="https://facebook.com/muhammad.bugowy/"
        aria-label="Author facebook"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-blue-600 transition-colors ease-linear"
      >
        <AiFillFacebook size={25} />
      </a>
      <a
        href="https://twitter.com/bughowy"
        aria-label="Author Twitter"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-sky-400 transition-colors ease-linear"
      >
        <AiFillTwitterSquare size={25} />
      </a>
      <a
        href="https://instagram.com/muhammad_bughowy"
        aria-label="Author Instagram"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-pink-600 transition-colors ease-linear"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://github.com/albugowy15"
        aria-label="Author Github"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-slate-700 transition-colors ease-linear"
      >
        <AiFillGithub size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/bughowi"
        aria-label="Author Linkedin"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-blue-800 transition-colors ease-linear"
      >
        <AiFillLinkedin size={25} />
      </a>
    </>
  );
}

export default NavbarSocialMedia;
