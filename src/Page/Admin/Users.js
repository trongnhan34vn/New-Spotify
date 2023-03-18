import React from 'react'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import FormUsers from '../../components/Admin/Content/Users/Items/FormUsers'
import UsersHeader from '../../components/Admin/Header/Users/UsersHeader'
import { useLocation } from 'react-router-dom'
import ListUsers from '../../components/Admin/Content/Users/Items/ListUsers'

export default function Users() {
  const location = useLocation();
  console.log(location);
  const usersPageElement = (location.pathname === '/admin-users/list') ? <ListUsers /> : <FormUsers />;
  return (
    <div>
      <Sidebar />
      <UsersHeader />
      {usersPageElement}
    </div>
  )
}
