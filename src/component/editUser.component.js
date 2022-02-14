import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserData = async () => {
        await editUser(id, user);
        history.push('/all');
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <FormGroup >
            <h1 variant="h4">Edit User</h1>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserData()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    );
}

export default EditUser;