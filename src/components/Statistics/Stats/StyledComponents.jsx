import styled from 'styled-components';

export const StatsContainer = styled.ul`
  width: 100%;
  background-color: #f3f6f9;
  color: #fff;
  list-style: none;
  display: flex;
`;

export const StatItem = styled.li`
  background-color: ${props => props.color || '#000'};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
`;

export const Percentage = styled(Label)`
  font-size: 30px;
  font-weight: bold;
`;
