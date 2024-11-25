import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Imperative = () => {
    const router = useRouter();

    function handleClick() {
        router.push('/about');
    }

    function shallowClick() {
        router.push('?postid=10', undefined, { shallow: true });
    }

    useEffect(() => {
        console.log("Changed", router.query.postid);
    }, [router.query.postid]);

    return (
        <>
            <Head>
                <title>Posts Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">Imperative/Shallow Routing</h1>
                <button className='btn btn-warning' onClick={e => {
                    handleClick(e);
                }}>Navigate to About</button>
                <button className='btn btn-warning' onClick={e => {
                    shallowClick(e);
                }}>Shallow Routing</button>
            </div>
        </>
    );
};

export default Imperative;