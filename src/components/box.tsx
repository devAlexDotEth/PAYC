import React from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

type BoxProps = {
  children: React.ReactNode;
  localStyles?: CSSObject;
};

const StyledBox = styled.div<BoxProps>`
  box-sizing: border-box;
  width: 100%;
  ${(props) => props.localStyles};
`;

const Box: React.FC<BoxProps> = ({ children, localStyles }) => {
  return <StyledBox localStyles={localStyles}>{children}</StyledBox>;
};

export default Box;