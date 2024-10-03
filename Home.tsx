import React, { useContext } from 'react';
import { UserdataContext } from './Userdata';

const Page: React.FC = () => {
    const { userdata } = useContext(UserdataContext);

    return (
        <div>
            <div>
                <h1>Instructions</h1>
            </div>
            <div>
                {userdata.symbols.map((symbol) => {
                    return <div>
                        {symbol.symbol}
                        <p>{symbol.multiplier}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Page;