import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: #343434;
  max-width: 1170px;
`;

const DailyRelevants = styled.div`
  display: flex;
  margin: 5px;
  background-color: #343434;
  max-width: 1170px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Feed = () => {
  return (
    <Container>
      <DailyRelevants>
        <CardContainer>
          <div>
            <h1>LA Card</h1>
          </div>
        </CardContainer>
        <CardsList>
          <h1>Mini Lista Card</h1>
          <h1>Mini Lista Card</h1>
          <h1>Mini Lista Card</h1>
          <h1>Mini Lista Card</h1>
        </CardsList>
      </DailyRelevants>
      <FeedContent>
        <BlogsList>
          <h1>Cosas de BlogsList</h1>
        </BlogsList>
        <WiclyRelevants>
          <PostsList>
            <h1>Cosas del Wicly Relevant</h1>
            <h1>Cosas del Wicly Relevant</h1>
          </PostsList>
          <TagsContainer>
            <p>Hashtag1</p>
            <p>Hashtag2</p>
            <p>Hashtag3</p>
            <p>Hashtag4</p>
            <p>Hashtag1</p>
            <p>Hashtag2</p>
            <p>Hashtag3</p>
            <p>Hashtag4</p>
            <p>Hashtag1</p>
            <p>Hashtag2</p>
            <p>Hashtag3</p>
            <p>Hashtag4</p>
          </TagsContainer>
        </WiclyRelevants>
      </FeedContent>
    </Container>
  );
};

export default Feed;
