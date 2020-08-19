import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
    background: #f9f9f9;
    height: 100vh;
`;
export const HeaderSign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > span {
      font-size: 26px;
    }
`;
export const IconGithub = styled(FaGithub)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding: 30px 0;
`;
export const WrapperForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  > form {

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 300px;
    width: 300px;

    padding: 40px;
    border-radius: 5px;
    border:1px solid var(--border);
    background: var(--primary);

    > span {
      padding: 10px 0;
      font-weight: 600;
    }

    input {
      width: 100%;
      border:1px solid var(--border);
      border-radius: 6px;

      outline: 0;

      padding: 9px 0;
      margin-bottom: 20px;
    }

    > button {
      width: 100%;
      background: #2c974b;
      padding: 9px 0px;
      border-radius: 6px;

      font-weight: 600;
      font-size: 14px;
      color: var(--primary);
    }
  }
`;