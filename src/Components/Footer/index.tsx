import React from 'react';

import { Container, WrapperFooter, GithubLogo } from './styles';

const Footer: React.FC = () => {
  return(
    <Container>
      <hr/>
      <WrapperFooter>
        <GithubLogo/>
      </WrapperFooter>
    </Container>
  );
}

export default Footer;