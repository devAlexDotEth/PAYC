import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import Body from './body';

type Props = {
  size?: 'S' | 'M' | 'L';
  theme?: 'LIGHT' | 'DARK';
  children?: ReactNode;
  href?: string;
  before?: ReactNode;
  after?: ReactNode;
}

const El = styled.a(({ size = 'S', theme = 'LIGHT' }: Props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  margin: 0,
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  fontFamily:  'Inter, sans-serif',
  lineHeight: 1.5,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  ...(theme === 'LIGHT' && {
    color: 'var(--light-1000)',
  }),
  ...(theme === 'DARK' && {
    color: 'var(--dark-1000)',
  }),
  ...(size === 'S' && {
    fontSize: 14,
    fontWeight: '400',
  }),
  ...(size === 'M' && {
    fontSize: 16,
    fontWeight: '700',
  }),
  ...(size === 'L' && {
    fontSize: 21,
    fontWeight: '700',
  }),
}));

const Link: FC<Props> = ({ size = 'S', children, theme = 'LIGHT', before, after, ...props }) => {
  return (
    <El size={size} theme={theme} {...props}>
      {before && <>{before}</>}
      {size === 'S' && <Body size="S">{children}</Body>}
      {size === 'M' && <Body size="M">{children}</Body>}
      {size === 'L' && <Body size="L">{children}</Body>}
      {after && <>{after}</> }
    </El>
  );
}

export default Link;