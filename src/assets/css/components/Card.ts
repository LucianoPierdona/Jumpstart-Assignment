import styled from "styled-components";

// Card Container Styling
export const CardBody = styled.div`
  position: relative;
  width: 305px;
  height: 300px;
  border: 1px solid #f1f4f6;
  background: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 0 0 0;
  border-bottom: 4px solid #fededd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 8px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s;

  /* hover */
  &:hover {
    transition: 0.2s;
    & button {
      opacity: 1;
    }
    & ul {
      opacity: 1;
    }
  }
`;

export const ExtraButtons = styled.ul`
  padding: 5px 0;
  width: 148px;
  position: absolute;
  list-style-type: none;
  box-shadow: 0px 1px 50px rgba(50, 50, 93, 0.07);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  top: -1px;
  right: -136px;
  opacity: 0;
  & li:first-child {
    background: #b05efd;
    color: #fff;
  }
  & li:last-child {
    color: #eb5757;
  }
  & li {
    cursor: pointer;
    margin: 2px 0;
    display: flex;
    width: 100%;
    text-align: left;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    padding: 2px 0;
    line-height: 22px;
    & img {
      padding: 0 17px;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  border: 1px solid #f1f4f6;
  border-radius: 5px;
  outline: none;
  top: 15px;
  right: 15px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
`;

export const CardHeader = styled.div`
  margin: 15px 0 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  height: 44px;
  width: 44px;
  background: #fededd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const CardText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  & h1 {
    font-family: "Avenir";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    color: #0f2137;
  }
  & p {
    width: 80%;
    margin: 5px auto 25px auto;
    font-family: "Avenir";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #343d48;
  }
  & a {
    width: 243px;
    margin: 0 auto;
    height: 32px;
    display: flex;
    justify-content: center;
    border: 1px solid #8c14fc;
    align-items: center;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Avenir";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
    line-height: 14px;
    color: #8c14fc;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;
