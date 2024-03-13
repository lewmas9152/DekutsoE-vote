import "./Homepage.css";
import facebook from "/assets/facebook.svg";
import transparent from "/assets/transparent.svg";
import secure from "/assets/secure.svg";
import verified from "/assets/verified.svg";
import twitter from "/assets/twitter.svg";
import instagram from "/assets/instagram.svg";
import linkedin from "/assets/linkedin.svg";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <main>
      <div className="homepage">
        <div className="homeTop">
          <div className="topHomepage">
            <h2 className="titleHome">
              <div className="stroke"></div>
              DekutsoE-Vote:
              <span className="blueText">Modernizing Elections</span>
            </h2>
            <p>
              Revolutionalising the voting experience by creating a safe and
              more secure space for carrying out school elections
            </p>
          </div>
          <section className="slogan">
            <div className="mSlogan transparent">
              <img src={transparent} alt="tIcon" className="sloganIcon" />
              <h3>Transparent</h3>
              <p>
                Dekutso-EVoting ensures transparency by providing real-time
                updates on the voting process
              </p>
            </div>

            <div className="mSlogan secure">
              <img src={secure} alt="sIcon" className="sloganIcon" />
              <h3>Secure</h3>
              <p>
                Dekutso-EVoting prioritizes security by employing encryption
              </p>
            </div>

            <div className="mSlogan credible">
              <img src={verified} alt="tIcon" className="sloganIcon" />
              <h3>Credible</h3>
              <p>
                Our system upholds credibility by implementing robust
                verification measures, ensuring that only eligible voters can
                participate
              </p>
            </div>
          </section>
        </div>

        <Testimonials />

        <section className="contacts">
          <div className="lined-text">
            <div className=" line left"></div>
            <h3>Contact us</h3>
            <div className="line right"></div>
          </div>

          <div className="socials">
            <a href="#" className="contLink">
              <img src={facebook} alt="" className="logoIcon" />
            </a>
            <a href="#" className="contLink">
              <img src={twitter} alt="" className="logoIcon" />
            </a>
            <a href="#" className="contLink">
              <img src={linkedin} alt="" className="logoIcon" />
            </a>

            <a href="#" className="contLink">
              <img src={instagram} alt="" className="logoIcon" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homepage;
