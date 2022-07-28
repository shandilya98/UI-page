import React from "react";
import "./content.css";
// import bgImage from "../../Images/bgImage.svg";
import image1 from "../../Images/image1.svg";
import image2 from "../../Images/image2.svg";
import image3 from "../../Images/image3.svg";
import image4 from "../../Images/image4.svg";
import image5 from "../../Images/image5.svg";
import Textcontent from "../Textcontent/Textcontent";
import Card from "../Card/Card";
function Content() {
  return (
    <>
      <div className="component-wrapper">
        <div className="text_image-wrapper">
          <Textcontent />
          <p className="background-image" />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-component-wrapper">
          <div className="column-wrapper">
            <Card image={image1} />
            <Card image={image2} />
          </div>
          <div className="middle-column">
            <img src={image3} className="middle-column-image" alt="error" />
            <p className="middle-column-text">Awards & Recognition</p>
          </div>
          <div className="column-wrapper">
            <Card image={image2} />
            <Card image={image1} />
          </div>
        </div>
      </div>
      <div className="component3-wrapper">
        <div className="inner-component3-wrapper">
          <div className="upper-component-frame">
            <div className="componenet3-header">
              <div className="component3-inner-header-wrapper">
                <p className=" header-heading"> Repository of our Work </p>
                <h1 className="header-content-upper">
                  We Help to Enhance your Business
                </h1>
              </div>
            </div>
          </div>
          <div className="lower-component-frame">
            <img src={image4} className="pets-image" alt="error" />
            <div className="lower-textcomponent">
              <div className="upper-div-frame">
                <div className="upper-div-header-frame">
                  <h2 className="upper-div-heading">Pets Care</h2>
                  <p className="upper-div-subheading">South Africa</p>
                </div>
                <p className="header-content">
                  Get easy and quick services for your pet just by sitting at
                  your home. Take care of the well being and the fun activities
                  of your pet by a few clicks away.
                </p>
              </div>
              <div className="view-website">
                <button onClick={()=>{alert(" You have Clicked on View Website button")}} className="view-btn">View Website</button>
              </div>
            </div>
            <div className="bg-card"></div>
          </div>
          <div className="navigation">
            <div className="eclipse1"></div>
            <div className="eclipse2"></div>
            <div className="eclipse3"></div>
          </div>
          <div className="case-study">
            <p className=" case-study-text">Explore more Case Studies</p>
          </div>
        </div>
      </div>
      <div className="last-component-frame">
        <div className="last-inner-component-wrapper">
          <div className="inner-component-wrapper">
            <div className="column-component1">
              <div className="column-component1-wrapper">
                <p className="business-idea">
                  Your business idea is valuable. We are here to provide you
                  with the right business expertise
                </p>
                <div className="text-component">
                  <p className="text-line1">
                    On-call assistance in all timezones
                  </p>
                  <p className="text-line2">Projects consulting by experts</p>
                  <p className="text-line3">Detail project estimation </p>
                </div>
                <div>
                  <img src = {image5} className="image5-css" alt ="error"/>
                </div>
              </div>
            </div>
            <div className="column-component2">
              <div className="column-component2-wrapper">
                <div className="column-component2-header">
                  <h2 className="component2-header-heading">Have a Query?</h2>
                  <div className="component2-header-content">
                    <h4 className="component2-header-text">
                      Request Free Consultation
                    </h4>
                  </div>
                </div>
                <div className="column-component2-lowercontent">
                  <form>
                  <div className="column-component2-form">
                    <div className="form-name">
                      <input type = "text" className="name-field" placeholder ="Your Full Name"/>
                    </div>
                    <div className="form-mail">
                      <input type = "email" className="email-field" placeholder ="Email ID"/>
                    </div>
                    <div className="form-number">
                      <input type = "text" maxLength={10} className="number-field" placeholder ="Phone Number"/>
                    </div>
                    <div className="form-text">
                      <input type = "text" className="text-field" placeholder ="Requirements"/>
                    </div>
                    
                  </div>
                  </form>
                  <div className="component2-checkbox">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox-input"
                      value="text"
                    />
                    I accept all the terms & conditions
                  </div>
                  <div className="input-btn-wrapper">
                   <button type="submit" onClick={()=>{alert(" Details Submitted")}}  className="btn-text">Submit your free Consultation</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
