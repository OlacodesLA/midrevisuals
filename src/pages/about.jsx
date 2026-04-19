import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from "react-countup";
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2";
import PartnersSection from "@components/sections/Partners";
import AwardsSection from "@components/sections/Awards";
import Services4Section from "@components/sections/Services4";

const HistorySlider = dynamic(() => import("@components/sliders/History"), {
  ssr: false,
});
const Testimonial2Slider = dynamic(
  () => import("@components/sliders/Testimonial2"),
  { ssr: false }
);

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add("active");
    let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute("src", videoUrl);
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle={"About Us"}
        pageDesc={"We don’t just capture moments, we create memories."}
      />

      {/* Onovo About */}
      <section className="onovo-section gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-60">
                <div className="onovo-subtitle-1">
                  <span> Welcome to Midre Visuals </span>
                </div>
                <h2 className="onovo-title-2">
                  <span>
                    {" "}
                    We are a creative agency with purpose,
                    <br />
                    bringing your stories to life with lasting impact.
                  </span>
                </h2>
                <div className="onovo-text">
                  <p>
                    From the moment our company was founded, we have worked with
                    clients to transform ideas into bold brands and meaningful
                    digital experiences. Each project fuels our growth,
                    sharpening our craft and shaping visuals that leave a
                    lasting mark.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">
              {/* Image */}
              <img src="/images/onovo-about-logo.png" alt="" />
            </div>
          </div>

          {/* Numbers items */}
          <div className="row gap-row gap-bottom-100">
            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="6"
                >
                  <CountUp
                    end="6"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> + </div>
                <div className="label"> Years </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value="99"
                >
                  <CountUp
                    end="210"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> </div>
                <div className="label"> Completed projects </div>
              </div>
            </div>

            {/*number-item*/}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="onovo-counter">
                <div
                  className="num onovo-text-white js-counter"
                  data-end-value=""
                >
                  <CountUp
                    end="5"
                    duration={7}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="num-after onovo-text-white"> </div>
                <div className="label"> Specialists </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="onovo-video" data-onovo-overlay data-onovo-scroll>
            <div
              className="image"
              onClick={(e) => clickedVideoButton(e)}
              style={{ backgroundImage: "url(/images/hero-digital-1.jpg)" }}
            />
            <iframe
              className="js-video-iframe"
              data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            ></iframe>
            <div
              className="play onovo-circle-text"
              onClick={(e) => clickedVideoButton(e)}
            >
              <div className="arrow" />
              <div className="label onovo-text-black onovo-circle-text-label">
                {" "}
                Play Video - Play Video - Play Video -{" "}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">Our Mission</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Our mission is to craft powerful visual content that connects with
              people, tells your brand’s story, and delivers fresh, innovative
              results.
            </div>
          </div>

          {/* Description */}
          <div className="row gap-top-60">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase">What we do</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              Creative direction; We bring clarity, creativity and consistency
              to keep your brand focused and unforgettable.
            </div>
          </div>

          {/* Gallery */}
          <div className="row gap-top-100">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <a href="/images/posts1.jpg" className="mfp-image">
                <img src="/images/posts1-1024x683.jpg" alt="" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
              <a href="/images/posts2.jpg" className="mfp-image">
                <img src="/images/posts2-1024x683.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Services4Section services={props.services} />

      <AwardsSection />

      <HistorySlider />

      <Team2Section team={props.team} />

      <Testimonial2Slider />

      <PartnersSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
      services: allServices,
    },
  };
}
