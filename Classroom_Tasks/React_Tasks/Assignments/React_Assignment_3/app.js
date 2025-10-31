import React from "react";
import {createRoot} from "react-dom/client";
import NestedHeader from "./NestedHeaderUsingCreateElement";
import jsxHeading from "./NestedHeaderUsingJsx";
import TitleComponent from "./NestedwithFuncComp";
import Greeting from "./PassingAttributesInJsx";
import ParentComponent from "./CompositionOfComponents";
import ComponentSyntaxExample from "./ComponentComparsion";
import Header from "./Header";

 const  App =()=>{
    return(
        <>
        <Header/>
        <NestedHeader/>
        {jsxHeading}
        <TitleComponent/>
         <Greeting name="Loki" color="blue" />
         <ParentComponent/>
         <ComponentSyntaxExample/>
        </>
    )
}

var htmlRoot = document.getElementById("root");
var rootReact = createRoot(htmlRoot);


rootReact.render(<App />);