import PropTypes from "prop-types";

function UserCard({ name, age, isAdmin }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <p className="text-red-500">Admin</p>}
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
};

export default UserCard;