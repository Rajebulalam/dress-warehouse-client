import { useEffect, useState } from "react";

const UseInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('InventoryProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
}

export default UseInventory;