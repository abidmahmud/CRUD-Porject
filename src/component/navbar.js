import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <Link className={classes.tabs} to="./" >Home</Link>
                <Link className={classes.tabs} to="all" >All Users</Link>
                <Link className={classes.tabs} to="add" >Add User</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;