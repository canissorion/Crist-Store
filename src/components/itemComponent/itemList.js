import React, { useState } from 'react'
import Item from './item'

function ItemList() {

    const [data, setData] = useState([]);
    React.useEffect(() => {
        setTimeout(() => {
            const data1 = [
                {
                    id: 1,
                    title: 'Crema Natural',
                    description: 'Crema uno',
                    price: '$3000',
                    pictureUrl: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/187201.jpg'
                }, {
                    id: 1,
                    title: 'Crema Natural',
                    description: 'Crema dos',
                    price: '$3000',
                    pictureUrl: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/187201.jpg'
                }, {
                    id: 1,
                    title: 'Crema Natural',
                    description: 'Crema tres',
                    price: '$3000',
                    pictureUrl: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/187201.jpg'
                }
            ];

            var promise = new Promise((resolve, reject) => {
                if (data1.length !== 0) {
                    resolve("Hay Productos");
                }
                else {
                    reject(Error("No hay productos"));
                }
            });

            let obj = data1;
            promise.then(result => {
                obj['success'] = result
            }, function (error) {
                obj['error'] = error
            });

            console.log(obj)
            
            setData(obj);
        }, 2000);
    }, []);

    return (
            <Item items={data} />
    )

}
export default ItemList

