import React, { useState } from "react";
import {
  Button,
  CardBody,
  CardHeader,
  CardText,
  ExtraButtons,
  ImageContainer,
} from "../assets/css/components/Card";
import dots from "../assets/images/Dots.svg";

// List Icons
import Download from "../assets/images/Download.svg";
import Printer from "../assets/images/Printer.svg";
import Trash from "../assets/images/Trash.svg";

// Props For the Card Component
interface CardProps {
  text: string;
  title: string;
  imageIcon: string;
  uri: string;
}

// Card Component
const Card: React.FC<CardProps> = ({ text, title, imageIcon, uri }) => {
  // show Buttons State
  const [showButtons, setShowButtons] = useState(false);

  // show the extra buttons
  const onButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <CardBody>
      <Button type="button" onClick={onButtonClick}>
        <img src={dots} alt="dots" />
      </Button>
      {showButtons && (
        <ExtraButtons>
          <li>
            <img src={Download} alt="Download Icon" />
            Download
          </li>
          <li>
            <img src={Printer} alt="Printer Icon" />
            Print
          </li>
          <li>
            <img src={Trash} alt="Trash Icon" />
            Delete
          </li>
        </ExtraButtons>
      )}
      <CardHeader>
        <ImageContainer>
          <img src={imageIcon} alt="Corporative Bylaws" />
        </ImageContainer>
      </CardHeader>
      <CardText>
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={`${uri}`}>View Document</a>
      </CardText>
    </CardBody>
  );
};

export default Card;
