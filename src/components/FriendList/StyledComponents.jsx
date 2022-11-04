import styled from 'styled-components';

import { colors } from 'constants/colors';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
  background-color: ${colors.white};
  border-radius: 2px;
  width: 100%;
  box-shadow: ${colors.boxShadow};
  margin-bottom: 10px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  display: flex;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${props =>
    props.isOnline ? colors.online : colors.offline};
  margin-right: 5px;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  background-color: ${props => props.color || colors.appBgColor};
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 5px;
`;

export const Name = styled.p`
  //
  font-weight: 500;
`;
