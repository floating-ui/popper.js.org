/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useLayoutEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import styled from '@emotion/styled';
import {
  Crop,
  Layers,
  Heart,
  Check,
  ChevronRight,
  CloudLightning,
  Move,
  ArrowUp,
  ArrowDown,
} from 'react-feather';
import Highlight from './Highlight';
import CarbonAds from './CarbonAds';
import SEO from './Seo';

import Header from './Header';
import InstallBar from './InstallBar';
import {
  Container,
  LinkStyled,
  ExternalLinkStyled,
  media,
  Footer,
  sizes,
} from './Framework';
import { usePopper, Tooltip, Arrow } from './Popper';
import { Sponsors } from './Affiliates';
import 'modern-normalize';
import '@openfonts/luckiest-guy_latin';
import './layout.css';
import './prism-base2tone-pool-dark.css';

import popcornBox from '../images/popcorn-box.svg';
import { css } from '@emotion/react';

const USED_BY_LIST = [
  {
    logo: require('../images/logos/microsoft.svg'),
    label: 'Used by Microsoft - Fluent UI',
    url: 'https://microsoft.com/',
  },
  {
    logo: require('../images/logos/atlassian.svg'),
    label: 'Used by Atlassian - Atlaskit',
    url: 'https://www.atlassian.com/',
  },
  {
    logo: require('../images/logos/bootstrap.svg'),
    label: 'Used by Bootstrap',
    url: 'https://getbootstrap.com/',
  },
  {
    logo: require('../images/logos/gitlab.svg'),
    label: 'Used by GitLab',
    url: 'https://www.gitlab.com/',
  },
  {
    logo: require('../images/logos/adobe.svg'),
    label: 'Used by Adobe - @webspectrum components',
    url: 'https://www.adobe.com/',
  },
  {
    logo: require('../images/logos/stackexchange.svg'),
    label: 'Used by Stack Exchange',
    url: 'https://www.stackexchange.com/',
  },
  {
    logo: require('../images/logos/drupal.svg'),
    label: 'Used by Drupal',
    url: 'https://www.drupal.org/',
  },
  {
    logo: require('../images/logos/uber.svg'),
    label: 'Used by Uber - Base Web',
    url: 'https://www.uber.com/',
  },
  {
    logo: require('../images/logos/twitch.svg'),
    label: 'Used by Twitch',
    url: 'https://www.twitch.tv/',
  },
  {
    logo: require('../images/logos/discourse.svg'),
    label: 'Used by Discourse',
    url: 'https://www.discourse.org/',
  },
  {
    logo: require('../images/logos/reddit.svg'),
    label: 'Used by Reddit',
    url: 'https://www.reddit.com/',
  },
  {
    logo: require('../images/logos/linear.svg'),
    label: 'Used by Linear',
    url: 'https://www.linear.app/',
  },
];

const UsedByContainer = styled.div`
  margin-top: 40px;
`;

const UsedByLogo = styled((props) => (
  <a
    href={props.href}
    target="_blank"
    className={props.className}
    title={props.alt}
    rel="noopener noreferrer"
  >
    <img src={props.src} alt={props.alt} width="40" height="40" />
  </a>
))`
  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  img {
    height: 40px;
    margin: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  background: white;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  color: #c83b50;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background: #c73a50;
    color: white;
    border-color: #c73a50;
  }
`;

const Heading = styled.h3`
  font-family: 'Luckiest Guy', sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1.1;
  color: #f4e0f1;
`;

// eslint-disable-next-line no-template-curly-in-string
const X_STRING = '`${x}px`';
// eslint-disable-next-line no-template-curly-in-string
const Y_STRING = '`${y}px`';

const PopcornBox = forwardRef((props, ref) => (
  <img
    ref={ref}
    alt="Popcorn box"
    {...props}
    width="134"
    height="120"
    css={css`
      position: relative;
      left: 50%;
      width: 134px;
      height: 120px;
      margin-left: -67px;
      transform: scale(0.8);

      ${media.sm} {
        transform: scale(1);
      }
    `}
  />
));

const TooltipName = styled.div`
  font-weight: 900;
  text-transform: uppercase;
`;

const TooltipPrice = styled.div`
  font-weight: normal;
`;

const DotHitArea = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: none;
  transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);
  cursor: pointer;
  outline: 0;
  will-change: transform;
  -webkit-tap-highlight-color: transparent;

  &:focus > div {
    box-shadow: 0 0 0 6px rgba(255, 100, 150, 0.4);
  }

  &:hover {
    transform: scale(1.5);
  }

  &[data-placement^='top'] {
    top: 0;
    left: 50%;
    margin-left: -25px;
  }

  &[data-placement^='bottom'] {
    bottom: 0;
    left: 50%;
    margin-left: -25px;
  }

  &[data-placement='top-start'],
  &[data-placement='bottom-start'] {
    left: calc(50% - 50px);
  }

  &[data-placement='top-end'],
  &[data-placement='bottom-end'] {
    left: calc(50% + 50px);
  }

  &[data-placement^='right'] {
    right: 0;
    top: 50%;
    margin-top: -25px;
  }

  &[data-placement^='left'] {
    left: 0;
    top: 50%;
    margin-top: -25px;
  }

  &[data-placement='left-start'],
  &[data-placement='right-start'] {
    top: calc(50% - 50px);
  }

  &[data-placement='left-end'],
  &[data-placement='right-end'] {
    top: calc(50% + 50px);
  }
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #ff6b81;
  background: ${(props) => (props.selected ? '#ff6b81' : 'transparent')};
  border-radius: 50%;
`;

const Section = styled.section`
  background-color: #281e36;
  padding: 40px 0;
  font-size: 16px;
  text-align: center;

  ${media.lg} {
    font-size: 18px;
    padding: 50px 0;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #362c4f;
  }
`;

export const ExampleArea = styled.div`
  position: relative;
  width: 100%;
  scrollbar-color: rgba(255, 230, 157, 1) transparent;
  border-radius: 10px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255, 230, 157, 1);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

const DotContainer = styled(ExampleArea)`
  height: 350px;
  text-align: center;
  margin: 0 auto;

  ${media.lg} {
    height: 500px;
  }
`;

export const ScrollContainer = styled(ExampleArea)`
  overflow-y: scroll;
  overscroll-behavior: contain;
  height: 350px;
  margin: 0 auto;
  border: 2px dashed #ff6b81;
  background-color: #281e36;

  ${media.lg} {
    height: 600px;
  }

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 1000px;
  }

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 1000px;
  }
`;

const ExampleBox = styled.article`
  padding: 40px 0;
  display: flex;
  flex-direction: column-reverse;

  &:not(:last-of-type) {
    border-bottom: 1px solid #44395d;
  }

  ${media.lg} {
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: start;
    font-size: 17px;
    padding: 50px 0;
  }

  strong {
    color: #ff6b81;
  }

  p {
    margin-top: 0;
  }
`;

const ExampleText = styled.div`
  padding: 20px 0 0;
  display: grid;
  align-items: center;
  margin-bottom: 20px;

  ${media.lg} {
    padding: 0 40px;
    margin-bottom: 0;
  }
`;

const Ul = styled.ul`
  padding-left: 20px;
  list-style: none;
  margin-top: 0;
  text-align: left;
`;

const Li = styled.li`
  svg {
    display: inline-block;
    top: 6px;
    left: 2px;
    margin-right: 6px;
    position: relative;
    color: #ff6b81;
    height: 25px;
    margin-left: -30px;
  }

  strong {
    color: #ff6b81;
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const components = {
  a: ({ href, ...props }) => <Link to={href} {...props} />,
};

const PlacementExample = () => {
  const [placement, setPlacement] = useState('top');
  const { reference, popper } = usePopper({
    placement,
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
      // left/right placements on mobile
      {
        name: 'preventOverflow',
        options: {
          rootBoundary: 'document',
        },
      },
    ],
  });

  const code = `
import { computePosition } from '@popperjs/dom';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

computePosition(popcorn, tooltip, {
  placement: '${placement}',
}).then(({ x, y }) => {
  Object.assign(tooltip.style, {
    left: ${X_STRING},
    top: ${Y_STRING},
  });
});`;

  return (
    <ExampleBox>
      <DotContainer>
        {['top', 'right', 'bottom', 'left']
          .reduce(
            (placements, basePlacement) => [
              ...placements,
              // clockwise tabbing order
              ...(['bottom', 'left'].indexOf(basePlacement) >= 0
                ? [
                    `${basePlacement}-end`,
                    basePlacement,
                    `${basePlacement}-start`,
                  ]
                : [
                    `${basePlacement}-start`,
                    basePlacement,
                    `${basePlacement}-end`,
                  ]),
            ],
            []
          )
          .map((p) => (
            <DotHitArea
              key={p}
              onClick={() => setPlacement(p)}
              onMouseDown={() => setPlacement(p)}
              data-placement={p}
              aria-label={p}
              selected={placement === p}
            >
              <Dot selected={placement === p} />
            </DotHitArea>
          ))}
        <PopcornBox
          ref={reference}
          src={popcornBox}
          css={css`
            position: absolute;
            top: 50%;
            margin-top: -60px;
          `}
        />
        <Tooltip ref={popper}>
          <TooltipName data-small>Tip</TooltipName>
          <TooltipName>Popcorn</TooltipName>
          <Arrow data-popper-arrow />
        </Tooltip>
      </DotContainer>
      <ExampleText>
        <Heading>
          <Move /> Placement
        </Heading>
        <p>
          <strong>Click on the dots</strong> to place the tooltip. There are 12
          different placements to choose from.
        </p>
        <Highlight code={code} />
        <span>
          <ExternalLinkStyled to="https://codesandbox.io/s/github/popperjs/website/tree/master/examples/placement">
            Edit on CodeSandbox
          </ExternalLinkStyled>
        </span>
      </ExampleText>
    </ExampleBox>
  );
};

const PreventOverflowExample = () => {
  const [boundary, setBoundary] = useState();
  const scrollContainerRef = useRef();

  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          boundary,
        },
      },
    ],
  });

  useLayoutEffect(() => {
    scrollContainerRef.current.scrollTop =
      window.innerWidth <= sizes.lg ? 890 : 750;
  }, []);

  const code = `
import { computePosition, shift } from '@popperjs/dom';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

computePosition(popcorn, tooltip, {
  placement: 'right',
  modifiers: [shift()],
}).then(({ x, y }) => {
  Object.assign(tooltip.style, {
    left: ${X_STRING},
    top: ${Y_STRING},
  });
});
`;

  return (
    <ExampleBox>
      <div
        css={css`
          position: relative;
          overflow: hidden;
        `}
        ref={setBoundary}
      >
        <ScrollContainer ref={scrollContainerRef}>
          <PopcornBox
            ref={reference}
            src={popcornBox}
            css={css`
              position: absolute;
              left: 100px;
            `}
          />
        </ScrollContainer>
        <Tooltip ref={popper}>
          <TooltipName>Popcorn</TooltipName>
          <TooltipName>sizes</TooltipName>
          <TooltipName>&amp; Price</TooltipName>

          <TooltipPrice>XXS: $1.99</TooltipPrice>
          <TooltipPrice>XS: $2.99</TooltipPrice>
          <TooltipPrice>S: $3.99</TooltipPrice>
          <TooltipPrice>M: $4.99</TooltipPrice>
          <TooltipPrice>L: $5.99</TooltipPrice>
          <TooltipPrice>XL: $6.99</TooltipPrice>
          <TooltipPrice>XXL: $7.99</TooltipPrice>
        </Tooltip>
      </div>
      <ExampleText>
        <Heading>
          <Crop /> Overflow prevention
        </Heading>
        <p>
          <strong>Scroll the container</strong> (or the whole page) to see the
          tooltip stay within the boundary. Once the opposite edges of the
          popcorn and tooltip are aligned, the tooltip is allowed to overflow to
          prevent detachment.
        </p>
        <Highlight code={code} />
        <span>
          <ExternalLinkStyled to="https://codesandbox.io/s/github/popperjs/website/tree/master/examples/overflow-prevention">
            Edit on CodeSandbox
          </ExternalLinkStyled>
        </span>
      </ExampleText>
    </ExampleBox>
  );
};

const FlipExample = () => {
  const { reference, popper } = usePopper({ placement: 'bottom' });
  const scrollContainerRef = useRef();

  useLayoutEffect(() => {
    scrollContainerRef.current.scrollTop =
      window.innerWidth <= sizes.lg ? 890 : 750;
  }, []);

  const code = `
import { computePosition, flip } from '@popperjs/dom';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

computePosition(popcorn, tooltip, {
  modifiers: [flip()],
}).then(({ x, y }) => {
  Object.assign(tooltip.style, {
    left: ${X_STRING},
    top: ${Y_STRING},
  });
});
`;

  return (
    <ExampleBox>
      <ScrollContainer ref={scrollContainerRef}>
        <PopcornBox ref={reference} src={popcornBox} />
        <Tooltip ref={popper}>
          <TooltipName>Popcorn</TooltipName>
          <TooltipPrice>New Item</TooltipPrice>

          <Arrow data-popper-arrow />
        </Tooltip>
      </ScrollContainer>
      <ExampleText>
        <Heading>
          <ArrowUp />
          <ArrowDown /> Flipping
        </Heading>
        <p>
          <strong>Scroll the container</strong> (or the whole page) to see the
          tooltip flip to the opposite side once it's about to overflow the
          visible area. Once enough space is detected on its preferred side, it
          will flip back.
        </p>
        <Highlight code={code} />{' '}
        <span>
          <ExternalLinkStyled to="https://codesandbox.io/s/github/popperjs/website/tree/master/examples/flipping">
            Edit on CodeSandbox
          </ExternalLinkStyled>
        </span>
      </ExampleText>
    </ExampleBox>
  );
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LandingTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MDXProvider components={components}>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <InstallBar />
      <CarbonAds
        css={css`
          ${media.lg} {
            position: absolute;
            top: 0;
            right: 15px;
            .carbonplaceholder,
            #carbonads {
              background-color: #ffffff4f;
              color: #632f45;
            }
          }
        `}
      />

      <Container maxWidth={1400}>
        <PlacementExample />
        <PreventOverflowExample />
        <FlipExample />
      </Container>

      <Section>
        <Container>
          <Crop size={50} stroke="#ffe69d" />
          <Heading>In a nutshell, Popper can:</Heading>
          <Ul>
            <Li>
              <Check />
              <strong>
                Place your floating element relative to the reference element
              </strong>
              , taking into account their sizes, and position an arrow centered
              to the reference.
            </Li>
            <Li>
              <Check />
              <strong>
                Take into account the many different contexts the tooltip or
                popover can live in
              </strong>{' '}
              (different offsetParents, different or nested scrolling
              containers).
            </Li>
            <Li>
              <Check />
              <strong>
                Keep your tooltip or popover in view as best as possible
              </strong>
              , preventing it from being clipped or cut off.
            </Li>
          </Ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <CloudLightning size={50} stroke="#ffe69d" />
          <Heading>Our Sponsors</Heading>
          <p>
            Popper is proudly sponsored by the following organizations,
            <br />
            join them on{' '}
            <ExternalLinkStyled to="https://opencollective.com/popperjs">
              Open Collective
            </ExternalLinkStyled>{' '}
            to support us.
          </p>

          <Sponsors />
        </Container>
      </Section>

      <Section>
        <Container>
          <Layers size={50} stroke="#ffe69d" />
          <Heading>Powerful, low-level API</Heading>
          <p>
            Popper aims to provide an extensible positioning engine for you to
            add positioning primitives to build complex behavior.
          </p>
          <p>
            You can extend Popper with your own modifiers (or plugins) to make
            your popper work for you, no matter how advanced the scenario.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Check size={50} stroke="#ffe69d" />
          <Heading>No compromises</Heading>
          <Ul>
            <Li>
              <Check />
              <strong>Fast</strong>. The popper's position can be updated at 120
              Hz even on slow hardware thanks to efficient checks and
              architecture.
            </Li>
            <Li>
              <Check />
              <strong>Smart</strong>. Positioning works no matter where your
              popper and reference elements live, even in the most complex
              scenarios like nested scrolling containers or alternative
              offsetParent contexts.
            </Li>
            <Li>
              <Check />
              <strong>Light</strong>. Tiny 600B core and tree-shakeable,
              gradually adoptable positioning features.
            </Li>
          </Ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heart size={50} stroke="#ffe69d" />
          <Heading>Free open-source, used by millions</Heading>
          <p>
            Popper has billions of hits across the web, is trusted by millions
            of developers in production, and used in popular libraries like
            Bootstrap and Material UI.
          </p>
          <Button
            href="https://opencollective.com/popperjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support us
          </Button>
          <UsedByContainer>
            {USED_BY_LIST.map(({ logo, label, url }) => (
              <UsedByLogo href={url} src={logo} alt={label} key={url} />
            ))}
          </UsedByContainer>
        </Container>
      </Section>

      <Section>
        <Container>
          <ChevronRight size={50} stroke="#ffe69d" />
          <Heading>Ready to start?</Heading>
          <p>
            Start reading{' '}
            <LinkStyled to="/docs/">Popper's documentation</LinkStyled>!
          </p>
        </Container>
      </Section>

      <Footer>
        <Container>
          <p>© {new Date().getFullYear()} MIT License</p>
        </Container>
      </Footer>
    </MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
