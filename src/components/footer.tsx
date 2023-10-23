import { FC } from 'react';
import styled from '@emotion/styled';

export type Props = {
  background?: string;
};

const El = styled.div(({ background }: Props) => ({
  background: '#00000'
}));


export const Footer: FC<{  }> = () => {
  return (
    <El>Thing</El>
  );
}

export default Footer;