// import React, { useEffect, useState } from 'react';
// import { getUsers, deleteUser } from '../services/userService';
// import UserForm from './UserForm';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Fetch users on component mount and after operations
//   const fetchUsers = async () => {
//     try {
//       const response = await getUsers();
//       setUsers(response.data); // Update state with users data
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // Handle user deletion
//   const handleDelete = async (id) => {
//     try {
//       await deleteUser(id);
//       fetchUsers(); // Refresh user list after deletion
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   // Handle user edit
//   const handleEdit = (user) => {
//     setSelectedUser(user);
//   };

//   // Handle user form save
//   const handleUserSaved = () => {
//     fetchUsers(); // Refresh user list after saving
//     setSelectedUser(null); // Clear the selected user
//   };

//   // Handle adding a new user
//   const handleAddUser = () => {
//     setSelectedUser(null); // Ensure no user is selected for editing
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       {/* Conditionally render the UserForm based on the selectedUser */}
//       <div className="user-form-container">
//         <UserForm selectedUser={selectedUser} onUserSaved={handleUserSaved} />
//       </div>

//       <div className="user-list">
//         <h2>User List</h2>
//         <button onClick={handleAddUser}>Add New User</button>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.age}</td>
//                   <td>
//                     <button onClick={() => handleEdit(user)}>Edit</button>
//                     <button onClick={() => handleDelete(user._id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No users found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserList;
