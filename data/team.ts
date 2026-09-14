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
      "Leads AppFolor, communicates with clients, coordinates projects, and develops modern websites and web applications.",
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
  brandName: "AppFolor",

  tagline:
    "Web, mobile, and video solutions built for modern businesses.",

  shortDescription:
    "AppFolor is a specialized digital team for web development, Android applications, iOS applications, and professional video editing.",

  availability:
    "Available for new client projects",
};