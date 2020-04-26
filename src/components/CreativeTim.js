import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ProductCard, Grid } from './ProductCard';

const pickRandom = (array, n) =>
  array.sort(() => Math.random() - Math.random()).slice(0, n);

const products = [
  {
    title: 'Material Kit React PRO',
    description: 'Premium Material-UI Kit - $89',
    image: '../images/creativetim/material-kit-pro-react.jpg',
    url:
      'https://www.creative-tim.com/product/material-kit-pro-react?ref=popper.js.org',
  },
  {
    title: 'Material Dashboard PRO',
    description: 'Premium Bootstrap 4 Material Admin - $49',
    image: '../images/creativetim/opt_mdp_thumbnail.jpg',
    url:
      'https://www.creative-tim.com/product/material-dashboard-pro?ref=popper.js.org',
  },
  {
    title: 'Now UI Dashboard PRO',
    description: 'Premium Bootstrap 4 Admin - $49',
    image: '../images/creativetim/now-ui-dashboard-pro.jpg',
    url:
      'https://www.creative-tim.com/product/now-ui-dashboard-pro?ref=popper.js.org',
  },
  {
    title: 'Light Bootstrap Dashboard React PRO - $49',
    description: 'Premium Bootstrap React Admin Template',
    image: '../images/creativetim/light-bootstrap-dashboard-react.jpg',
    url:
      'https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=popper.js.org',
  },
  {
    title: 'NextJS Material Kit PRO',
    description: 'Premium NextJS Material-UI Kit',
    image: '../images/creativetim/nextjs-material-kit-pro.jpg',
    url:
      'https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=popper.js.org',
  },
  {
    title: 'Tailwind Starter Kit',
    description: 'A beautiful extension for TailwindCSS.',
    image: '../images/creativetim/opt_tsp_tailwindcss_thumbnail.jpg',
    url:
      'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=popper.js.org',
  },
];

export const CreativeTim = () => {
  return (
    <StaticQuery
      query={graphql`
        query getAllImages {
          allImageSharp {
            edges {
              node {
                id
                fluid(maxHeight: 390, maxWidth: 510) {
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
      render={data => (
        <Grid>
          {pickRandom(products, 3).map(({ title, description, image, url }) => {
            const edge = data.allImageSharp.edges.find(edge =>
              image.includes(edge.node.fluid.originalName)
            );
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
      )}
    />
  );
};
