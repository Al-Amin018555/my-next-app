import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    console.log("show userId ", userId);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);

    return (
        <div>
            <h2>User Details</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserDetailsPage;