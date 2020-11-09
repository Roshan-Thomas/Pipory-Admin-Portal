import * as React from 'react';
import jsonServerProvider from 'ra-data-json-server';

import { Admin, Resource } from 'react-admin';
import { UserList } from './components/Users/Users';
import { PostList, PostCreate, PostEdit } from './components/Posts/Posts';
import Dashboard from './components/Dashboard/Dashboard';
import authProvider from './components/auth/AuthProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="influencer" list={UserList} icon={UserIcon} />
        <Resource name="ads" list={PostList} icon={PostIcon} />
    </Admin>
)

export default App;
