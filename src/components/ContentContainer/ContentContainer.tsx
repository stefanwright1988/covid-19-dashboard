import Header from "../Header/Header";
import Content from "../Content/Content";
import StyledContentContainer from "./ContentContainer.styled";

const ContentContainer = () => {
  return (
    <StyledContentContainer>
      <Header />
      <Content />
    </StyledContentContainer>
  );
};

export default ContentContainer;
