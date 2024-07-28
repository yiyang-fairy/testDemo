import React from "react";
import "./index.css";

interface UserListProps {
  users: string[];
  onSelectUser: (user: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
  return (
    <div className="user-list">
      <div className="member-title">聊天室成员</div>
      {users.map((user) => (
        <div key={user} className="member" onClick={() => onSelectUser(user)}>
          {user}
        </div>
      ))}
    </div>
  );
};

export default UserList;
