export type SocialMediaId = "github" | "x" | "linkedin";

export interface SocialMediaLink {
  id: SocialMediaId;
  label: string;
  username: string;
  href: string;
  iconPath: string;
}

export const SOCIAL_MEDIA = {
  github: {
    id: "github",
    label: "GitHub",
    username: "albugowy15",
    href: "https://github.com/albugowy15",
    iconPath:
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  x: {
    id: "x",
    label: "X",
    username: "bughowy",
    href: "https://x.com/bughowy",
    iconPath:
      "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.598-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.293 19.493h2.039L6.486 3.24H4.298l13.31 17.406Z",
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    username: "Mohamad Kholid Bughowi",
    href: "https://www.linkedin.com/in/bughowi/",
    iconPath:
      "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.1 20.45H3.55V9H7.1v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z",
  },
} as const satisfies Record<SocialMediaId, SocialMediaLink>;

export const SOCIAL_MEDIA_LINKS: readonly SocialMediaLink[] =
  Object.values(SOCIAL_MEDIA);

export const CV_DOCUMENT_URL =
  "https://drive.google.com/file/d/1V5vUaofRneAJPGW9VgErhloWXNyu8vV4/view?usp=sharing";
