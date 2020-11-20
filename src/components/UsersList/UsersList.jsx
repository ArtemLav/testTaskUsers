import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../shapes/UserShape';
import { UserCard } from '../UserCard/UserCard';

export const UsersList = ({ users, currentPage, perPage }) => {
  const start = perPage * currentPage - perPage;
  const end = perPage * currentPage;

  const currentUsers = users.slice(start, end);

  return (
    <div>
      {currentUsers.map(user => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(UserShape).isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
};
