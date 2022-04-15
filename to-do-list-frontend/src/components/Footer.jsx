import React from 'react';
import { FooterStyle } from '../styled-components/MainPageStyles';
import LinkedinLogo from '../styled-components/img/linkedin-112.png';
import GitHugLogo from '../styled-components/img/github-logo-6530.png';

function Footer() {
  return (
    <FooterStyle>
      <div>
        <p>To-Do List by Esdras Oliveira</p>
      </div>
      <div>
        <a href="https://github.com/esdrasoliveira5">
          <img src={ GitHugLogo } alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/esdrasmoliveira">
          <img src={ LinkedinLogo } alt="Linkedin" />
        </a>
      </div>
    </FooterStyle>
  );
}

export default Footer;
