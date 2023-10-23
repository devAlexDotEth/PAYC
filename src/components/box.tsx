import React from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

type BoxProps = {
  children: React.ReactNode;
  localStyles?: CSSObject;
};

const Outer = styled.div<BoxProps>`
  box-sizing: border-box;
  width: 100%;
  ${(props) => props.localStyles};
`;

const Box: React.FC<BoxProps> = ({ children, localStyles }) => {
  return <Outer localStyles={localStyles}>{children}</Outer>;
};

export default Box;