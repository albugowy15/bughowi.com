import { motion, useReducedMotion } from "motion/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/Dialog";
import { SOCIAL_MEDIA_LINKS } from "@/lib/constant";

interface NavbarLink {
  path: string;
  title: string;
}

interface NavbarProps {
  links: NavbarLink[];
}

const NavbarMenu: React.FC<NavbarProps> = ({ links }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label="Open Mobile Menu"
            title="Open Mobile Menu"
            className="md:hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-md bg-transparent border-none"
          showCloseButton={false}
        >
          <div className="p-3 border rounded-lg flex flex-col w-fit mx-auto gap-5 bg-background shadow-lg">
            <ul className="flex items-center gap-2 justify-center">
              {links.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { delay: 0, duration: 0 }
                      : { delay: index * 0.1 }
                  }
                  className="text-lg"
                >
                  <a
                    href={link.path}
                    className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col items-center justify-center gap-2">
              <ul className="flex items-center gap-2 justify-center">
                {SOCIAL_MEDIA_LINKS.map((social, index) => (
                  <motion.li
                    key={social.id}
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { delay: 0, duration: 0 }
                        : { delay: 0.3 + index * 0.1 }
                    }
                  >
                    <a
                      href={social.href}
                      rel="noreferrer"
                      target="_blank"
                      title={social.label}
                      className="flex items-center gap-1 rounded-sm font-bold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`${social.label}: ${social.username}`}
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className={`social-icon social-icon-${social.id}`}
                        viewBox="0 0 24 24"
                      >
                        <path d={social.iconPath} />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <DialogClose asChild>
            <button
              type="button"
              aria-label="Close Mobile Menu"
              title="Close Mobile Menu"
              className="p-1 mt-3 rounded-full mx-auto border w-fit shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg
                aria-hidden="true"
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
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { NavbarMenu, type NavbarProps, type NavbarLink };
