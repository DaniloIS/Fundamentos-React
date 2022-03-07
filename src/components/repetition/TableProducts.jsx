import React from 'react';
import products from '../../data/products';
import './TableProducts.css'

export default function TableProducts(props) {

    function getProducts() {

        return products.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 === 0 ? "par" : ""}>
                    <td> {product.id} </td> <td> {product.name} </td> <td>R$ {product.price} </td>
                </tr>
            )
        })

    }

    return(
        <div className="tableProducts">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {getProducts()}
                </tbody>
            </table>
        </div>
    );
}