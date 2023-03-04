import styled from 'styled-components';
import { Space, Typography } from 'antd';

export const TopicTitle = styled(Typography.Title)`
  margin: 0 !important;
`;

export const MessageAuthor = styled(Typography.Text)`
  font-weight: bold;
`;

export const MessageDate = styled(Typography.Text)`
  font-size: 75%;
`;

export const SpaceForum = styled(Space)`
  height: 100%;
  width: 100%;
  gap: 1.5rem !important;
`;
export const SpaceTopic = styled(Space)`
  width: 100%;
  gap: 1rem !important;
`;

export const SpaceMessages = styled(Space)`
  width: 100%;
  gap: 1.5rem !important;
`;

export const SpaceMessageHeader = styled(Space)`
  width: 100%;
  gap: 0 !important;
`;

export const SpaceBetween = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

export const SpaceEnd = styled(Space)`
  width: 100%;
  justify-content: end;
`;

export const SpaceFooter= styled(Space)`
  width: 100%;
  margin-top: 1rem;
`;

export const SpaceExMessage= styled(Space)`
  width: 100%;
  border-left: 4px solid blue;
  padding-left: 1rem;
  margin: 1rem 0;
`;
