import React from "react";
import { Input } from 'antd';

const { Search } = Input;

export const SearchItem = () => {
    const onSearch = (value) => console.log(value);
    return (
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />
    )
} 