import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const isActive = true;

  return (
    <div>
      {/* 1. 타이포그래프 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>
      {/* 2. 백그라운드 컬러 */}
      <div className="bg-amber-500">amber-50</div>
      {/* 3. 사이즈 */}
      {/* spacing(4px) w-20 = 4px * 2px = 40px 적용됨 */}
      <div className="w-20 bg-blue-500">box</div>
      <div className="w-[22px]">box</div>
      <div className="w-full bg-blue-500">box</div>
      <div className="h-20 bg-blue-500">box</div>
      {/* 4. 여백 */}
      <div className="h-50 w-50 bg-red-400 pt-5 pr-5 pb-5 pl-5">
        <div className="h-full w-full bg-blue-400">box</div>
      </div>
      <div className="mx-5 my-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400">box</div>
      </div>
      {/* 5. 보더 */}
      <div className="border">border</div>
      <div className="m-5 rounded-md border-x border-y border-l-2 border-red-500">
        border
      </div>
      {/* 6. 플렉스 컨테이너 */}
      {/* flex-1 요소만 최대 넓이 */}
      <div className="flex items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  );
}

export default App;
