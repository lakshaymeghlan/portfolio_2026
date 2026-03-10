import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const skills = [
    {
      title: "FRONTEND",
      subtitle: "Modern UI/UX & Web Apps",
      description: "Developing interactive, high-performance user interfaces using modern frameworks and responsive design principles.",
      tools: ["React.js", "Next.js", "TypeScript", "JavaScript", "Bootstrap", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      title: "BACKEND & SYSTEMS",
      subtitle: "Scalable Architecture & Cloud",
      description: "Building robust microservices, secure APIs, and automated CI/CD pipelines for production-ready enterprise applications.",
      tools: ["Node.js", "NestJS", "Python", "Redis / BullMQ", "MongoDB / Postgre", "Azure / Docker / CI-CD", "OpenAPI / JWT"],
    },
    {
      title: "AI & EMERGING TECH",
      subtitle: "AI Integration & Automation",
      description: "Leveraging LLMs, Vector Databases, and AI Agents to build intelligent systems and automate complex business workflows.",
      tools: ["Cursor / Antigravity", "Claude / Gemini / OpenAI", "LangChain / MCP", "Vector DBs", "n8n Automation"],
    }
  ];

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div className="do-h2">I DO</div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%" height="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {skills.map((skill, index) => (
            <div key={index} className="what-content what-noTouch">
              <div className="what-content-in">
                <h3>{skill.title}</h3>
                <h4>{skill.subtitle}</h4>
                <p>{skill.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {skill.tools.map((tool) => (
                    <div key={tool} className="what-tags">{tool}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
