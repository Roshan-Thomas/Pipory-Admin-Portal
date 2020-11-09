import * as React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    NumberField,
    Edit, 
    SimpleForm, 
    TextInput, 
    NumberInput,
} from 'react-admin';

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

const UserTitle = ({ record }) => {
    return <span>{record ? `${record.name}` : ''}</span>;
};

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>

            {/* User Data */}
            <TextField label="User" />
            <TextInput disabled label="ID" source="id" />
            <TextInput label="Username" source="company.name" />
            <TextInput label="Email" source="email" />
            <TextInput disabled label="Followers" source="address.zipcode" />
            <TextInput disabled label="Following" source="address.zipcode" />
            <NumberInput disabled label="# of Posts" source="id" />
            <TextInput disabled label="Activity" />
            
            {/* User Interests  */}
            <TextField label="Interests" />
            <TextInput label="Interests" source="company.catchPhrase" fullWidth />

            {/* User's Post Details */}
            <TextField label="Posts" />
            <NumberInput label="Impressions" source="address.geo.lng" />
            <NumberInput label="Coins" source="address.geo.lng" />
            <NumberInput label="Likes" source="address.geo.lng" />
            <NumberInput label="Comments" source="address.geo.lng" />
            <NumberInput label="Saves" source="address.geo.lng" />
            <NumberInput label="Shares" source="address.geo.lng" />

            {/* Users's Referrals */}
            <TextField label="Referrals" />
            <TextInput label="User Referral Code" source="phone" />
            <NumberInput label="New Users by using the Code" source="address.geo.lng" />

            {/* User's Coins Details */}
            <TextField label="Coins" />
            <NumberInput label="Total Coins" source="address.geo.lng" />
            <NumberInput label="Total Coins from daily rewards" source="address.geo.lng" />
            <NumberInput label="Total Coins from referrals" source="address.geo.lng" />
            <NumberInput label="Total Coins from posts" source="address.geo.lng" />
            <NumberInput label="Total Coins from missions" source="address.geo.lng" />

            {/* User's Offers */}
            <TextField label="Offers" />
            <NumberInput label="Purchased Offers" source="address.geo.lat" />
            <NumberInput label="Rated Offers" source="address.geo.lat" />
            <NumberInput label="Liked Offers" source="address.geo.lat" />
            <NumberInput label="Shared Offers" source="address.geo.lat" />

        </SimpleForm>
    </Edit>
)