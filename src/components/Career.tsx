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
                <h4>Full-Stack Developer</h4>
                <h5>Independent / Academic Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and maintained full-stack applications using the MERN stack. Debugged and resolved performance issues, reducing load times. Led team discussions and balanced academic work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>KIIT University</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Relevant coursework in Data Structures, Algorithms, and Software Development. Current CGPA: 9.0. Active participant in cultural, music, and sports events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (12th Grade)</h4>
                <h5>Delhi Public School Ruby Park</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed 12th Grade with a final score of 84.6%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School (10th Grade)</h4>
                <h5>Don Bosco Park Circus</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Completed 10th Grade with a final score of 86%. Volunteer leadership experience coordinating school events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
