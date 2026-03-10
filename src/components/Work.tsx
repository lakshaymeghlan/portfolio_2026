import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Radar",
    category: "AI Startup Intelligence Platform",
    tools: "Next.js (App Router), Node.js, MongoDB, Tailwind CSS, RAG, Agentic AI, REST APIs",
    description: "AI startup intelligence platform that filters ecosystem noise by aggregating emerging AI tools, research, and startup launches. Built automated data pipelines to continuously sync and structure information.",
    image: "/images/radar.png",
    demo: "https://radar-ai-launch.vercel.app/",
    code: "https://github.com/lakshaymeghlan/Radar",
  },
  {
    title: "OS Discovery",
    category: "AI-Powered Open-Source Platform",
    tools: "Next.js, Node.js, MongoDB, DeepSeek API, JWT, Microservices",
    description: "AI-powered open-source discovery platform with real-time GitHub integration, RBAC, background sync jobs, caching, and modular microservice architecture.",
    image: "/images/os-discovery.png", 
    demo: "https://opn-source.netlify.app/",
    code: "https://github.com/lakshaymeghlan/open-source",
  },
  {
    title: "Predictor AI",
    category: "AI/ML Market Prediction Dashboard",
    tools: "Python, FastAPI, LightGBM, pandas, Next.js, ML, Real-time OHLCV",
    description: "Full-stack AI/ML market prediction dashboard using Python and Next.js. Integrates real-time OHLCV data with model inference, caching, and backtesting.",
    image: "/images/predictor.png",
    demo: "https://www.youtube.com/watch?v=yt7MaFmx_Eg",
    code: "https://github.com/lakshaymeghlan/predictior",
  },
  {
    title: "Price Scout",
    category: "E-commerce Scorer & Comparison",
    tools: "Node.js, Cheerio, Web Scraping, Real-time, E-commerce",
    description: "Web scraper that compares real-time product prices across Amazon, Flipkart, and other platforms. Features brand, price, and rating filters.",
    image: "/images/pricescout.png",
    demo: "https://price-scout-seven.vercel.app/",
    code: "https://github.com/lakshaymeghlan/price-scout",
  },
  {
    title: "AI Resume Analyzer",
    category: "LLM-Powered Resume Optimizer",
    tools: "Python, FastAPI, Next.js, LangGraph, LLM, MongoDB",
    description: "Analyzes resumes against job descriptions, providing match scores, skill extraction, ATS optimization, and targeted improvement suggestions.",
    image: "/images/resume.png",
    demo: "https://www.youtube.com/watch?v=63rTAkU9mdY",
    code: "https://github.com/lakshaymeghlan/resume-analyze",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-header">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="project-title-area">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      <div className="carousel-details">
                        <p className="project-description">{project.description}</p>
                        
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>

                        <div className="project-actions">
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-project btn-demo"
                          >
                            Live Demo
                          </a>
                          <a 
                            href={project.code} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-project btn-code"
                          >
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                      <div className="image-overlay"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
