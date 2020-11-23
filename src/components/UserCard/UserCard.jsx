import React from 'react';
import { UserShape } from '../../shapes/UserShape';

export const UserCard = ({ user }) => (
  <section className="card m-3">
    <div className="card-header text-center">
      <h2 className="card-title">{`${user.name} ${user.surname}`}</h2>
    </div>
    <div className="card-body">
      <p className="card-text text-center">{user.desc}</p>
    </div>
  </section>
);

UserCard.propTypes = {
  user: UserShape.isRequired,
};
