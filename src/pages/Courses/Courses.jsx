import React from "react";
import "./Courses.scss";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses" id="courses">
      <div className="top">
        <span className="title">Our Programmes</span>
        <span className="subTitle">
          We offer a wide range of educational programmes using standard
          curriculums
        </span>
      </div>
      <div className="bottom">
        <div className="courseContainer">
          <div className="courseItem">
            <div className="top">
              <img
                src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt=""
              />
            </div>
            <div className="bottom">
              <span>Creche/Nursery(1-3)</span>
            </div>
          </div>
          <div className="courseItem">
            <div className="top">
              <img
                src="https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1.5x/cbeebies/prepare-first-day-primary-content.jpg "
                alt=""
              />
            </div>
            <div className="bottom">
              <span>Primary(1-6)</span>
            </div>
          </div>
          <div className="courseItem">
            <div className="top">
              <img
                src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1633352157/edinaschoolsorg/iornymvphqxjhq3w5nzg/EquitInclusCult.jpg"
                alt=""
              />
            </div>
            <div className="bottom">
              <span>Junior Secondary(1-3)</span>
            </div>
          </div>
          {/* <div className="courseItem">
            <div className="top">
              <img
                src="https://images.unsplash.com/photo-1591219233007-4ac041f8c2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="bottom">
              <span>Senior Secondary(1-3)</span>
            </div>
          </div> */}
        </div>
        <Link to="/courses">
          <button>View All Programmes</button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
