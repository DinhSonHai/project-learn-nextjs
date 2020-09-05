import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function User() {
    const [owners, setOwners] = useState([]);
    const router = useRouter();
    useEffect(() => {
        async function loadData() {
            const respone = await fetch(`http://localhost:8080/products?name=${router.query.user}`);
            const ownersList = await respone.json();
            setOwners(ownersList);
        }
        loadData();
    }, [])
    console.log(router.req);
    return (
        <pre>{JSON.stringify(owners, null, 4)}</pre>
    )
}

// User.getInitialProps = async (ctx) => {
//     const query = ctx.query;
//     console.log(ctx.req);
//     const respone = await fetch(`http://localhost:8080/products?name=${query.user}`);
//     const ownersList = await respone.json();
//     return { ownersList }; 
// }