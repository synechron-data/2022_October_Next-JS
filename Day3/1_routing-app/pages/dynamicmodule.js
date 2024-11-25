// import Head from 'next/head';
// import moment from 'moment';

// const DynamicModule = () => {
//     return (
//         <>
//             <Head>
//                 <title>DynamicModule Page</title>
//                 <meta name="description" content="Created by Synechron Team" />
//             </Head>

//             <div className='text-center'>
//                 <h1 className="text-primary">Dynamic Module Import</h1>
//                 <h2>Page Rendered at: {moment().format('dddd D MMMM YYYY')}</h2>
//             </div>
//         </>
//     );
// };

// export default DynamicModule;

// ------------------------------------------------

import Head from 'next/head';

export default function DynamicModule(props) {
    return (
        <>
            <Head>
                <title>DynamicModule Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">Dynamic Module Import</h1>
                <h2>Page Rendered at: {props.date}</h2>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const moment = (await import('moment')).default();
    
    return {
        props: {
            date: moment.format('dddd D MMMM YYYY')
        }
    };
}