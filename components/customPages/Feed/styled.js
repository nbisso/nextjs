import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  max-width: 1170px;
`;

const DailyRelevants = styled.div`
  display: flex;
  margin: 5px;
  max-width: 1170px;
`;

const FeedContent = styled.div`
  display: flex;
  margin: 5px;
  background-color: #343434;
  max-width: 1170px;
`;

const BlogsList = styled.div`
  display: flex;
  flex: 2;
  margin: 5px;
  background-color: #252525;
  max-width: 1170px;
`;

const WiclyRelevants = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px;
  background-color: #454545;
  max-width: 1170px;
`;

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MiniCardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  Container,
  DailyRelevants,
  FeedContent,
  BlogsList,
  WiclyRelevants,
  PostsList,
  TagsContainer,
  MiniCardListContainer,
};
