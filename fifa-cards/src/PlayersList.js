import React from 'react';
import Player from './Player';
import players from './players';
import { Container, Row, Col } from 'react-bootstrap';

// PlayersList component maps over the players array and displays each one
const PlayersList = () => {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          // Each player card in its own column
          <Col key={index} md={4}>
            {/* Pass all player data as props using spread operator */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
