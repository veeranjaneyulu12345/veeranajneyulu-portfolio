import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaSun,
  FaMoon,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiPython, SiTensorflow, SiAmazonwebservices, SiDocker, SiKubernetes,
  SiReact, SiMysql, SiGit, SiLinux, SiJenkins, SiJavascript,
  SiNodedotjs, SiTerraform, SiAnsible, SiTailwindcss
} from "react-icons/si";

import housePredictionImg from './assets/house_prediction.png';
import movieRecommenderImg from './assets/movie_recommender.png';
import diabetesPredictionImg from './assets/diabetes_prediction.png';
import vlsiSimulationImg from './assets/vlsi_simulation.png';
import profileImg from './assets/veeranajneyulu.png.jpeg';

const resumeUrl =
  "https://drive.google.com/file/d/1bhu8eD36k1Mi9JkGoY7m7gZDnvToy_-B/view?usp=drivesdk";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "internships", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "extra", label: "Activities" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "AWS", icon: <SiAmazonwebservices className="text-orange-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-600" /> },
  { name: "Terraform", icon: <SiTerraform className="text-purple-600" /> },
  { name: "Ansible", icon: <SiAnsible className="text-red-600" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Linux", icon: <SiLinux className="text-gray-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch { }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-500">
      <BackgroundDecoration />

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Veeranjaneyulu K
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {n.label}
              </button>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              <FaFilePdf /> Resume
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <SocialIcon href="https://github.com/veeranjaneyulu12345" icon={<FaGithub />} />
              <SocialIcon href="https://www.linkedin.com/in/veeranjaneyulu-kammanetula-178a24250/" icon={<FaLinkedin />} />
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:scale-110 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
            </button>

            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main id="home" className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="flex flex-col items-center text-center py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800"
          >
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I’m <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Veeranjaneyulu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            Cloud Solutions Architect | DevOps | Software Development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex items-center gap-2"
            >
              View My Work <FaChevronRight className="text-xs" />
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-all flex items-center gap-2"
            >
              <FaFilePdf /> Download CV
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-5 gap-12 items-center"
          >
            <div className="md:col-span-3">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">About Me</motion.h2>
              <motion.div variants={itemVariants} className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                <p>
                  I’m a Cloud Solutions Architect at <strong className="text-slate-900 dark:text-white">Larsen & Toubro Vyoma</strong>,
                  specializing in CMP (Cloud Management Platform) portal development.
                </p>
                <p>
                  With a background spanning Machine Learning, Data Science, and Organic Semiconductor Fabrication,
                  I enjoy building scalable cloud-native systems, automation pipelines, and AI-driven features.
                </p>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="md:col-span-2 aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
              <div className="w-full h-full rounded-[22px] bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center">
                <img src={profileImg} alt="Veeranjaneyulu K" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
            <div className="max-w-4xl mx-auto">
              <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h4 className="text-2xl font-bold">National Institute of Technology (NIT) Andhra Pradesh</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mt-1">Bachelor of Technology in Electronics and Communication Engineering (ECE)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                  Graduated
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h3 className="text-3xl font-bold mb-12 text-center">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skills.map((s) => (
                <motion.div key={s.name} variants={itemVariants} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center gap-4 text-center">
                  <div className="text-4xl">{s.icon}</div>
                  <span className="font-semibold text-sm">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* INTERNSHIPS / EXPERIENCE */}
        <section id="internships" className="py-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Experience & Internships</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                company: "Larsen & Toubro Vyoma",
                role: "Cloud Solutions Architect",
                date: "Present",
                desc: "Working on the CMP (Cloud Management Platform) portal development.",
              },
              {
                company: "IIT Madras",
                role: "Organic Semiconductor Fabrication Intern",
                date: "2023",
                desc: "Worked on Organic Thin-Film Transistors and circuit simulation.",
              },
              {
                company: "Null Class",
                role: "Machine Learning Developer Intern",
                date: "2022",
                desc: "Developed an Automatic Age and Gender Detection model from visual data.",
              },
              {
                company: "Exposys Data Labs",
                role: "Data Science Intern",
                date: "Previous",
                desc: "Built an Early Prediction and Diagnosis of Diabetes system.",
              },
              {
                company: "Bharat Intern",
                role: "Machine Learning Intern",
                date: "Previous",
                desc: "Developed a Movie Recommendation System.",
              },
            ].map((it, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex-[1.5]">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">{it.date}</span>
                  <h4 className="text-xl font-bold mt-1">{it.role}</h4>
                  <p className="text-slate-900 dark:text-slate-100 font-medium">{it.company}</p>
                </div>
                <div className="flex-[2] text-slate-600 dark:text-slate-400 leading-relaxed flex items-center">
                  {it.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Selected Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "House Price Prediction",
                tech: "Decision Tree, Python",
                desc: "Built a model to predict house prices based on area, years, and historical data.",
                image: housePredictionImg,
                link: "https://github.com/veeranjaneyulu12345/Bharath-Internship",
              },
              {
                title: "Movie Recommendation System",
                tech: "Python, Collaborative Filtering",
                desc: "Movie recommender as part of internship project. Personalized recommendation engine.",
                image: movieRecommenderImg,
                link: "https://github.com/veeranjaneyulu12345/Bharath-Internship-task2",
              },
              {
                title: "Early Prediction of Diabetes",
                tech: "ML, Data Science",
                desc: "Predict diabetes at an early stage based on symptoms using ML models.",
                image: diabetesPredictionImg,
                link: "https://github.com/veeranjaneyulu12345/project-1",
              },
              {
                title: "VLSI Circuit Simulation",
                tech: "Research, VLSI, Data Analysis",
                desc: "Organic Semiconductor Fabrication, Circuit simulation, Data Analysis, and Research. Worked on simulations.",
                image: vlsiSimulationImg,
                fallbackIcon: "🔌",
              },
            ].map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* EXTRA CURRICULAR */}
        <section id="extra" className="py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <h3 className="text-3xl font-bold mb-12 text-center">Extra-Curricular Activities</h3>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { title: "Joint Secretary", org: "ECE Association", icon: "🤝" },
                { title: "Executive Member", org: "Nature and Valued Education Club", icon: "🌱" },
                { title: "Executive Member", org: "AI and Robotics Club", icon: "🤖" },
              ].map((activity, idx) => (
                <motion.div key={idx} variants={itemVariants} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm text-center flex flex-col items-center justify-center gap-4">
                  <div className="text-5xl mb-2">{activity.icon}</div>
                  <h4 className="text-xl font-bold">{activity.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{activity.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-blue-600 text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h3 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Let's build something amazing together</h3>
            <p className="text-xl text-blue-100 mb-12 relative z-10 max-w-2xl mx-auto">
              Currently open to cloud, AI, and software development engagements. Drop a message!
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a href="mailto:kammanethulaveeranajneyulu@gmail.com" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:scale-105 transition-transform flex items-center gap-2">
                <FaEnvelope /> Get in Touch
              </a>
              <div className="flex items-center gap-3">
                <SocialIcon href="https://github.com/veeranjaneyulu12345" icon={<FaGithub className="text-2xl" />} invert />
                <SocialIcon href="https://www.linkedin.com/in/veeranjaneyulu-kammanetula-178a24250/" icon={<FaLinkedin className="text-2xl" />} invert />
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Veeranjaneyulu K
        </footer>
      </main>
    </div>
  );
}

function SocialIcon({ href, icon, invert }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`p-3 rounded-full ${invert ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'} transition-all flex items-center justify-center`}
    >
      {icon}
    </a>
  );
}

function ProjectCard({ title, tech, desc, image, fallbackIcon, link }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-md">{fallbackIcon}</div>
        )}
        {link && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <a href={link} target="_blank" rel="noreferrer" className="text-white font-bold flex items-center gap-2">
              View Project <FaChevronRight className="text-xs" />
            </a>
          </div>
        )}
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{tech}</span>
        <h4 className="text-2xl font-bold mt-2 mb-4">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{desc}</p>
      </div>
    </motion.article>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute right-0 mt-4 w-56 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-4 z-50"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="text-left px-4 py-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors"
                >
                  {n.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-colors"
              >
                <FaFilePdf /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
