import React from "react";
import { Container } from "./assets/css/App";
import Card from "./components/Card";

// Card Icon
import icon from "./assets/images/CorporateBylaws.svg";

// Landing Page
function App() {
  return (
    <Container>
      <Card
        title="Corporate Bylaws"
        text="An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors."
        imageIcon={`${icon}`}
        uri="https://github.com/LucianoPierdona"
      />
    </Container>
  );
}

export default App;
