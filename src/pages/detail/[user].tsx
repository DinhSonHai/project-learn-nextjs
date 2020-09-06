import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IUser } from '../../../api/IUser';

export interface UserProps {
    userList: IUser[] | undefined;
}

export default function User() {
    const [user, setUsers] = useState([]);
    const router = useRouter();
    useEffect(() => {
        async function loadData() {
            const respone = await fetch(`http://localhost:8080/products?name=${router.query.user}`);
            const userList = await respone.json();
            setUsers(userList);
        }
        loadData();
    }, [])
    return (
        <pre>{JSON.stringify(user, null, 4)}</pre>
    )
}

// User.getInitialProps = async (ctx) => {
//     const query = ctx.query;
//     console.log(ctx.req);
//     const respone = await fetch(`http://localhost:8080/products?name=${query.user}`);
//     const ownersList = await respone.json();
//     return { ownersList }; 
// }