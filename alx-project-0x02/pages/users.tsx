import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Users Page</h1>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60, // Revalidate at most once per minute
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
