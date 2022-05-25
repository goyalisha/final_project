import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";


import instagram from "../flaticons/instagram.png";
import facebook from "../flaticons/facebook.png";
import google from "../flaticons/google.png";
import whatsapp from "../flaticons/whatsapp.png";

const Footer = () => {
  return (
    <div className="Footer">
      <Box>
        <h1
          style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
        ></h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Writing</FooterLink>
              <FooterLink href="#">Internships</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            {/* <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column> */}
          </Row>
          {/* <Row className="social-media-links">
            <FooterLink href="#" className="list">
              <img src={facebook} alt="facebook" className="social"/>
            </FooterLink>
            <FooterLink href="#" className="list">
              <img src={google} alt="google" className="social"/>
            </FooterLink>
            <FooterLink href="#" className="list">
              <img src={instagram} alt="instagram" className="social"/>
            </FooterLink>
            <FooterLink href="#" className="list">
              <img src={whatsapp} alt="whatsapp" className="social"/>
            </FooterLink>
          </Row> */}
          <div className="social-media-links">
            <ul className="lists list">
              <li>
                <a className="nav-item" href="/">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  <img src={facebook} alt="instagram" />
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  <img src={google} alt="instagram" />
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  <img src={whatsapp} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
