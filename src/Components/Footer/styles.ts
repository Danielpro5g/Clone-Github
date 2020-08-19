import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa'

export const Container = styled.div`
  
  margin: 0 auto;
  padding: 10px 0;
  max-width: 940px;
  
  border-top: 1px solid var(--border);
`;

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GithubLogo = styled(FaGithub)`
  width: 32px;
  height: 32px;
  fill: var(--border);
`;