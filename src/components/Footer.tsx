import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 10px 0;
  text-align: center;
  background-color: #ffd6e0;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p>Made with ❤️</p>
        </FooterWrapper>
    );
};

export default Footer;
