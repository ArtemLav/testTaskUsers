import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../shapes/UserShape';

import { getUsersFromApi } from '../../api/api';

import { WelcomeButton } from '../WelcomeButton/WelcomeButton';
import { Pagination } from '../Pagination/Pagination';
import { UsersList } from '../UsersList/UsersList';
import { RandomUser } from '../RandomUser/RandomUser';

export const UsersPage = ({ users, setUsers }) => {
  const getUsers = async() => {
    setUsers(await getUsersFromApi());
  };

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      {users.length === 0 ? (
        <WelcomeButton handleClick={getUsers} />
      ) : (
        <>
          <h1 className="text-center">Test Task Users</h1>

          <RandomUser users={users} />

          <UsersList
            users={users}
            currentPage={currentPage}
            perPage={5}
          />

          <Pagination
            total={users.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={5}
          />
        </>
      )}
    </div>
  );
};

UsersPage.propTypes = {
  users: PropTypes.arrayOf(UserShape),
  setUsers: PropTypes.func.isRequired,
};

UsersPage.defaultProps = {
  users: [],
};
