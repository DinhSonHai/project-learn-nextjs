import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>Hello NextJS</h1>
            <Link href="/List">List User Page</Link>
        </div>
    );
}