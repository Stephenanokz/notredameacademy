import React from "react";
import "./AboutInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutInfo = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2400 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="AboutInfo">
      <Banner
        title="About Us"
        subTitle="Education with us means so much more"
      />
      <div className="aboutContainer">
        <div className="principal">
          <div className="image">
            <span className="title">Meet the Principal</span>
            <div className="imgContainer">
              <img src="img/pri.png" alt="principal" />
              <div className="principal-title">
                <span className="name">Rev. Sr. Maya K. Peters</span>
                <span className="honors">SND. Ph.D.</span>
              </div>
            </div>
          </div>
          <div className="caption">
            <span className="title">Meet the Principal</span>
            <p className="body">
              Rev. Sr. Maya K. Peters is a devoted member of the Sisters of
              Notre Dame De Namur congregation in Nigeria. With a deep
              commitment to education and faith, she serves as the esteemed
              principal of our school, where she embodies the congregation's
              values of compassion and excellence. Her leadership has
              transformed the school into a beacon of knowledge and moral
              development, fostering a nurturing environment where students
              thrive academically and spiritually. Sister Maya is a testament to
              the congregation's mission of empowering young minds and shaping
              future leaders.
            </p>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="schoolInfo">
          <div className="images">
            <span className="title">About Notre Dame Academy</span>
            <div className="imgsContainer">
              <div className="imgLg">
                <img src="img/s1.png" alt="" />
              </div>
              <div className="imgSmGroup">
                <img
                  src="https://gazettengr.com/wp-content/uploads/2020/09/Secondary-school-student.jpg"
                  alt=""
                  className="imgSm"
                />
                <img src="img/s3.png" alt="" className="imgSm" />
              </div>
            </div>
          </div>
          <div className="caption">
            <span className="title">About Notre Dame Academy</span>
            <p className="body">
              Notre Dame Academy is a boarding and day Secondary School for
              girls and boys. It is founded by the Sisters of Notre Dame de
              Namur, a Roman Catholic Religious Institution. The school formerly
              began September 22nd, 2008 as an off-shoot of the already existing
              Notre Dame Nursery / Primary School. This dream was brought to
              life, thanks to the demand made by some parents who wanted their
              children to continue with Notre Dame Education Legacy on the
              secondary level. The fifteen (15) pioneering students had a humble
              beginning: they shared the building and learning space with the
              Nursery / Primary section while the ground floor of the secondary
              school was under construction. On the 13th of September 2010, the
              students moved into the completed ground floor of the secondary
              school. The hostel for girls was officially opened on the 10th of
              September 2011 to boost the school's admission strength and it is
              witnessing steady increase. Notre Dame Academy, Awkunanaw is a
              pace-setting school. Over the years, it has become the delight of
              parents. Almost every parent now wants their child/children in the
              school. The reason is not far- fetched. The school is a testament
              to the mission of the Sisters of Notre Dame- ‘proclaiming the
              goodness of God'- through education.
            </p>
          </div>
        </div>
        <div className="mishVish">
          <div className="section top">
            <div className="image">
              <span className="title">Our Vision</span>
              <div className="imgContainer">
                <div className="imgBackdrop"></div>
                <img
                  src="https://data.unicef.org/wp-content/uploads/2018/07/20.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="caption">
              <span className="title">Our Vision</span>
              <p className="body">
                Goodness comes from God. Love comes from God. We are God’s
                creation and made in His image. It is His plan that we turn to
                Him from our independent self or rebellious self and be
                connected to Him. We teach our students to have a good
                relationship with God and strive to do God's will in order to
                produce good individuals to the society.
              </p>
            </div>
          </div>
          <div className="section bottom">
            <div className="image">
              <span className="title">Our Mission</span>
              <div className="imgContainer">
                <div className="imgBackdrop"></div>
                <img src="img/mv.png" alt="" />
              </div>
            </div>
            <div className="caption">
              <span className="title">Our Mission</span>
              <p className="body">
                Notre Dame Schools are Catholic independent institutions that
                prepare young people for life. We serve students of diverse
                academic abilities and religious, social, economic, and ethnic
                backgrounds. As schools owned and managed by the Sisters of
                Notre Dame de Namur, we strive to implement the educational
                philosophy of St. Julie Billiart, “teach your students whatever
                is necessary to equip them for life– temporal and eternal” along
                with the Nigeria Policy on Education which states that
                “education fosters the worth and development of the individual,
                for each individual’s sake, and for the general development of
                society.”
              </p>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="title">
            <span>Meet the administrative board</span>
          </div>
          <div className="body">
            <div className="adminItems">
              <div className="adminItem">
                <img
                  src="https://images.unsplash.com/photo-1588178454780-441fa5b99fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                  alt=""
                />
                <div className="details">
                  <span className="name">Mr. Raheem Iheanacho</span>
                  <span className="role">Vice principal</span>
                </div>
              </div>
              <div className="adminItem">
                <img
                  src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
                <div className="details">
                  <span className="name">Rev. Sr. Modesta Ochi</span>
                  <span className="role">Bursar</span>
                </div>
              </div>
              <div className="adminItem">
                <img
                  src="https://images.unsplash.com/photo-1575709091723-d92b0f14a631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80"
                  alt=""
                />
                <div className="details">
                  <span className="name">Dr. B. M. Chukwueze</span>
                  <span className="role">Dean of Studies</span>
                </div>
              </div>
              <div className="adminItem">
                <img src="img/1.png" alt="" />
                <div className="details">
                  <span className="name">Ms. Millie Nweke</span>
                  <span className="role">Procurator</span>
                </div>
              </div>
              <div className="adminItem">
                <img
                  src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="details">
                  <span className="name">Mr. Eddie C. Anochie</span>
                  <span className="role">Hostel Admin</span>
                </div>
              </div>
              <div className="adminItem">
                <img
                  src="https://images.unsplash.com/photo-1526387780285-2d05a3a97f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt=""
                />
                <div className="details">
                  <span className="name">Mrs. Amanda Obiajulu</span>
                  <span className="role">Head of Staff</span>
                </div>
              </div>
            </div>
            <div className="bodyBottom"></div>
          </div>
        </div>
        <div className="achievements">
          <div className="title">
            <span>Our Achievements</span>
          </div>
          <Carousel
            showDots={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            responsive={responsive}
          >
            <div className="achi-item">
              <img
                src="https://t3.ftcdn.net/jpg/01/69/35/54/360_F_169355433_lxpZ6GXHb1650pMnWek5u84x3RMMR6R3.jpg"
                alt=""
              />
              <span className="achi-title">Spelling Bee South-East Champs</span>
              <p className="body">
                Our school emerged triumphant in the South-East Nigeria Spelling
                Bee competition. It's a testament to our commitment to academic
                excellence and our students' outstanding linguistic skills.
                Proud moment for our institution! 🏆📚🌟
              </p>
            </div>
            <div className="achi-item">
              <img src="data:image/jpeg;base64,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" alt="" />
              <span className="achi-title">
                National Academic Excellence Award
              </span>
              <p className="body">
                Our secondary school has consistently ranked among the top
                educational institutions nationally, receiving the prestigious
                National Academic Excellence Award for outstanding academic
                performance and contributions to the educational field.
              </p>
            </div>
            <div className="achi-item">
              <img src="https://cdn-static.findly.com/wp-content/uploads/sites/1198/2020/06/2019-Community-Service-Award-Banner-Update.jpg" alt="" />
              <span className="achi-title">
                Community Outreach and Service Award
              </span>
              <p className="body">
                Recognized for our commitment to community engagement and social
                responsibility, our school received the Community Outreach
                and Service Award for impactful initiatives such as
                volunteering, environmental conservation, and supporting
                underprivileged communities.
              </p>
            </div>
            <div className="achi-item">
              <img src="img/achi.png" alt="" />
              <span className="achi-title">Innovation in STEM Education</span>
              <p className="body">
                With a focus on STEM (Science, Technology, Engineering, and
                Mathematics) education, our school has earned acclaim for
                innovative programs and achievements, such as winning regional
                robotics competitions, producing innovative science projects,
                and fostering a culture of technological literacy among
                students.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
