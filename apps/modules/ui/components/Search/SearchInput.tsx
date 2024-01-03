import { AutoComplete, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = (props) => {
  const [options, setOptions] = useState([] as any);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const searchCar = props.search === "car";
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onSelect = (_, options) => {
    router.push(`/${searchCar ? "cars" : "inspections"}/${options.id}`);
  };

  useEffect(() => {
    const getData = async () => {
      await delay(100);
      try {
        const response = await fetch(
          `http://fall2324w3g10.int3306.freeddns.org/api/v1/${
            searchCar ? "cars" : "inspections"
          }/search?${
            searchCar ? "number_plate" : "inspection_number"
          }=${inputValue}`
        );
        if (!response.ok) throw new Error("Fail to get data");

        const tmp = await response.json();
        const tmpData: any[] = [];

        tmp.data.forEach((e) => {
          tmpData.push({
            label: searchCar ? e.number_plate : e.inspection_number,
            value: searchCar ? e.number_plate : e.inspection_number,
            id: searchCar ? e.car_id : e.inspection_id,
          });
        });

        setOptions(tmpData.slice(0, 5));
      } catch (error) {
        setOptions([]);
        console.log(error);
      }
    };
    if (inputValue.length === 0) setOptions([]);
    else getData();
  }, [inputValue]);

  return (
    <AutoComplete
      style={{ width: "100%", marginTop: "100px" }}
      options={options}
      onSelect={onSelect}
      onChange={(value) => setInputValue(value.trim())}
    >
      <Input.Search
        size="large"
        placeholder={`Nhập ${
          props.search === "car" ? "biển số xe" : "số đăng kiểm"
        }`}
        onSearch={async () => {
          props.setSearchText(inputValue);
          if (!inputValue) {
            setOptions([]);
            return;
          }
          props.setLoading(true);

          try {
            const response = await fetch(
              `http://fall2324w3g10.int3306.freeddns.org/api/v1/${
                searchCar ? "cars" : "inspections"
              }/search?${
                searchCar ? "number_plate" : "inspection_number"
              }=${inputValue}`
            );
            if (!response.ok) throw new Error("Fail to fetch data to result");

            const tmp = await response.json();
            props.setData(tmp.data);
            props.setLoading(false);
          } catch (error) {
            props.setData([]);
            props.setLoading(false);
            console.log(error);
          }
        }}
        enterButton
        allowClear
        style={{ maxWidth: "100%" }}
      />
    </AutoComplete>
  );
};

export default SearchInput;
