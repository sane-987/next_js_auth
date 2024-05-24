import next from 'next';
import { revalidatePath } from 'next/cache';
import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
  
    const res = await fetch(
        'https://jsonplaceholder.typicode.com//users',
        { cache: "no-store" }
    )
    const users: User[] = await res.json()

    return (
    <>
        <p> {new Date().toLocaleTimeString() } </p>
        <h1>User</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UsersPage