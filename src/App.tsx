import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import SideBar from "./components/SideBar";
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
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  return (
    <JanUIProvider customColor={colorList}>
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
      <SideBar isOpen={isOpenSideBar}>
        <Button textColor="success.100" onClick={() => setIsOpenSideBar(false)}>
          點擊關閉側邊攔
        </Button>
      </SideBar>
    </JanUIProvider>
  );
}

export default App;
