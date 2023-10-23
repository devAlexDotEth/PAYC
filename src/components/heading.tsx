import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  theme?: 'LIGHT' | 'DARK';
  children?: ReactNode;
  style?: any;
};

const Heading: FC<Props> = ({ level = '1', children, theme = 'LIGHT', ...props}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const El = styled(HeadingTag)(({ level = '1', theme = 'LIGHT' }: Props) => ({
    margin: 0,
    '-webkit-font-smoothing': 'antialiased',
    fontWeight: '500',
    '-moz-osx-font-smoothing': 'grayscale',
    fontFamily:  'Akshar, sans-serif',
    lineHeight: 1,
    color: 'var(--dark-1000)',
    textTransform: 'uppercase',
    ...(theme === 'LIGHT' && {
      color: 'var(--light-1000)',
    }),
    ...(theme === 'DARK' && {
      color: 'var(--dark)',
    }),
    ...(level === '1' && {
      fontSize: 72,
      letterSpacing: -3,
    }),
    ...(level === '2' && {
      fontSize: 60,
      letterSpacing: -2,
    }),
    ...(level === '3' && {
      fontSize: 48,
      letterSpacing: -1.5,
    }),
    ...(level === '4' && {
      fontSize: 36,
      letterSpacing: -1,
    }),
    ...(level === '5' && {
      fontSize: 24,
    }),
    ...(level === '6' && {
      fontSize: 21,
    }),
  }));

  return (
    <El level={level} theme={theme} {...props}>{children}</El>
  );
}

export default Heading;