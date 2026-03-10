import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Manav Rachna International Institute</h5>
              </div>
              <h3>2018-2022</h3>
            </div>
            <p>
              Focused on Data Structures, Algorithms, Machine Learning, and Web Development.
              Graduated with a CGPA of 7.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer (Full Stack / Backend)</h4>
                <h5>TechChefz</h5>
              </div>
              <h3>2022-NOW</h3>
            </div>
            <div className="career-details-list">
  <p>
    Architected and optimized scalable backend services using Node.js, NestJS, and TypeScript, reducing API latency by 35%. Built secure authentication and authorization systems with JWT, OAuth2, and RBAC while integrating third-party platforms such as Razorpay, Google DV360, Magento, and Strapi to automate workflows and improve payment success rates by 25%. Improved system performance through Redis caching, BullMQ queues, and background processing, increasing efficiency by 30%. Optimized MongoDB and PostgreSQL queries for faster data retrieval and reliability, implemented CI/CD pipelines with GitHub Actions and Docker to accelerate deployments, and developed analytics dashboards using Google DV360 APIs. Collaborated closely with React.js and Next.js teams to deliver scalable full-stack solutions for enterprise clients including Club Mahindra and Rocksport.
  </p>
</div>
          </div>
        </div>
        <div className="resume-section-link">
          <a
            href="https://drive.google.com/file/d/1w9fy0y-s4tQuppU7qNOfQpTQQHB2hMii/view?usp=sharing"
            target="_blank"
            className="resume-download-btn"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
