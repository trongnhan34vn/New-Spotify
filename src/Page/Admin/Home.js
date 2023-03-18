import React from 'react'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import UsersHeader from '../../components/Admin/Header/Users/UsersHeader'
import HomeHeaderAdmin from '../../components/Admin/Header/HomePage/HomeHeaderAdmin'
import HomeContentAdmin from '../../components/Admin/Content/HomePage/HomeContentAdmin'

export default function Home() {
    return (
        <div>
            {/* Header */}
            <HomeHeaderAdmin />
            {/* Header */}
            {/* Side Bar */}
            <Sidebar />
            {/* Side Bar */}
            {/* Content */}
            <HomeContentAdmin />
            {/* Content */}
        </div>
    )
}
