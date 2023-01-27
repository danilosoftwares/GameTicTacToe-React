import styled from "styled-components";

export const Container = styled.div`

    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: top;  
`;

export const ButtonGlow = styled.div`
    display: inline-block;
  padding: 0.5rem 0.8rem;
  background: transparent linear-gradient(180deg, #eb1a30 0%, #ea1973 100%) 0%
    0% no-repeat padding-box;
  border-radius: 8px;
  font-size: 13px;
  color: #fff;
  flex-grow: 0;
  z-index: 1;
  position: absolute;
  top: 15%;
  left: 45%;
  font-weight: bold;
  -webkit-animation: glowing 1300ms infinite;
  -moz-animation: glowing 1300ms infinite;
  -o-animation: glowing 1300ms infinite;
  animation: glowing 1300ms infinite;
  cursor: pointer;

  @-webkit-keyframes glowing {
    0% {
      background-color: #eb1a30;
      -webkit-box-shadow: 0 0 3px #eb1a30;
    }
    50% {
      background-color: #ea1973;
      -webkit-box-shadow: 0 0 55px #ea1973;
    }
    100% {
      background-color: #eb1a30;
      -webkit-box-shadow: 0 0 3px #eb1a30;
    }
  }
  @keyframes glowing {
    0% {
      background-color: #eb1a30;
      box-shadow: 0 0 3px #eb1a30;
    }
    50% {
      background-color: #ea1973;
      box-shadow: 0 0 55px #ea1973;
    }
    100% {
      background-color: #eb1a30;
      box-shadow: 0 0 3px #eb1a30;
    }
  }
`