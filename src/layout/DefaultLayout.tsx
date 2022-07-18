import React from 'react'
import { AppSidebar, AppHeader } from '../components/index'

const DefaultLayout = () => {
    return (
        <div>
            <AppSidebar />
            <div>
                <AppHeader />
            </div>
        </div>
    )
}

export default DefaultLayout
