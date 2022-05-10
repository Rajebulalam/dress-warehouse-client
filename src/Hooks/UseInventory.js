import { useEffect, useState } from "react";

const UseInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-falls-35762.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
}

export default UseInventory;