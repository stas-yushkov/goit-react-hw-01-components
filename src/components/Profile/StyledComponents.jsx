import styled from 'styled-components';

import { colors } from 'constants/colors';
import { randomDarkColor } from 'utils';

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: ${colors.boxShadow};
`;

export const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: ${randomDarkColor()};
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 40px;
  text-align: center;
  line-height: 1.5;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: ${colors.appSecondaryColor};
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
`;

export const Location = styled.p`
  color: ${colors.appSecondaryColor};
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
`;
