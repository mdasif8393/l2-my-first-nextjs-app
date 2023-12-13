import React from 'react';
import Link from 'next/link'
import { Button, Flex } from 'antd';

const NewsPage = () => {
    return (
        <div>
            <h1>News Home Page</h1>
            <Button type="primary">
                <Link href="/">Home</Link>
            </Button>
        </div>
    );
};

export default NewsPage;