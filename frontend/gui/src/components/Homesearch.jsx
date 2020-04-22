import React from "react";
import { Row, Col } from "antd";

import PlumberButton from "../Buttons/1.png";
import ElectricianButton from "../Buttons/2.png";
import HousekeeperButton from "../Buttons/3.png";
import LandscaperButton from "../Buttons/4.png";
import GeneralButton from "../Buttons/5.png";
import BuilderButton from "../Buttons/6.png";

const Homesearch = () => {
  return (
    <div>
      <h1>Which service are you looking for today?</h1>
      <Row gutter={[10, 20]} justify="space-around">
        <Col>
          <a href="/search?skill=Electrician">
            <img
              src={ElectricianButton}
              style={{ maxHeight: "125px" }}
              alt="Search Electricians"
            />
          </a>
        </Col>
        <Col>
          <a href="/search?skill=Plumber">
            <img
              src={PlumberButton}
              style={{ maxHeight: "125px" }}
              alt="Search Plumbers"
            />
          </a>
        </Col>
        <Col>
          <a href="/search?skill=Housekeeper">
            <img
              src={HousekeeperButton}
              style={{ maxHeight: "125px" }}
              alt="Search Housekeepers"
            />
          </a>
        </Col>
        <Col>
          <a href="/search?skill=Landscaper">
            <img
              src={LandscaperButton}
              style={{ maxHeight: "125px" }}
              alt="Search Landscapers"
            />
          </a>
        </Col>
        <Col>
          <a href="/search?skill=General">
            <img
              src={GeneralButton}
              style={{ maxHeight: "125px" }}
              alt="Search General"
            />
          </a>
        </Col>
        <Col>
          <a href="/search?skill=Builder">
            <img
              src={BuilderButton}
              style={{ maxHeight: "125px" }}
              alt="Search Builders"
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Homesearch;
