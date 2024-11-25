import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CatchAll() {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <>
            <Head>
                <title>Match All Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">CatchAll Employees URL</h1>
                <h4 className="text-warning">This is a Simple, Next JS Application</h4>
            </div>
        </>
    );
}