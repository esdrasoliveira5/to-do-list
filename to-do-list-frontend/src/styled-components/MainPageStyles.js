import styled from 'styled-components';

export const AppStyled = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fef9ef;
  margin: -1%;
`;

export const HeaderStyle = styled.header`
  margin: -1%;
  width: 100%;
  background-color: #FB8500;
  color: #023047;
  display:flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0px 0px 30px 30px;
  position: fixed;
  position: fixed;  padding-top: 10px;
  button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ca382d;
    color: white;
  }
`;

export const BodyStyle = styled.body`
  min-height: 100vh;
`;

export const FooterStyle = styled.footer`
  margin: -1%;
  background-color: #FFB703;
  display:flex;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  position: relative;
  img {
    height: 25px;
    padding: 5px;
  }
`;

export const MainStyle = styled.main`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  color: #023047;
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 100vh;
  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;
