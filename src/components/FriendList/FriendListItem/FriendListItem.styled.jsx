import styled, { css } from 'styled-components';

export const ListItem = styled.li`
  list-style: none;

  padding: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  background-color: #fff;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const RoundBlob = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin-right: 8px;
  ${props =>
    props.isOnline
      ? css`
          background-color: green;
        `
      : css`
          background-color: red;
        `}
`;

export const UserImage = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-right: 8px;

  overflow: hidden;

  background-color: teal;
  border-radius: 8px;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
`;
