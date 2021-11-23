import React from 'react';
import styled from '@emotion/styled';
import { UNPKG_CDN_URL } from '../../variables';
import { media, Container } from './Framework';
import { usePopper, Tooltip, Arrow } from './Popper';
import { Gift, CheckCircle } from 'react-feather';

import npmLogo from '../images/npm-logo.svg';
import { css } from '@emotion/react';

const InstallBarStyled = styled.div`
  background: #c83b50;
  padding: 15px 0;
  font-weight: bold;
  margin-bottom: 25px;
`;

const InstallBarContainer = styled(Container)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  max-width: 1000px;
  color: white;

  ${media.lg} {
    flex-direction: row;
  }

  ${media.md} {
    padding: 0 40px;
  }
`;

const Bar = styled.div`
  display: flex;
  background: #642f45;
  border-radius: 4px;
  color: #ffd3f8;
  font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;
  font-size: 14px;
  overflow: hidden;
  font-weight: normal;
  margin: 5px;
  max-width: 100%;
  overflow-x: auto;

  ${media.sm} {
    max-width: none;
  }

  ${media.lg} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  text-align: center;
  padding: 0 15px;
  color: white;
`;

const Logo = styled.img`
  max-width: 50px;
  user-select: none;
`;

const TextWrapper = styled.div`
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TooltipName = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  svg {
    width: 12px;
    margin-right: 5px;
  }
`;

const setClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const CopyTextToClipboardWrapper = ({ text }) => {
  const { reference, popper } = usePopper({
    placement: 'bottom',
  });

  const [showValidationTooltip, setShowValidationTooltip] = React.useState(
    false
  );

  const copyToClipboard = () => {
    setClipboard(text);
    setShowValidationTooltip(true);
    setTimeout(() => {
      setShowValidationTooltip(false);
    }, 1000);
  };

  return (
    <>
      <TextWrapper ref={reference} onClick={copyToClipboard}>
        {text}
      </TextWrapper>
      <Tooltip style={{ opacity: showValidationTooltip ? 1 : 0 }} ref={popper}>
        <TooltipName>
          <CheckCircle />
          Copied to clipboard!
        </TooltipName>
        <Arrow data-popper-arrow />
      </Tooltip>
    </>
  );
};

const InstallBar = () => (
  <InstallBarStyled>
    <InstallBarContainer>
      <div
        css={css`
          margin-right: 15px;
          margin-bottom: 5px;
          margin-top: 5px;
          ${media.lg} {
            margin-top: 0;
            margin-bottom: 0;
          }
        `}
      >
        <Gift
          css={css`
            vertical-align: -5px;
            margin-right: 10px;
          `}
        />
        Install Popper
      </div>
      <Bar>
        <LogoWrapper>
          <Logo
            src={npmLogo}
            width="50"
            height="20"
            alt="npm logo"
            draggable="false"
          />
        </LogoWrapper>
        <CopyTextToClipboardWrapper text="npm i @popperjs/dom" />
      </Bar>
      <Bar>
        <LogoWrapper>CDN</LogoWrapper>
        <CopyTextToClipboardWrapper text={UNPKG_CDN_URL} />
      </Bar>
    </InstallBarContainer>
  </InstallBarStyled>
);

export default InstallBar;
