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
      <Pagination count={10} />
      <Button textColor="success.100" onClick={() => setIsOpen(false)}>
        取消
      </Button>
    </JanUIProvider>
  );
}

export default App;
