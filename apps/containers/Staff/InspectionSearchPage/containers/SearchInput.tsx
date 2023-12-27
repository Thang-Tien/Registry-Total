"use client";

import React, { useState } from "react";
import { AutoComplete, Input } from "antd";

const SearchInput: React.FC = () => {
    const options = [
        { value: "2023-002077" },
        { value: "2023-001807" },
        { value: "2023-002652" },
    ];
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSearch = (value) => {
        // Filter options based on the search value
        const matchingOptions = options.filter((option) =>
            option.value.toUpperCase().includes(value.trim().toUpperCase())
        );

        // Log the selected values
        console.log(
            "Selected Values:",
            matchingOptions.map((option) => option.value)
        );

        // Do something with the selected values, for example, store them in state
        setSelectedValues(matchingOptions.map((option) => option.value));
        // You can also perform any other actions here based on the selected values
    };

    return (
        <AutoComplete
            style={{ width: "100%" }}
            options={options}
            filterOption={(inputValue, option) =>
                option?.value
                    .toUpperCase()
                    .indexOf(inputValue.trim().toUpperCase()) !== -1
            }
        >
            <Input.Search
                size="large"
                placeholder="Nhập số đăng kiểm"
                enterButton
                allowClear
                style={{ width: "100%" }}
                onSearch={handleSearch}
            />
        </AutoComplete>
    );
};

export default SearchInput;
