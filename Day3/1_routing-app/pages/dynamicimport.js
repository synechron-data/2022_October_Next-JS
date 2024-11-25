import Head from 'next/head';
import { useState, Suspense } from 'react'

// Eager Loading (Eager Import)
// import ImageComp from '../components/image-comp/img-comp';

// Lazy Loading (Lazy Import)
import dynamic from 'next/dynamic';
// const ImageComp = dynamic(import('../components/image-comp/img-comp'));

// With no SSR - to disable server-rendering
const ImageComp = dynamic(import('../components/image-comp/img-comp'), {
    ssr: false
});

const DynamicImport = () => {
    const [state, setState] = useState(false);

    return (
        <>
            <Head>
                <title>Dynamic Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">Dynamic Page</h1>
                <button className='btn btn-primary mb-5 mt-5' onClick={e => { setState(true); }}>
                    Load
                </button>

                <Suspense fallback={`Loading....`}>
                    {
                        state
                            ? <ImageComp />
                            : <h3>Click the button to Load</h3>
                    }
                </Suspense>
            </div>
        </>
    );
};

export default DynamicImport;