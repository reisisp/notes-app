import React from "react";
import { Input } from 'antd';
import NotesContext from "../../context/NotesContext";
import { useContext } from "react";

const { Search } = Input;

export const SearchItem = () => {
    const { setSearchValue } = useContext(NotesContext);
    const onSearch = (value) => setSearchValue(value.toLowerCase());
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