import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  MapPin,
  Languages,
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import profileImage from "./assets/profile.png";
import quoteImage from "./assets/quote.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PortfolioWebsiteStarter() {
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web Development",
      summary:
        "A personal portfolio website designed to present my profile, technical skills, and project work in a clear and professional format. It focuses on clean structure, responsive design, and straightforward navigation for recruiters and collaborators.",
      impact: [
        "Built to strengthen online presence",
        "Responsive and recruiter-friendly layout",
        "Showcases skills, profiles, and project work",
      ],
      stack: ["React.js", "JavaScript", "HTML", "CSS"],
      liveLink: "#",
      githubLink: "https://github.com/VigneshK18",
    },
    {
      title: "Full Stack Web Application",
      category: "Full Stack Project",
      summary:
        "A full stack application concept built using modern web technologies to handle both frontend interaction and backend logic. The project demonstrates my ability to connect user interfaces with APIs and database operations.",
      impact: [
        "Demonstrates frontend and backend integration",
        "Uses database-driven workflow",
        "Strengthened practical full stack development skills",
      ],
      stack: ["React.js", "Node.js", "MongoDB", "MySQL"],
      liveLink: "#",
      githubLink: "https://github.com/VigneshK18",
    },
    {
      title: "Java Problem Solving Practice",
      category: "Programming Practice",
      summary:
        "A collection of Java-based coding solutions focused on logic building, data structures, and problem solving. This work reflects my consistency in improving programming fundamentals and writing clean solutions.",
      impact: [
        "Improved problem-solving consistency",
        "Strengthened coding fundamentals",
        "Built confidence in Java programming",
      ],
      stack: ["Java", "DSA", "Problem Solving"],
      liveLink: "https://leetcode.com/u/c4FHezJiGI/",
      githubLink: "https://github.com/VigneshK18",
    },
  ];

  const technicalSkills = {
    languages: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    frontend: ["React.js", "HTML", "CSS", "JavaScript"],
    backend: ["Node.js","Express.js"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel"],
  };

  const skillIcons = {
  languages: Languages,
  frontend: Monitor,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

  const strengths = [
    "Willingness to learn",
    "Consistency",
    "Problem solving",
    "Adaptability",
    "Teamwork",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-neutral-100">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 16, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-32 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -12, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Kadiyala Vignesh
            </p>
            <p className="text-xs text-neutral-500">
              Software Developer Portfolio
            </p>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#work" className="transition duration-300 hover:text-cyan-200">
              Projects
            </a>
            <a href="#about" className="transition duration-300 hover:text-cyan-200">
              About
            </a>
            <a href="#skills" className="transition duration-300 hover:text-cyan-200">
              Skills
            </a>
            <a href="#contact" className="transition duration-300 hover:text-cyan-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <motion.section
          className="mx-auto grid max-w-6xl gap-10 px-6 pt-20 pb-10 md:grid-cols-[1.3fr_0.7fr] md:pt-28 md:pb-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-400"
            >
              Software Developer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl"
            >
              I build responsive web applications and practical software solutions.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300"
            >
              I am a B.Tech Computer Science Engineering student at MBU, Tirupati,
              with a strong passion for software development and modern web
              technologies. I have developed skills in Java, Python, JavaScript,
              React.js, Node.js, MySQL, and MongoDB, and I enjoy using these
              technologies to build clean, responsive, and user-friendly
              applications. I am highly interested in learning new tools,
              exploring practical solutions, and improving my problem-solving
              skills through real-world projects and continuous practice. With
              consistency, adaptability, and a strong willingness to grow, I aim
              to strengthen my technical foundation and gain valuable industry
              experience. My goal is to become a skilled software developer who
              can create efficient, meaningful, and impactful solutions that solve
              real-world problems effectively.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#work"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300 to-blue-300 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.28 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-black/20 hover:border-cyan-300/20 hover:shadow-cyan-500/10"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <motion.img
                src={profileImage}
                alt="Kadiyala Vignesh"
                className="h-[360px] w-full object-cover object-top"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.45 }}
              />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-neutral-400">
              Profile Snapshot
            </p>
            <div className="mt-4 space-y-5 text-sm leading-7 text-neutral-300">
              <div>
                <p className="font-medium text-white">Education</p>
                <p>
                  B.Tech in Computer Science Engineering at Mohan Babu University,
                  Tirupati.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Career Goal</p>
                <p>
                  To begin my career as a software developer and build real-world
                  applications with strong technical foundations.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Languages</p>
                <p>English, Hindi, Telugu</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-4 md:pb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-2xl shadow-black/20 hover:border-cyan-300/20 hover:shadow-cyan-500/10"
          >
            <motion.img
              src={quoteImage}
              alt="Inspirational quote banner"
              className="h-[220px] w-full object-cover md:h-[320px]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.45 }}
            />
          </motion.div>
        </motion.section>

        <section id="work" className="mx-auto max-w-6xl px-6 pt-4 pb-8 md:pt-6 md:pb-14">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                Selected Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Projects that reflect my development journey
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-neutral-400">
              These projects demonstrate my interest in web development, full
              stack implementation, and problem solving.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-xl shadow-black/20 hover:border-cyan-300/20 hover:from-cyan-500/[0.08] hover:to-blue-500/[0.05] hover:shadow-cyan-500/10 md:grid-cols-[1.2fr_0.8fr] md:p-8"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -2 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-slate-950/55">
                  <p className="text-sm font-medium text-white">Highlights</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
                    {project.impact.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              About
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              A focused learner building toward software development
            </h2>
            <p className="mt-6 leading-8 text-neutral-300">
              I am Kadiyala Vignesh, a Computer Science Engineering student with a
              strong interest in software development and web technologies. I
              enjoy building practical applications, learning new tools, and
              improving my problem-solving ability through consistent hands-on
              practice.
            </p>
            <p className="mt-4 leading-8 text-neutral-300">
              My current goal is to grow into a capable software developer by
              working on real projects, strengthening my technical foundation, and
              contributing effectively in professional development environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-xl shadow-black/20 hover:border-cyan-300/20 hover:shadow-cyan-500/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Core Strengths
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {strengths.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-neutral-300">
              <p>
                I am comfortable working with both frontend and backend
                fundamentals and I am steadily expanding my skills through
                projects, coding practice, and continuous learning.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-8 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Technical stack and tools
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(technicalSkills).map(([category, items], index) => {
              const Icon = skillIcons[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-cyan-300" />
                    <h3 className="text-lg font-semibold capitalize text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -2 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-xl shadow-black/20 hover:border-cyan-300/20 hover:shadow-cyan-500/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Education
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              B.Tech in Computer Science Engineering
            </h3>
            <p className="mt-3 leading-7 text-neutral-300">
              Mohan Babu University, Tirupati
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-xl shadow-black/20 hover:border-cyan-300/20 hover:shadow-cyan-500/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Profiles
            </p>
            <div className="mt-4 flex flex-col gap-4 text-sm text-neutral-300">
              <motion.a
                href="https://www.linkedin.com/in/vignesh-kadiyala"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 transition duration-300 hover:text-cyan-200"
              >
                <Linkedin size={18} className="text-cyan-300" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/VigneshK18"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 transition duration-300 hover:text-cyan-200"
              >
                <Github size={18} className="text-cyan-300" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/c4FHezJiGI/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 transition duration-300 hover:text-cyan-200"
              >
                <Code2 size={18} className="text-cyan-300" />
                <span>LeetCode</span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-8 shadow-2xl shadow-black/20 hover:border-cyan-300/20 hover:shadow-cyan-500/10 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Let’s connect
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
              I am open to software development opportunities, internships, and
              collaborative project work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="mailto:vignesh.kadiyala18@gmail.com"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition"
              >
                <Mail size={18} />
                <span>vignesh.kadiyala18@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:8886527898"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Phone size={18} className="text-cyan-300" />
                <span>8886527898</span>
              </motion.a>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <MapPin size={18} className="text-cyan-300" />
                <span>Tirupati</span>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}