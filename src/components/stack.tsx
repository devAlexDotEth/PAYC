import React from 'react';
import { CSSObject } from '@emotion/react';
import Box from './box';

type Props = {
  children: React.ReactNode;
  direction: 'HORIZONTAL' | 'VERTICAL';
  space?: number | string;
  localStyles?: CSSObject;
}

const Stack: React.FC<Props> = ({ children, direction = 'HORIZONTAL', space = 8, localStyles }) => {
  return (
    <Box localStyles={localStyles}>
      {direction === 'HORIZONTAL' &&
        <Box localStyles={{ display: 'flex', gap: space }}>
          {children}
        </Box>
      }
      {direction === 'VERTICAL' &&       
          <Box localStyles={{ display: 'flex', flexDirection: 'column', gap: space }}>
          {children}
        </Box>
      }
    </Box>
  );
};

export default Stack;