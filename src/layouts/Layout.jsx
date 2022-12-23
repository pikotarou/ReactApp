import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
`;

const Container = styled.div`
  min-height: calc(100vh - 182px);
`;

const Header = styled.header`
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  background-color: #fff;
`;

const Footer = styled.footer`
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  background-color: #fff;
`;

const Layouts = ({ children }) => {
  return (
    <Main>
      <Header>
        <p>ヘッダー</p>
      </Header>
      <Container>{children}</Container>
      <Footer>
        <p>フッター</p>
      </Footer>
    </Main>
  );
};

export default Layouts;
