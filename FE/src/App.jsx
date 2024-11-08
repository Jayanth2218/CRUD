
import React, { useState } from 'react';
import UserForm from '../src/components/UserForm';
import './App.css';

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
    };

    const handleUserSaved = () => {
        setSelectedUser(null);
    };

    return (
        <div className="app">
            <UserForm selectedUser={selectedUser} onUserSaved={handleUserSaved} />
\        </div>
    );
};

export default App;
