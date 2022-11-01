import styled from 'styled-components';

export const StatsContainer = styled.ul`
  width: 100%;
  background-color: #f3f6f9;
  list-style: none;
  display: flex;
`;

export const StatItem = styled.li`
  border: 1px solid #e4e9f0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
`;

export const Quantity = styled(Label)`
  font-size: 40px;
  font-weight: bold;
`;
