import React, { useContext } from 'react';
import { Link } from 'next/link'
import { UserdataContext } from './Userdata';

const Nav: React.FC = () => {
    const { userdata } = useContext(UserdataContext);

    return (
        <nav>
            <Link href='/'>Slots.gg</Link>
            <button>Balance: {userdata.balance}</button>
        </nav>
    )
}

export default Nav;