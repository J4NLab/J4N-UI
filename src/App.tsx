import "./App.css";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";
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
import SideBar from "./components/SideBar";
import Tab from "./components/Tab";
import TextField from "./components/TextField";
import Stepper from "./components/Stepper";


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
  const [textValue, setTextValue] = useState("");
  const [textError, setTextError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const stepMap = [
    {
      title: "Step 1",
      content: "選擇標的",
    },
    {
      title: "Step 2",
      content: "買入條件",
    },
    {
      title: "Step 3",
      content: "賣出條件",
    },
    {
      title: "Step 4",
      content: "進行回測",
    },
  ];

  const handleChange = (newValue: string) => {
    setTextValue(newValue);
    if (newValue.length > 8) {
      setTextError("超過 10 個字");
    } else {
      setTextError("");
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

  const featureList: [
    {
      label: string;
      value: string;
      subFeatures: { label: string; value: string }[];
    },
  ] = [
    {
      label: "我的策略",
      value: "UserStrategy",
      subFeatures: [
        {
          label: "監控中",
          value: "Monitoring",
        },
        {
          label: "我的最愛",
          value: "MyFavorite",
        },
        {
          label: "自訂策略",
          value: "CustomizeStrategy",
        },
        {
          label: "投資組合",
          value: "Portfolio",
        },
      ],
    },
    {
      label: "策略大廳",
      value: "globalStrategy",
      subFeatures: [
        {
          label: "工作坊",
          value: "workShop",
        },
        {
          label: "競技場",
          value: "arena",
        },
      ],
    },
    {
      label: "客戶服務",
      value: "clientServices",
      subFeatures: [
        {
          label: "客戶回饋",
          value: "clientFeedBack",
        },
      ],
    },
  ];
  const [optionValue, setOptionValue] = useState("");
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);

  console.log(optionValue, "optionValue");

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
          <Button onClick={() => {}}>確認</Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>點擊展開</button>
      <Button textColor="success.100" onClick={() => setIsOpenSideBar(true)}>
        點擊展開側邊攔
      </Button>
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
      <SideBar isOpen={isOpenSideBar}>
        <div className="sideBar-area max-w-64 p-4">
          <div className="sideBar-head flex items-center pb-2">
            <img
              src="src\assets\back_test_dog.png"
              alt=""
              className="w-10/12 flex-1"
            />
            <div onClick={() => setIsOpenSideBar(false)}>
              <img src="src\assets\hamburger.svg" alt="" />
            </div>
          </div>
          <div className="sideBar-body py-2">
            {featureList.map((feature) => (
              <div>
                <p className="text-xs font-medium">{feature.label}</p>
                {feature.subFeatures.map((subFeature) => (
                  <div className="ml-1 gap-2 py-3">
                    <p className="text-base font-normal">{subFeature.label}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </SideBar>
      <Tab
        alignment="left"
        shape="rectangle"
        tabs={[
          {
            label: "Tab Name 1",
            content: <div>Content of Tab 1</div>,
            // icon: <FaBeer />,
            notification: 3,
          },
          {
            label: "Tab Name 2",
            content: <div>Content of Tab 2</div>,
            // icon: <FaHome />,
            notification: 0,
          },
          {
            label: "Tab Name 3",
            content: <div>Content of Tab 3</div>,
            // icon: <FaBeer />,
            notification: 1001,
          },
        ]}
      />
      <div style={{ margin: "10px" }}>
        <TextField
          label="預設"
          value={textValue}
          onChange={handleChange}
          error={textError}
          placeholder="請輸入文字"
          // icon={<FaBeer />}
          width="40%"
          // disabled
          // clearable
        />
      </div>
      <div style={{ width: "294px", margin: "100px" }}>
        <Stepper
          currentStep={currentStep}
          numberOfSteps={stepMap.length}
          // sx={{
          //   stepLineWidth: "100px",
          // }}
          stepMap={stepMap}
        />
      </div>
    </JanUIProvider>
  );
}

export default App;
