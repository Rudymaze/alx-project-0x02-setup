import React from "react";
import { type UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700">
        Address: {address.street}, {address.suite}, {address.city},{" "}
        {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
