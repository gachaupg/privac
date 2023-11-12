import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const Content = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const handleClick1 = (e) => {
    e.preventDefault();
    if (show1) {
      setShow1(false);
    } else {
      setShow1(true);
    }
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (show2) {
      setShow2(false);
    } else {
      setShow2(true);
    }
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    if (show3) {
      setShow3(false);
    } else {
      setShow3(true);
    }
  };
  const handleClick4 = (e) => {
    e.preventDefault();
    if (show4) {
      setShow4(false);
    } else {
      setShow4(true);
    }
  };
  return (
    <div>
      <h2>YAFREEKA MONETIZATION MODEL.</h2>
      <hr />
      <p>
        At <a href="https://home.yafreeka.com/"> Yafreeka's</a>, we understand the value of originality and the hard work
        that goes into creating unique and engaging content. As a part of our
        commitment to supporting creators, we have developed a Monetization
        Model designed to reward and empower those who contribute to the
        diversity and creativity of our platform.
      </p>
      <hr />
      <div className="first">
        <h4 style={{ fontWeight: "700" }}>Eligibility Criteria</h4>
        <h6>
          To be eligible for monetization on Yafreeka, content creators are
          required to:
        </h6>
       
        {/* <div className="positioning">
          {show1 ? (
            <>
              <p onClick={handleClick1}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick1}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick1}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick1}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show1 && ( */}
          <p style={{ textDecoration: "dotted" }}>
            <GoDotFill /> Post 20 Original Videos: Creators must upload a
            minimum of 20 original videos on the Yafreeka platform. These videos
            should showcase the creator's unique voice, perspective, and
            creative touch.
          </p>
        {/* )} */}

        <hr />
      </div>

      <div className="first">
        <h4 style={{ fontWeight: "700" }}>Monetization Application Process:</h4>
        <h6>
          Upon reaching the milestone of 20 original videos, creators can apply
          for monetization by following these simple steps:
        </h6>
        {/* <hr />
        <div className="positioning">
          {show2 ? (
            <>
              <p onClick={handleClick2}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick2}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick2}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick2}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show2 && ( */}
          <p style={{ textDecoration: "dotted" }}>
            <GoDotFill /> Send an Email: Submit an application to{" "}
            <a href="mailto:care@yafreeka.com">care@yafreeka.com</a> . In the email,
            include your Yafreeka username, a brief description of your channel,
            and any other relevant details you believe would support your
            application.
          </p>
        {/* )} */}

        <hr />
      </div>

      <div className="first">
        <h4 style={{ fontWeight: "700" }}>Video Review Process:</h4>
        <h6>
        <a href="https://home.yafreeka.com/"> Yafreeka's</a> is committed to ensuring that monetization is awarded to
          creators who contribute original and valuable content to the platform.
          Our team will carefully review the submitted 20 videos to assess their
          originality.{" "}
        </h6>{" "}
        {/* <hr />
        <div className="positioning">
          {show3 ? (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show3 && ( */}
          <p style={{ textDecoration: "dotted" }}>
            <GoDotFill /> Definition of Original Content: Original content is
            considered to be entirely created by the user, reflecting their
            unique style, perspective, and creative input. Yafreeka encourages
            diversity and authenticity, and we celebrate content that stands out
            from the crowd.
          </p>
        {/* )} */}
        <hr />
      </div>

      <div className="first">
        <h4 style={{ fontWeight: "700" }}>Monetization Approval:</h4>
        <h6>
          If your videos pass the review process and are confirmed as original,
          congratulations! You will be approved for monetization on Yafreeka.
          This means you can start earning revenue from your content, turning
          your passion into a potential income stream.{" "}
        </h6>
        {/* <div className="positioning">
          {show3 ? (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show3 && (
          <p style={{ textDecoration: "dotted" }}>
            <GoDotFill /> Definition of Original Content: Original content is
            considered to be entirely created by the user, reflecting their
            unique style, perspective, and creative input. Yafreeka encourages
            diversity and authenticity, and we celebrate content that stands out
            from the crowd.
          </p>
        )} */}

        <hr />
      </div>
      <div className="first">
        <h3 style={{ fontWeight: "700" }}>
          Setting and Editing Content Prices on Yafreeka:
        </h3>

        <h5>A Step-by-Step Guide</h5>
        <h6>
          At <a href="https://home.yafreeka.com/"> Yafreeka's</a>, we believe in giving creators the flexibility to
          determine the value of their content. Our platform allows you to set
          and edit the prices for your content easily, empowering you to take
          control of your earnings.
          <br />
          <div style={{ marginTop: ".5rem" }}></div>
          <strong style={{ marginTop: "1rem" }}>
            {" "}
            Follow this step-by-step guide to customize the pricing of your
            content.
          </strong>
          <hr />
        </h6>
        <div className="positioning">
          {show4 ? (
            <>
              <p onClick={handleClick4}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick4}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick4}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick4}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show4 && (
          <>
            <div>
              <h4 style={{ fontWeight: "520" }}>
                Accessing Your Account Settings:
              </h4>
              <ul>
                <li>Log in to your Yafreeka account</li>
                <li>Click the account tab</li>
                <li>Select "Settings" from the top right of the page</li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 style={{ fontWeight: "520" }}>Click the account tab:</h4>
              <ul>
                <li>Within the account menu, look for an option “premium”</li>
                <li>
                  This will take you to the section where you can manage the
                  pricing of your content.
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 style={{ fontWeight: "520" }}>Setting the Initial Prices:</h4>
              <ul>
                <li>
                  In the Content Pricing section, you'll see a dialogue box.
                </li>
                <li>Enter the desired price for your content.</li>
                <li>Save your changes.</li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 style={{ fontWeight: "520" }}>Editing Content Prices:</h4>
              <ul>
                <li>
                  To edit the prices of your content, navigate back to the
                  premium section in your settings.
                </li>
                <li>
                  A tab will open where you can change the price from what you
                  initially set.
                </li>
                <li>Confirm the changes.</li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 style={{ fontWeight: "520" }}>Additional Tips:</h4>
              <ul>
                <li>
                  Keep in mind that pricing should be fair and reflective of the
                  value you believe your content providers.
                </li>
                <li>
                  Regularly assess and update your pricing strategy based on
                  audience feedback, market trends, or changes in your content's
                  quality.
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <h4 style={{ fontWeight: "520" }}>
                Contact Support for Assistance:
              </h4>
              <ul>
                <li>
                  - If you encounter any issues or have questions about setting
                  or editing content prices, feel free to reach out to our
                  support team at{" "}
                  <a href="mailto:care@yafreeka.com">care@yafreeka.com</a>. We're here
                  to assist you.
                </li>
                <li>
                  Empower yourself as a Yafreeka creator by customizing the
                  prices of your content to match your unique value proposition.
                </li>
              </ul>
            </div>
          </>
        )}

        <hr />
      </div>
      <div>
        <h4 style={{ fontWeight: "520" }}>Conclusion:</h4>
        <p>
          <a href="https://home.yafreeka.com/"> Yafreeka's</a> Monetization
          Model is designed to be fair, transparent, and supportive of creators
          who contribute to the vibrancy of our platform. We believe that by
          rewarding originality, we can foster a community that values
          creativity and innovation. <br />
          For any inquiries or to initiate the monetization application process,
          please contact us at <a href="mailto:care@yafreeka.com">care@yafreeka.com</a> . We look forward to seeing the
          incredible content you bring to Yafreeka, and we're excited to support
          you on your journey as a creator.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Content;
