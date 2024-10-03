import React, { useContext } from 'react';
import { UserdataContext } from './Userdata';

const Page: React.FC = () => {
    const { userdata } = useContext(UserdataContext);

    return (
        <div>
            Machine
        </div>
    )
}

export default Page;