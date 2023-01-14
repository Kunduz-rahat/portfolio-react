import { Container, Row, Col } from "react-bootstrap";
import { MailForm } from "./MailForm";
import logo from "../assets/img/logo.svg";
import {AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="mt-5 p-2">
        <Row className="align-items-center justify-content-end">
          {/* <MailForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
						<a href='https://www.instagram.com/damskoeschacte/'>
            <AiFillInstagram />
            </a>
        <a href='https://www.linkedin.com/in/kunduz-rakhat-958139245/'>
        <AiFillLinkedin />
        </a>
            <a href='https://github.com/Kunduz-rahat'>
            <AiFillGithub/>
            </a>
            <a href='https://t.me/kunduz_rakhat'>
            <FaTelegramPlane/>
					
            </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}