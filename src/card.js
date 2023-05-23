import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";

function UserCard({ img, name, email, location }) {
  const [isHidden, setHide] = useState(true);

  const buttonClick = () => {
    setHide(!isHidden);
  };

  return (
    <Card style={{ width: "18rem" }} className="mainCard">
      <Card.Img variant="top" src={img} className="image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={buttonClick}>User Details</Button>
        {isHidden ? (
          <div></div>
        ) : (
          <Card.Text className="hiddenText">
            {email} {location}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;
