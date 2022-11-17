import React from 'react';

import { Link as RRLink, LinkProps as RRLinkProps } from 'react-router-dom';

type LinkProps = RRLinkProps;

export const Link: React.FC<LinkProps> = ({ ...props }) => {
  return <RRLink {...props} />;
};

export default Link;
