import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import popperLogo from '../images/popper-logo.svg';
import popperLogoOutlined from '../images/popper-logo-outlined.svg';
import stripes from '../images/stripes.svg';

import { media } from './Framework';
import { GitHub, Terminal } from 'react-feather';
import { css } from '@emotion/core';

const HeaderStyled = styled.header`
  text-align: center;
  padding: 60px 25px 50px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-image: url(${stripes}),
      radial-gradient(350px, #fff, #fff1e1 20%, #ffa0b1);
    background-size: cover;
    background-position: center 60%;

    ${media.sm} {
      background-image: url(${stripes}),
        radial-gradient(500px, #fff, #fff1e1 20%, #ffa0b1);
    }

    @media (prefers-color-scheme: dark) {
      background-image: url(${stripes}),
        radial-gradient(350px, #521a22, #63242d 20%, #71444b);
      ${media.sm} {
        background-image: url(${stripes}),
          radial-gradient(500px, #521a22, #63242d 20%, #71444b);
      }
    }
  }
`;

const Logo = styled.img`
  height: 200px;
  user-select: none;
  margin-bottom: 25px;

  @media (prefers-color-scheme: dark) {
    transform: scale(1.07);
  }
`;

const Slogan = styled.h2`
  margin: 0 auto;
  max-width: 100%;
  font-family: 'Luckiest Guy', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #c83b50;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: -15px;

  ${media.sm} {
    font-size: 36px;
  }

  @media (prefers-color-scheme: dark) {
    color: #ff566f;
  }
`;

const SubSlogan = styled.p`
  color: #642f45;
  font-size: 22px;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (prefers-color-scheme: dark) {
    color: #d8acbe;
  }
`;

const buttonCss = css`
  display: inline-block;
  background: white;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #c83b50;
  box-shadow: 0 8px 16px -4px rgba(200, 59, 80, 0.5);
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  margin: 5px;

  &:hover {
    background: #c73a50;
    color: white;
    border-color: #c73a50;
  }
`;

const iconCss = css`
  vertical-align: -7px;
  margin-right: 5px;
`;

const Header = () => (
  <HeaderStyled>
    <picture>
      <source
        srcset={popperLogoOutlined}
        media="(prefers-color-scheme: dark)"
      />
      <source
        srcset={popperLogo}
        media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
      />
      <Logo src={popperLogo} alt="Popper logo" draggable="false" />
    </picture>

    <Slogan>
      Tooltip &amp; Popover <br /> Positioning Engine
    </Slogan>
    <SubSlogan>
      Weighs just <strong>3 kB!</strong>
    </SubSlogan>
    <div
      css={css`
        margin-top: 30px;
      `}
    >
      <a
        css={buttonCss}
        href="https://github.com/popperjs/popper-core"
        rel="nofollow noreferrer"
      >
        <GitHub css={iconCss} /> Star on GitHub
      </a>
      <Link to="/docs/v2/" css={buttonCss}>
        <Terminal css={iconCss} />
        Documentation
      </Link>
    </div>
  </HeaderStyled>
);

export default Header;
