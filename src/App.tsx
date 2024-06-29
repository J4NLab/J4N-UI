import "./App.css";
import { useState } from "react";
import Breadcrumb from "./components/Breadcrumb";
import Button from "./components/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "./components/Dialog";
import Pagination from "./components/Pagination";
import JanUIProvider from "./theme/provider";
import { colorList } from "./mocks/_colorList";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import Tab from "./components/Tab";
import TextField from "./components/TextField";
import { FaBeer } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const crumb = [
    {
      iconPosition: "left",
      label: "Home",
      onClick: () => console.log("Home clicked"),
    },
    {
      iconPosition: "right",
      label: "Profile",
      onClick: () => console.log("Profile clicked"),
    },
    {
      iconPosition: "empty",
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
    },
  ];
  const [checked, setChecked] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  const [textValue, setTextValue] = useState('');
  const [textError, setTextError] = useState('');

  const handleChange = (newValue: string) => {
    setTextValue(newValue);
    if (newValue.length > 8) {
      setTextError('超過 10 個字');
    } else {
      setTextError('');
    }
  };

  const onCheckboxChange = (checked: boolean) => {
    setChecked(!checked);
  };

  const countryList = [
    { key: 1, value: "Australia" },
    { key: 2, value: "Brazil" },
    { key: 3, value: "China" },
    { key: 4, value: "Denmark" },
    { key: 5, value: "Egypt" },
    { key: 6, value: "Finland" },
    { key: 7, value: "Ghana" },
    { key: 8, value: "Hungary" },
    { key: 9, value: "India" },
    { key: 10, value: "Japan" },
  ];

  return (
    <JanUIProvider customColor={colorList}>
      <Breadcrumb crumbs={crumb} />
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DialogTitle title="123" status="correct">
          我是標題
        </DialogTitle>
        <DialogContent>Lorem ipsum dolor sit amet consectetur.</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>取消</Button>
          <Button onClick={() => { }}>確認</Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>點擊展開</button>
      <Pagination count={10} />
      <Button textColor="success.100" onClick={() => setIsOpen(false)}>
        取消
      </Button>
      <Checkbox />
      <Checkbox
        label="Checkbox 1"
        description="Description of Checkbox 1"
        disabled={false}
        checked={checked}
        onChange={() => onCheckboxChange(checked)}
      />
      <Checkbox label="Checkbox 2" />
      <Checkbox label="Checkbox 3" description="Description of Checkbox 3" />
      <Checkbox
        label="Checkbox 1"
        description="Description of Checkbox 1"
        disabled={true}
      />

      <div style={{ margin: "10px" }}>
        <Select
          label="預設文字"
          options={countryList}
          value={optionValue}
          onChange={(e) => {
            setOptionValue(e);
          }}
        // sx={{
        //   bgColor: "red",
        //   color: "yellow",
        // }}
        // disabled
        />
      </div>
      <Tab
        alignment="left"
        shape="rectangle"
        tabs={[
          {
            label: 'Tab Name 1',
            content: <div>Content of Tab 1</div>,
            // icon: <FaBeer />,
            notification: 3,
          },
          {
            label: 'Tab Name 2',
            content: <div>Content of Tab 2</div>,
            // icon: <FaHome />,
            notification: 0,
          },
          {
            label: 'Tab Name 3',
            content: <div>Content of Tab 3</div>,
            // icon: <FaBeer />,
            notification: 1001,
          }
        ]}
      />
      <div style={{ margin: "10px" }}>
        <TextField
          label="預設"
          value={textValue}
          onChange={handleChange}
          error={textError}
          placeholder='請輸入文字'
          // icon={<FaBeer />}
          width="40%"
          // disabled
          // clearable
        />
      </div>
    </JanUIProvider>
  );
}

export default App;
