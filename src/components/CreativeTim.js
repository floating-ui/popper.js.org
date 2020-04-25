import React from 'react';
import { ProductCard, Grid } from './ProductCard';

const pickRandom = (array, n) =>
  array.sort(() => Math.random() - Math.random()).slice(0, n);

const products = [
  {
    title: 'Material Kit React PRO',
    description: 'Premium Material-UI Kit - $89',
    image: require('../images/creativetim/material-kit-pro-react.jpg'),
    url:
      'https://www.creative-tim.com/product/material-kit-pro-react?ref=popper.js.org',
  },
  {
    title: 'Material Dashboard PRO',
    description: 'Premium Bootstrap 4 Material Admin - $49',
    image: require('../images/creativetim/opt_mdp_thumbnail.jpg'),
    url:
      'https://www.creative-tim.com/product/material-dashboard-pro?ref=popper.js.org',
  },
  {
    title: 'Now UI Dashboard PRO',
    description: 'Premium Bootstrap 4 Admin - $49',
    image: require('../images/creativetim/now-ui-dashboard-pro.jpg'),
    url:
      'https://www.creative-tim.com/product/now-ui-dashboard-pro?ref=popper.js.org',
  },
  {
    title: 'Light Bootstrap Dashboard React PRO - $49',
    description: 'Premium Bootstrap React Admin Template',
    image: require('../images/creativetim/light-bootstrap-dashboard-react.jpg'),
    url:
      'https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=popper.js.org',
  },
  {
    title: 'NextJS Material Kit PRO',
    description: 'Premium NextJS Material-UI Kit',
    image: require('../images/creativetim/nextjs-material-kit-pro.jpg'),
    url:
      'https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=popper.js.org',
  },
  {
    title: 'Tailwind Starter Kit',
    description: 'A beautiful extension for TailwindCSS.',
    image: require('../images/creativetim/opt_tsp_tailwindcss_thumbnail.jpg'),
    url:
      'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=popper.js.org',
  },
];

export const CreativeTim = () => (
  <Grid>
    {pickRandom(products, 3).map(({ title, description, image, url }) => (
      <ProductCard
        title={title}
        description={description}
        image={image}
        url={url}
      />
    ))}
  </Grid>
);
