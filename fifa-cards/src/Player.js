// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card
      style={{
        width: '18rem',
        margin: '1rem',
        border: '1px solid #ddd',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '15px'
      }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', color: '#0d6efd' }}>{name}</Card.Title>
        <Card.Text style={{ fontSize: '0.9rem' }}>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey #:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "No Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
