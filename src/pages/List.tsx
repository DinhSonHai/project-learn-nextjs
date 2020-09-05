import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IUser } from '../../api/IUser';
import { NextPageContext } from 'next';

export interface ListProps {
    userList: IUser[] | undefined;
}

export default function List({ userList }: ListProps) {
    //const [owners, setOwners] = useState([]);
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
            {userList?.map(user => (
                <div>
                    <Link href={`/detail/${user.name}`}>{user.name}</Link>
                </div>
            ))}
        </div>
    );
}

interface myNextPageContext extends NextPageContext {
    query: {
        user: string
    }
}

List.getInitialProps = async (ctx: myNextPageContext) => {
    const respone = await fetch('http://localhost:8080/products');
    const userList: IUser[] | undefined = await respone.json();
    return { userList }; 
}