import UserCard from "../UserCard/UserCard";

const UsersList = ({ users }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {users.slice(0, 10).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
