
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';

import Link from 'next/link';

const Header = styled(AppBar)`
position:fixed;
background: #fff;
zIndex: 100;
`
const Nav = styled(Box)`
    display: flex;
    margin-left: auto;
    margin-right: 5%;
    & > p {
        margin-right: 100px;
        cursor: pointer
    }

`

const NavBar = () => {
    // const logo ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wikipedia-logo-white.svg/2560px-Wikipedia-logo-white.svg.png';
    return (
        <Header position='static' color='transparent' >
            <Toolbar>
                {/* <img src={logo} style={{ height: 20 }} /> */}
                <Link href='/'><Typography style={{color: 'rgb(34, 43, 54, 0.5)',fontFamily:'monospace' ,fontWeight:'700'}}>KYC</Typography></Link>
                <Nav>
                    {/* <Link href='/'><Typography>Home</Typography></Link>
                    <Link href='/about'><Typography>About</Typography></Link> */}
                    <Link href='/login'><Typography style={{color: 'rgb(34, 43, 54, 0.6)',fontFamily:'ubuntu'}}>Login</Typography></Link>
                </Nav>
            </Toolbar>
        </Header>
    )
}

export default NavBar;