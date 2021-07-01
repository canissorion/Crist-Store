import React, { useState } from 'react'
import ItemDetail from '../ItemDetails/ItemDetail';


function ItemDetailContainer() {

    const [data, setData] = useState({});
    React.useEffect(() => {
        fetch(
            'https://fakestoreapi.com/products/1'
        )
            .then((res) => res.json())
            .then((dataApi) => setData(dataApi));
    }, []);
    return (
        <div>
            <div className='container'>
                <ItemDetail data={data} />
            </div>
        </div>
    )
}

export default ItemDetailContainer


