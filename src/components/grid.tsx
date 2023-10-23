import React, { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  columns?: number;
  gap?: string;
  customStyles?: CSSObject;
}

const El = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
  gap: ${(props) => props.gap || '16px'};

  /* Apply custom styles if provided */
  ${(props) => props.customStyles}
`;

const Grid: React.FC<Props> = ({ children, columns, gap, customStyles }) => {
  return (
    <El columns={columns} gap={gap} customStyles={customStyles}>
      {children}
    </El>
  );
};

export default Grid;