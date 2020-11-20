import React from 'react';
import { UserShape } from '../../shapes/UserShape';

export const UserCard = ({ user }) => (
  <section>
    <h2>{`${user.name} ${user.surname}`}</h2>
    <p>{user.desc}</p>
  </section>
);

UserCard.propTypes = {
  user: UserShape.isRequired,
};
