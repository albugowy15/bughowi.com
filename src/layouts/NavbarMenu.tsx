import * as React from "react";
import profile_pic from "@/assets/profile.png";
import { AnimatePresence, motion } from "motion/react";

interface NavbarLink {
  path: string;
  title: string;
}

interface NavbarProps {
  links: NavbarLink[];
}

const socialMediaLinks = [
  { href: "https://github.com/albugowy15", title: "github" },
  { href: "https://twitter.com/bughowy", title: "x" },
  {
    href: "https://linkedin.com/in/bughowi",
    title: "linkedin",
  },
];

const NavbarMenu: React.FC<NavbarProps> = ({ links }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full py-3 lg:py-6">
        <div className="container mx-auto px-3 xl:px-14 2xl:max-w-7xl">
          <nav className="flex justify-between items-center px-4 py-3 lg:px-5 lg:py-4 rounded-full backdrop-blur-md text-sm sm:text-base bg-background/60 border border-default-100">
            <a href="/" title="Homepage" aria-label="Homepage">
              <img
                src={profile_pic.src}
                width={30}
                height={30}
                loading="eager"
                className="aspect-square"
                alt="Mohamad Kholid Bughowi"
              />
            </a>
            <div className="hidden md:flex items-center gap-2">
              {links.map((link) => (
                <a
                  key={`${link.title}_${link.path}`}
                  href={link.path}
                  className="cursor-pointer text-foreground/70 px-1 py-0.5 font-bold transition-colors duration-300 hover:text-primary"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <button
              type="button"
              aria-label="Open Mobile Menu"
              title="Open Mobile Menu"
              className="md:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Mobile menu"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden z-50 flex flex-col items-center justify-center fixed right-0 left-0 bottom-0 top-0 bg-background/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="p-3 border border-default-100 rounded-lg flex flex-col gap-5 bg-background shadow-lg"
            >
              <ul className="flex items-center gap-2 justify-center">
                {links.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-lg"
                  >
                    <a
                      href={link.path}
                      className="hover:text-primary transition-colors"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col items-center justify-center gap-2">
                <ul className="flex items-center gap-2 justify-center">
                  {socialMediaLinks.map((social, index) => (
                    <motion.li
                      key={social.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <a
                        href={social.href}
                        rel="noreferrer"
                        target="_blank"
                        title={social.title}
                        className="flex items-center gap-1 font-bold transition-colors hover:text-primary"
                        aria-label={social.title}
                      >
                        {/* Social icons remain the same */}
                        {social.title === "github" && (
                          <svg
                            role="img"
                            aria-label="github"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        )}
                        {social.title === "x" && (
                          <svg
                            role="img"
                            aria-label="x"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        )}
                        {social.title === "linkedin" && (
                          <svg
                            role="img"
                            aria-label="linkedin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <button
              type="button"
              aria-label="Close Mobile Menu"
              title="Close Mobile Menu"
              className="p-1 mt-3 rounded-full border border-default-100 w-fit shadow-lg"
              onClick={() => setOpenMenu(false)}
            >
              <svg
                role="img"
                aria-label="Close Mobile Menu"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-x"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { NavbarMenu, type NavbarProps, type NavbarLink };
