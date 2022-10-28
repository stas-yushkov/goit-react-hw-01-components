import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
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
  background-color: #bb3f6e;
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
  color: #666;
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
`;

export const Location = styled.p`
  color: #666;
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
`;
