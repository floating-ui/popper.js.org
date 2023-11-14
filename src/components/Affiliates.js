import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ProductCard, Grid } from './ProductCard';
import { shuffle } from 'weighted-shuffle';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const pickRandom = (array, n) =>
  shuffle(array.map(({ probability, ...p }) => [p, probability]))
    .slice(-n)
    .map(([x]) => x);

const products = [
  {
    title: 'Usetiful',
    description: 'User onboarding and product adoption made simple',
    image: '../images/affiliates/usetiful.jpg',
    url: 'https://www.usetiful.com/',
    probability: 1,
  },
  {
    title: 'Modern Treasury',
    description: 'The one place to keep a business’s money flowing',
    image: '../images/affiliates/modern-treasury.jpg',
    url: 'https://www.moderntreasury.com/',
    probability: 1,
  },
  {
    title: 'Dopt',
    description:
      ' Dopt gives developers UI components and SDKs to build seamless onboarding and education experiences in minutes.',
    image: '../images/affiliates/dopt.png',
    url: 'https://dopt.com/?utm_source=floating_ui_website',
    probability: 1,
  },
  // {
  //   title: 'Material Dashboard PRO',
  //   description: 'Premium Bootstrap 4 Material Admin - $49',
  //   image: '../images/affiliates/opt_mdp_thumbnail.jpg',
  //   url:
  //     'https://www.creative-tim.com/product/material-dashboard-pro?ref=popper.js.org',
  //   probability: 1,
  // },
  // {
  //   title: 'Now UI Dashboard PRO',
  //   description: 'Premium Bootstrap 4 Admin - $49',
  //   image: '../images/affiliates/now-ui-dashboard-pro.jpg',
  //   url:
  //     'https://www.creative-tim.com/product/now-ui-dashboard-pro?ref=popper.js.org',
  //   probability: 1,
  // },
  // {
  //   title: 'Light Bootstrap Dashboard React PRO',
  //   description: 'Premium Bootstrap React Admin Template - $49',
  //   image: '../images/affiliates/light-bootstrap-dashboard-react.jpg',
  //   url:
  //     'https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=popper.js.org',
  //   probability: 1,
  // },
  // {
  //   title: 'NextJS Material Kit PRO',
  //   description: 'Premium NextJS Material-UI Kit - $119',
  //   image: '../images/affiliates/nextjs-material-kit-pro.jpg',
  //   url:
  //     'https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=popper.js.org',
  //   probability: 1,
  // },
  // {
  //   title: 'Tailwind Starter Kit',
  //   description: 'A beautiful extension for TailwindCSS - FREE',
  //   image: '../images/affiliates/opt_tsp_tailwindcss_thumbnail.jpg',
  //   url:
  //     'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=popper.js.org',
  //   probability: 1,
  // },
  // {
  //   title: 'MDB 5 UI Kit',
  //   description: `500+ components, free templates, simple installation - MIT license`,
  //   image: '../images/affiliates/BannerMDB-mini.jpg',
  //   xlImage: '../images/affiliates/BannerMDB.jpg',
  //   url: 'https://mdbootstrap.com/docs/standard/?utm_ref_id=26974',
  //   probability: 2,
  // },
  // {
  //   title: 'Free Bootstrap 5 KIT',
  //   description: '500+ components, free templates, Material Design 2.0',
  //   image: '../images/affiliates/mdb-standard.jpg',
  //   url: 'https://mdbootstrap.com/docs/standard/?utm_ref_id=26974',
  //   probability: 3,
  // },
  // {
  //   title: 'Free Angular Bootstrap 5 Kit',
  //   description: '500+ components, free templates, Material Design 2.0',
  //   image: '../images/affiliates/mdb-angular.jpg',
  //   url: 'https://mdbootstrap.com/docs/b5/angular/?utm_ref_id=26974',
  //   probability: 1,
  // },
  // {
  //   title: 'Free React Bootstrap 5 Kit',
  //   description: '500+ components, free templates, Material Design 2.0',
  //   image: '../images/affiliates/mdb-react.jpg',
  //   url: 'https://mdbootstrap.com/docs/b5/react/?utm_ref_id=26974',
  //   probability: 1,
  // },
  // {
  //   title: 'Free Vue Bootstrap 5 Kit',
  //   description: '500+ components, free templates, Material Design 2.0',
  //   image: '../images/affiliates/mdb-vue.jpg',
  //   url: 'https://mdbootstrap.com/docs/b5/vue/?utm_ref_id=26974',
  //   probability: 1,
  // },
];

const MINI_SPONSORS = [
  {
    logo: require('../images/logos/sponsors/coupontoaster.svg'),
    label: 'Coupontoaster - Discount and Coupon Codes',
    url: 'https://coupontoaster.com/',
  },
  {
    logo: require('../images/logos/sponsors/celltrackingapps.svg'),
    label: 'Cell Tracking Apps - Parental Control Software Review Website',
    url: 'http://celltrackingapps.com/',
  },
  // {
  //   logo: require('../images/logos/sponsors/techbuy.svg'),
  //   label: 'wazirx referral code',
  //   url: 'https://techbuy.in/wazirx-referral-code/',
  // },
  // {
  //   logo: require('../images/logos/sponsors/dpcoupon.svg'),
  //   label: 'dpcoupon - coupon codes and discounts',
  //   url: 'https://www.dpcoupon.com/',
  // },
  {
    logo: require('../images/logos/sponsors/ggc.svg'),
    label: 'ggc - espionner un téléphone Android iPhone Pour Control Parental',
    url: 'https://www.global-gsm-control.com/',
  },
  {
    logo: require('../images/logos/sponsors/livingfeeds.svg'),
    label: 'Living Feeds',
    url: 'https://livingfeeds.com/',
  },
  // {
  //   logo: require('../images/logos/sponsors/bestforandroid.svg'),
  //   label: 'Best Android Apps, Downloads & How to Guides',
  //   url: 'https://bestforandroid.com/',
  // },
  {
    logo: require('../images/logos/sponsors/titanam.svg'),
    label: 'Titan Asset Management',
    url: 'https://titanam.co.uk/',
  },
  {
    logo: require('../images/logos/sponsors/dailycontributors.svg'),
    label: 'Dailycontributors Blog',
    url: 'https://dailycontributors.com',
  },
  {
    logo: require('../images/logos/sponsors/ariakit.svg'),
    label: 'Ariakit - Toolkit for building accessible UIs',
    url: 'https://ariakit.org/',
  },
  // {
  //   logo: require('../images/logos/sponsors/ibomma.svg'),
  //   label: 'Ibomma App',
  //   url: 'https://theibomma.com/',
  // },
  // {
  //   logo: require('../images/logos/sponsors/pacmanblog.svg'),
  //   label: 'Pacman 30th Anniversary Doodle',
  //   url: 'https://pacmanblog.com/',
  // },
  {
    logo: require('../images/logos/sponsors/sup.svg'),
    label: 'Sup Standup Bot',
    url: 'https://sup.today/',
  },
  // {
  //   logo: require('../images/logos/sponsors/save-code.svg'),
  //   label: "Save With the UK's Best Vouchers & Discount Codes",
  //   url: 'https://www.savecode.co.uk/',
  // },
  {
    logo: require('../images/logos/sponsors/fitlivingtips.svg'),
    label: 'FitLivingTips - Health and Fitness Blog',
    url: 'https://www.fitlivingtips.com/',
  },
  {
    logo: require('../images/logos/sponsors/mobipast.svg'),
    label: 'Mobipast',
    url: 'https://mobipast.net/',
  },
  {
    logo: require('../images/logos/sponsors/refermate.svg'),
    label: 'Refermate - Best Coupon Codes',
    url: 'https://refermate.com/',
  },
  {
    logo: require('../images/logos/sponsors/electrictui.svg'),
    label:
      'Electric UI - Tools for building user interfaces for hardware devices.',
    url: 'https://electricui.com/',
  },
  {
    logo: require('../images/logos/sponsors/mobilemall.svg'),
    label: 'Mobilemall',
    url: 'https://mobilemall.co/',
  },
  {
    logo: require('../images/logos/sponsors/tubidy.svg'),
    label: 'Tubidy',
    url: 'https://thetubidy.net/',
  },
  {
    logo: require('../images/logos/sponsors/rs24.svg'),
    label: 'Rapelis24',
    url: 'https://the-repelis24.com/',
  },
];

const random = products.slice(0, 3);
const bigOne = random.find((x) => x.xlImage != null);

const MiniSponsor = styled((props) => (
  <Tippy content={props.alt}>
    <a
      css={css`
        display: block;
      `}
      href={props.href}
      target="_blank"
      className={props.className}
      rel="noopener noreferrer"
    >
      <img src={props.src} alt={props.alt} width="40" height="40" />
    </a>
  </Tippy>
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

export const Sponsors = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <>
      <StaticQuery
        query={graphql`
          query getAllImages {
            allImageSharp {
              edges {
                node {
                  id
                  fluid {
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    base64
                    aspectRatio
                    originalImg
                    originalName
                    sizes
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          if (
            typeof window !== 'undefined' &&
            window.innerWidth > 600 &&
            bigOne
          ) {
            const edge = data.allImageSharp.edges.find((edge) =>
              bigOne.xlImage.includes(edge.node.fluid.originalName)
            );
            return (
              <ProductCard
                title={bigOne.title}
                description={bigOne.description}
                fluid={edge.node.fluid}
                url={bigOne.url}
              />
            );
          } else {
            return (
              <Grid>
                {random.map(({ title, description, image, url }) => {
                  const edge = data.allImageSharp.edges.find((edge) =>
                    image.includes(edge.node.fluid.originalName)
                  );
                  if (edge == null) return null;
                  return (
                    <ProductCard
                      title={title}
                      description={description}
                      fluid={edge.node.fluid}
                      url={url}
                    />
                  );
                })}
              </Grid>
            );
          }
        }}
      />

      <div style={{ height: '2em' }} />

      <div
        css={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `}
      >
        {MINI_SPONSORS.map((sponsor) => (
          <MiniSponsor
            src={sponsor.logo}
            alt={sponsor.label}
            href={sponsor.url}
          />
        ))}
      </div>
    </>
  );
};
