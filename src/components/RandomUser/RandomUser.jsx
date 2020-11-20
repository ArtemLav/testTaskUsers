import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../shapes/UserShape';

export const RandomUser = ({ users }) => {
  const [randomUser, setRandomUser] = useState(users[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomUser(users[Math.floor(Math.random() * users.length)]);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>
        {`${randomUser.name} ${randomUser.surname}`}
      </h2>
    </div>
  );
};

RandomUser.propTypes = {
  users: PropTypes.arrayOf(UserShape).isRequired,
};
