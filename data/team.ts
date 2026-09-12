export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  description: string;
  initials: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Wazir Afzali",
    role: "Web Developer & Team Lead",
    specialty: "Web Development",
    description:
      "I lead the team, communicate with clients, manage projects, and build modern websites and web applications.",
    initials: "WA",
  },

  {
    name: "Android Developer",
    role: "Android Developer",
    specialty: "Android Development",
    description:
      "Responsible for building reliable and user-friendly Android applications for businesses, startups, and custom projects.",
    initials: "AD",
  },

  {
    name: "iOS Developer",
    role: "iOS Developer",
    specialty: "iOS Development",
    description:
      "Focused on developing professional iPhone and iPad applications with clean interfaces and reliable performance.",
    initials: "ID",
  },

  {
    name: "Video Editor",
    role: "Professional Video Editor",
    specialty: "Video Editing",
    description:
      "Handles professional video editing for social media, advertisements, short-form content, and business videos.",
    initials: "VE",
  },
];

export const teamInfo = {
  brandName: "Wazir Afzali & Team",

  tagline:
    "A specialized digital team for web development, Android, iOS, and professional video editing.",

  shortDescription:
    "I lead a focused team where every project is handled by the right specialist — from web and mobile development to professional video editing.",

  availability: "Available for new client projects",
};