import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function List({ ownersList }) {
    const [owners, setOwners] = useState([]);
    // useEffect(() => {
    //     async function loadData() {
    //         const respone = await fetch('http://localhost:8080/products');
    //         const ownersList = await respone.json();
    //         setOwners(ownersList);
    //     }
    //     loadData();
    // }, [])
    // console.log(owners);
    return (
        <div>
            {ownersList.map(owner => (
                <div>
                    <Link href={`/detail/${owner.name}`}>{owner.name}</Link>
                </div>
            ))}
        </div>
    );
}

List.getInitialProps = async () => {
    const respone = await fetch('http://localhost:8080/products');
    const ownersList = await respone.json();
    return { ownersList }; 
}