import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frameImage from './images/FrameWeb.png';
import cvData from './data/cvData';
import achievementsData from './data/achivementsData';
import portfolioProjects from './data/portfolioData';

function CVSummary() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

    const cardVariants = {
    enter: { opacity: 0, y: 20, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const nextAchievement = achievementsData[(currentIndex + 1) % achievementsData.length];

  const achievement = achievementsData[currentIndex];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % portfolioProjects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      (prevIndex - 1 + portfolioProjects.length) % portfolioProjects.length
    );
  };

    const flipVariants = {
    enter: { rotateY: 90, opacity: 0 },
    center: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -90, opacity: 0 },
  };

  const currentProject = portfolioProjects[currentProjectIndex];

  return (
    <div className="bg-[#1A3A29] min-h-screen">
      {/* Nagłówek */}
      <header className="bg-[#0B2B18] text-[#F5EEDC] py-4 shadow-lg fixed w-full z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Julia Wróbel</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#cv-summary" className="hover:underline">CV Summary</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">Skills</a>
            </li>
            <li>
              <a href="#achievements" className="hover:underline">Achievements</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sekcja CV Summary */}
      <section
        id="cv-summary"
        className="relative flex items-center justify-center pt-32 min-h-screen"
        style={{ padding: "5rem" }}
      >
          <div
    className="border-frame relative max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden w-full"
    style={{
      padding: "1rem",
      minHeight: "500px",  // stała wysokość ramki
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#1A3A29"//"#F5EEDC" // lub inny kolor tła środkowej części ramki
    }}
        >
            <motion.h2
              className="text-4xl font-extrabold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ color: "#F5EEDC", marginTop: "-20px" }}
            >
              CV Summary
            </motion.h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ textAlign: "left" }}
            >
              {cvData.map((entry, index) => (
                <motion.div
                  key={index}
                  className="bg-[#F5EEDC] bg-opacity-90 p-6 rounded-xl shadow-lg relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: "#1A3A29" }}
                >
                  {entry.year && (
                    <div
                      className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#152f22] text-[#F5EEDC] w-10 h-10 flex items-center justify-center rounded-full shadow-md"
                      style={{ fontWeight: "bold", width: "45px", height: "100px", borderRadius: "999px" }}
                    >
                      {entry.year}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold ml-3 mb-2">{entry.title || entry.section}</h3>
                  {entry.details && <p className="mb-2 ml-4">{entry.details}</p>}
                  {entry.extra && <p className="italic text-sm ml-4">{entry.extra}</p>}
                  {entry.content && Array.isArray(entry.content) && (
                  <div className="grid grid-cols-1 gap-2 mt-4 text-left">
                    {entry.content.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                </motion.div>
              ))}
            </div>
          </div>
      </section>

  <section
    id="portfolio"
    className="relative flex items-center justify-center min-h-screen px-6 pt-16"
    style={{ padding: "2rem" }}   
  >
  <div
    className="border-frame relative max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden w-full"
    style={{
      padding: "3rem",
      minHeight: "500px",  // stała wysokość ramki
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#1A3A29"//"#F5EEDC" // lub inny kolor tła środkowej części ramki
    }}
  >
    {/* Beżowy panel wewnątrz */}
    <div
      className="rounded-3xl shadow-inner overflow-hidden"
      style={{
        backgroundColor: "#F5EEDC",
        width: "100%",
        maxWidth: "1000px",
        minHeight: "500px",
        padding: "3rem",
        perspective: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Nagłówek portfolio */}
      <motion.h2
        className="text-4xl font-extrabold mb-4 text-center text-[#1A3A29]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Portfolio
      </motion.h2>

      <div className="flex items-center justify-between">
        {/* Przycisk poprzedni */}
        <button
          onClick={prevProject}
          className="text-[#F5EEDC] bg-[#0D2A1C] p-3 rounded-full shadow-lg hover:bg-[#184E36]"
        >
          &lt;
        </button>

{/* Animowana zawartość projektu */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentProjectIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-6"
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }} // żeby obrót 3D się dobrze renderował
              >                          {/* Lewa kolumna: tekst + jedno zdjęcie */}
                <div className="text-[##0D2A1C] flex flex-col">
                  <h3 className="text-3xl font-bold mb-2">{currentProject.title}</h3>
                  <p className="italic font-semibold mb-4">{currentProject.date}</p>
                  <p className="mb-6">{currentProject.description}</p>
                  {currentProject.images[0] && (
                    <img
                      src={currentProject.images[0]}
                      alt={`${currentProject.title} main`}
                      className="rounded-xl shadow-lg object-cover w-full max-h-64"
                      style={{ aspectRatio: "16 / 9" }}
                    />
                  )}
                </div>

                {/* Prawa kolumna: dwa zdjęcia jedno pod drugim */}
                <div className="flex flex-col gap-4">
                  {currentProject.images.slice(1, 3).map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${currentProject.title} image ${i + 2}`}
                      className="rounded-xl shadow-lg object-cover w-full max-h-48"
                      style={{ aspectRatio: "16 / 9" }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

        {/* Przycisk następny */}
        <button
          onClick={nextProject}
          className="text-[#F5EEDC] bg-[#0D2A1C] p-3 rounded-full shadow-lg hover:bg-[#184E36]"
        >
          &gt;
        </button>
      </div>
      </div>
    </div>
  </section>


      {/* Sekcja Achievements */}
      <section
        id="achievements"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-[#1A3A29] text-[#F5EEDC]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Achievements</h2>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <AnimatePresence mode="wait" initial={false}>
              {[achievement, nextAchievement].map((achieve, index) => (
                <motion.div
                  key={achieve.title}
                  className="bg-[#081e10] text-[#F5EEDC] p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full h-80"
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.1 }}
                >
                  <img
                    src={achieve.image}
                    alt={achieve.title}
                    className="rounded-lg shadow-md mb-4 object-cover w-full h-40"
                  />
                  <h3 className="text-2xl font-bold mb-2">{achieve.title}</h3>
                  <p className="text-lg">{achieve.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 bg-[#0B2B18] rounded-full hover:bg-[#2B7A4B]"
              aria-label="Previous achievement"
            >
              &lt;
            </button>

            <button
              onClick={next}
              className="p-3 bg-[#0B2B18] rounded-full hover:bg-[#2B7A4B]"
              aria-label="Next achievement"
            >
              &gt;
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {achievementsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#F5EEDC] scale-125"
                    : "bg-[#0B2B18] hover:bg-[#2B7A4B]"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to achievement ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer
        id="contact"
        className="bg-[#0B2B18] text-[#F5EEDC] py-6 text-center"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-2">Contact</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +48 123 456 789</p>
          <p>
            LinkedIn: {" "}
            <a href="https://linkedin.com" className="underline">
              Your LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CVSummary;
