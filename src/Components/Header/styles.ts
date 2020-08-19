import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
export const SearchForm = styled.form`

  padding: 16px;
  width: 100%;

  > input {
    background: var(--search);
    border-radius: 6px;
    outline: 0;
    padding: 7px 12px;
    width: 100%;
    color: var(--primary);

    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;