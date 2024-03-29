import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SampleReducer from "./SampleReducer";
import { useState } from "react";
import UseReducerOne from "./UseReducerOne";
import MutipleUseReducer from "./MutipleUseReducer";
import CounterOne from "./CounterOne";
import UsingReducer from "./UsingReducer";
import Head from "./Head";
import ShopHead from "./ShopHead";
import CandyDispenser from "./CandyDispenser";
import MyList from "./MyList";
import ParentComponent from "./ParentComponent";
import FocusInput from "./FocusInput";
import HookTimer from "./HookTimer";
import DocTitleOne from "./Components/DocTitleOne";
import DocTitleTwo from "./Components/DocTitleTwo";
import useDocumentTitle from "./Hooks/useDocumentTitle";
import UserCardHead from "./UserCardHead"
import UsingRefCode from "./UsingRefCode";
import Shopper from "./ShoppingCart/Shopper";
import Register from "./ShoppingCart/Register";
import UsingStyled from "./UsingStyled";
import QuoteGenerator from "./QuoteGenerator";
import Pdf from "./Pdf";
import UseAccordion from "./UseAccordion";
import ColorPicker from "./ColorPicker";
//import UseRefHook from "./UseRefHook";
import UseMemoHook from "./UseMemoHook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <useDocumentTitle/> */}
    <Router>
      {/* <App /> */}
      {/* <DocTitleOne/>
          <DocTitleTwo/> */}
      <Routes>
        <Route path="/reducerone" element={<UseReducerOne />} />
        <Route path="/multiplereducer" element={<MutipleUseReducer />} />
        <Route path="/counterone" element={<CounterOne />} />
        <Route path="/samplereducer" element={<SampleReducer />} />
        <Route path="/usingreducer" element={<UsingReducer />} />
        <Route path="/head" element={<Head />} />
        <Route path="/shophead" element={<ShopHead />} />
        <Route path="/candies" element={<CandyDispenser />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/parentcomponent" element={<ParentComponent />} />
        <Route path="/focusinput" element={<FocusInput />} />
        <Route path="/hooktimer" element={<HookTimer />} />
        <Route path="/doctitleone" element={<DocTitleOne />} />
        <Route path="/doctitletwo" element={<DocTitleTwo />} />
        <Route path="/usedocumenttitle" element={<useDocumentTitle />} />
        <Route path="/usercardhead" element={<UserCardHead/>}/>
        <Route path="/usingrefcode" element={<UsingRefCode/>}/>
        <Route path="/shopcart" element={<Shopper/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/styled" element={<UsingStyled/>}/>
        <Route path="/quotegenerator" element={<QuoteGenerator/>}/>
        <Route path="/pdf" element={<Pdf/>}/>
        <Route path="/useaccordion" element={<UseAccordion/>}/>
        <Route path="/colorpicker" element={<ColorPicker/>}/>
        {/* <Route path="/userefhook" element={<UseRefHook/>}/> */}
        <Route path="/usememohook" element={<UseMemoHook/>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
