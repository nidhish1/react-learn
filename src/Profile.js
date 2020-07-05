import React from 'react';

import Content from './Profile/Content'
import MyFooter from './Profile/MyFooter'
import MyHeader from './Profile/MyHeader';

function Profile() {
    return (
        <div>
            <MyHeader />
            <Content />
            <MyFooter />

        </div>
    )
}

export default Profile