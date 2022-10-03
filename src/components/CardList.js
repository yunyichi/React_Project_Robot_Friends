import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {
        robots.map((user, i) => {
          return (
            <Card
              // key prop should be something that won't change, if an element is removed,
              // then the i will change, so id is a better key
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </>
  );
}

export default CardList;