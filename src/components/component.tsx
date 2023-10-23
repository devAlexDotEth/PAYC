import { FC } from 'react';
import styled from '@emotion/styled';

export type Props = {
  background?: string;
};


// CSS
const Element = styled.div`
  color: var(--light);
`

// JS
// const Content = styled.div(({ background }: Props) => ({
//   position: 'absolute', 
//   width: '100%', 
// }));


export const Component: FC<{  }> = () => {
  return (
    <Element>Thing</Element>
  );
}

export default Component;
