import { AutoComplete, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = (props) => {
  const [options, setOptions] = useState([]);
  const router = useRouter();
  const [text, setText] = useState("");
  const searchCar = props.search === "car";

  const onSelect = (_, options) => {
    router.push(`/${searchCar ? "cars" : "inspections"}/${options.id}`);
  };

  const handleSearch = (text) => {
    let searchData = [];
    for (let index = 0; index < testData.length; index++) {
      let cnt = 0;
      for (let index = 0; index < text.length; index++) {
        let ch = text[index];
        if (ch === testData[index]) cnt++;
      }
      if (cnt >= 3) searchData.push(testData[index]);
    }
    return searchData;
  }

  const testData = [];
  for (let index = 0; index < 100; index++) {
    testData.push({
      label: `15A6-${index}`,
      value: `15A6-${index}`,
      id: index,
    })
  }

  return (
    <AutoComplete
      style={{ width: "100%", marginTop: "3rem" }}
      options={options}
      onSelect={onSelect}
      onChange={(value) => setText(value.trim())}
    >
      <Input.Search
        size="large"
        placeholder={`Nhập ${props.search === "car" ? "biển số xe" : "số đăng kiểm"
          }`}
        onSearch={() => {
          setOptions([]);
          props.setSearchText(text);
          if (text === "") return;

          let searchData = handleSearch(text);

          console.log(searchData);
          props.setData(searchData);
          options.setOptions(searchData);
        }}
        enterButton
        allowClear
        style={{ maxWidth: "100%" }}
      />
    </AutoComplete>
  );
};

export default SearchInput;