import React from 'react'
import UserLists from '../components/UserLists'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Krishna',
            image: "https://loremflickr.com/320/240",
            places: 3
        }
    ]
    return (
        <UserLists items={USERS} />
    )
}

export default Users