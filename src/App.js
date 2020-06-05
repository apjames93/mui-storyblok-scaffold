import React from 'react';
import MuiStoryblok from 'mui-storyblok/dist/index.mjs';

const Pages = () => (
  <MuiStoryblok
    theme={{}}
    accessToken={process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN}
    version="draft"
  />
);

export default Pages;

Pages.propTypes = {};