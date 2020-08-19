import styled, { css } from "styled-components";
import { RiGroupLine, RiBuilding4Line, RiMap2Line, RiMailLine, RiLinksLine } from 'react-icons/ri'

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 30px;
      line-height: 1.25;
      color: var(--color-dark);
      font-weight: 600px;
    }

    > h2 {
      font-size: 22px;
      color: var(--username);
      font-weight: 300;
    } 
  }
  @media (min-width: 768px){
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;
export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > *  {
      margin-right: 5px;
    }
  }
`;

const Iconcss = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${Iconcss}`;

export const Column = styled.div`
  li {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

`;
export const CompanyIcon = styled(RiBuilding4Line)`${Iconcss}`;
export const LocationIcon = styled(RiMap2Line)`${Iconcss}`;
export const EmailIcon = styled(RiMailLine)`${Iconcss}`;
export const BlogIcon = styled(RiLinksLine)`${Iconcss}`;