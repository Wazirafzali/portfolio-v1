export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  description: string;
  initials: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Web Development",
    role: "Websites & Web Applications",
    specialty: "Web Development",
    description:
      "Builds modern websites and web applications with a focus on usability, responsive design, and maintainable development.",
    initials: "WD",
  },
  {
    name: "Android Development",
    role: "Android Developer",
    specialty: "Android Development",
    description:
      "Responsible for building reliable and user-friendly Android applications for businesses, startups, and custom projects.",
    initials: "AD",
  },
  {
    name: "iOS Development",
    role: "iOS Developer",
    specialty: "iOS Development",
    description:
      "Focused on developing professional iPhone and iPad applications with clean interfaces and reliable performance.",
    initials: "ID",
  },
  {
    name: "Video Editing",
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