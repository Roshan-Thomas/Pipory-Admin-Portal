import * as React from 'react';
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="company.name" label="Username" />
            <EmailField source="email" label="Email" />
            <NumberField source="address.zipcode" label="Followers" />
            <NumberField source="address.zipcode" label="Following" />
            <NumberField source="id" label="#posts" />
            <TextField source="" label="Activity" />
        </Datagrid>
    </List>
)