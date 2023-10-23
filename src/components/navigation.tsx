import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Logo from './logo';
import Box from './box';

export type Props = {
  background?: string;
  children?: ReactNode;
  wallet?: ReactNode;
};

const El = styled.div(({
  background: 'var(--dark-1000)',
  display: 'grid', 
  gridTemplateColumns: '1fr auto', 
  minHeight: 86, 
  alignItems: 'center',
  padding: '0 var(--scale-24)',
  borderBottom: '1px solid #FFFFFF12',
  '@media (min-width: 1080px)' :{
    padding: '0 var(--scale-36)',
  },
  '@media (min-width: 1200px)' :{
    gridTemplateColumns: 'auto 1fr auto',
    padding: '0 var(--scale-48)',
  }
}));

const Menu = styled.div(({
  display: 'none',
  gap: 6,
  '@media (min-width: 1200px)' :{
    display: 'flex',
  }
}));

const Navigation: FC<Props> = ({ children, wallet }) => {
  return (
    <El>
      <Box localStyles={{paddingRight: 'var(--scale-36)', display: 'flex'}}>
        <Logo/>
      </Box>
      <Menu>{children}</Menu>
      {wallet}
    </El>
  );
}

export default Navigation;