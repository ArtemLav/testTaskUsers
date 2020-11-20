import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
});
