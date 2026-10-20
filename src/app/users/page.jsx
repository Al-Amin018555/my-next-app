import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);

    return (
        <div>
            <h2>Users are coming soon..</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    users.map(user => <div key={user.id}>
                        <div className="card bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/users/${user.id}`}>
                                        <button className="btn">Show user info</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;