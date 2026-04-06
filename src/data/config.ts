const config = {
  title: "Rushikesh Gawande | Full Stack Developer",
  description: {
    long: "Explore the portfolio of Rushikesh Gawande, a full-stack developer specializing in modern web development, cloud fundamentals, and AI-driven features. Discover my latest work including CRM systems, e-commerce platforms, and full-stack applications. Let's build something amazing together!",
    short:
      "Discover the portfolio of Rushikesh Gawande, a full-stack developer creating robust and maintainable software solutions.",
  },
  keywords: [
    "Rushikesh Gawande",
    "portfolio",
    "full-stack developer",
    "software engineer",
    "web development",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
    "cloud development",
    "AI integration",
  ],
  author: "Rushikesh Gawande",
  email: "rushikeshgawande8080@gmail.com",
  site: "https://rushikeshgawande.site",

  // for github stars button
  githubUsername: "Rushi-creator",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/rushikesh-gawande-104395257",
    instagram: "https://www.instagram.com/rushikesh_gawande_8080",
    facebook: "",
    github: "https://github.com/Rushi-creator",
  },
};
export { config };
