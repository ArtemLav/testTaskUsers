import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../shapes/UserShape';

export const RandomUser = ({ users }) => {
  const [randomUser, setRandomUser] = useState(users[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomUser(users[Math.floor(Math.random() * users.length)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h4 className="text-center text-secondary">Random User:</h4>
      <h2 className="text-center text-primary">
        {`${randomUser.name} ${randomUser.surname}`}
      </h2>
    </>
  );
};

RandomUser.propTypes = {
  users: PropTypes.arrayOf(UserShape).isRequired,
};
