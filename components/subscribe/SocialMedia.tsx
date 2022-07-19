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
        className="bg-blue-700 rounded-full p-3"
      >
        <FaFacebookF size={15} />
      </a>
      <a
        href="https://facebook.com/muhammad.bugowy/"
        className="bg-sky-500 rounded-full p-3"
      >
        <FaTwitter size={15} />
      </a>
      <a
        href="https://facebook.com/muhammad.bugowy/"
        className="bg-pink-600 rounded-full p-3"
      >
        <FaInstagram size={15} />
      </a>
      <a
        href="https://facebook.com/muhammad.bugowy/"
        className="bg-slate-800 rounded-full p-3"
      >
        <FaGithub size={15} />
      </a>
      <a
        href="https://facebook.com/muhammad.bugowy/"
        className="bg-blue-900 rounded-full p-3"
      >
        <FaLinkedinIn size={15} />
      </a>
    </div>
  );
}

export default SocialMedia;
