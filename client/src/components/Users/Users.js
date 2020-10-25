import * as React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyURLField from '../MyURLField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <MyURLField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
)