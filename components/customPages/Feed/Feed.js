import HeroCard from "./components/HeroCard";
import MiniCard from "./components/MiniCard";

import {
  Container,
  DailyRelevants,
  FeedContent,
  BlogsList,
  WiclyRelevants,
  PostsList,
  TagsContainer,
  MiniCardListContainer,
} from "./styled";

const Feed = () => {
  const list = [1, 2, 3, 4];
  return (
    <Container>
      <DailyRelevants>
        <HeroCard />
        <MiniCardListContainer>
          {list.map((item) => {
            return <MiniCard />;
          })}
        </MiniCardListContainer>
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
