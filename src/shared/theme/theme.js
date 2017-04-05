import { css } from 'styled-components';

const SIZES = {
  large: 1200,
  medium: 976,
  small: 768,
};

export const media = Object.keys(SIZES).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = SIZES[label] / 16;
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
    return accumulator;
  },
  {},
);

export const BOLDR_NS = 'boldrui-';

export const StyleClasses = {
  APP: `${BOLDR_NS}app`,
  CARD: `${BOLDR_NS}card`,
  COMMENT_FORM: `${BOLDR_NS}comment-form`,
  FOOTER: `${BOLDR_NS}footer`,
  HEADER: `${BOLDR_NS}header`,
  HEADING: `${BOLDR_NS}heading`,
  IMAGE: `${BOLDR_NS}image`,
  POST_CARD: `${BOLDR_NS}post-card`,
  POST_SIDEBAR: `${BOLDR_NS}post-sidebar`,
  POST_SIDEBAR_TAGS: `${BOLDR_NS}sidebar-tags`,
  POST_SIDEBAR_AUTHOR: `${BOLDR_NS}sidebar-author`,
  PROFILE_DETAIL: `${BOLDR_NS}profile-detail`,
  PROFILE: `${BOLDR_NS}profile`,
  SINGLE_POST: `${BOLDR_NS}single-post`,
  TAG: `${BOLDR_NS}tag`,
  TAG_BLOCK: `${BOLDR_NS}tagblock`,
  TEXT: `${BOLDR_NS}text`,
};
