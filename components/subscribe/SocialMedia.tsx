import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      <a
        href="https://facebook.com/muhammad.bugowy/"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-700 rounded-full p-3 hover:bg-blue-900 transition-colors duration-500"
      >
        <FaFacebookF size={15} />
      </a>
      <a
        href="https://twitter.com/bughowy/"
        target="_blank"
        rel="noreferrer"
        className="bg-sky-500 rounded-full p-3 hover:bg-sky-700 transition-colors duration-500"
      >
        <FaTwitter size={15} />
      </a>
      <a
        href="https://instagram.com/muhammad_bughowy/"
        target="_blank"
        rel="noreferrer"
        className="bg-pink-600 rounded-full p-3 hover:bg-pink-800 transition-colors duration-500"
      >
        <FaInstagram size={15} />
      </a>
      <a
        href="https://github.com/albugowy15/"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-800 rounded-full p-3 hover:bg-slate-900 transition-colors duration-500"
      >
        <FaGithub size={15} />
      </a>
      <a
        href="https://linkedin.com/in/bughowi/"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-800 rounded-full p-3 hover:bg-blue-900 transition-colors duration-500"
      >
        <FaLinkedinIn size={15} />
      </a>
    </div>
  );
}

export default SocialMedia;
