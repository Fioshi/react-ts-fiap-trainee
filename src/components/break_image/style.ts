import styled from "styled-components";

export const BackgroundImg = styled.section`
  max-width: 100vw;
  height: 60vh;
  background-image: url('assets/imgs/break-image.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 414) {
    background-attachment: scroll;
    height: 100vh;
  }
`;
