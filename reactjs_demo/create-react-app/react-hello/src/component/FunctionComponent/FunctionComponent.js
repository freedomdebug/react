/**
 * Created by tommy.hu on 2018/2/2.
 */
import React from 'react';
import './FunctionComponent.css';
/*function FunctionComponent(props, /!* context *!/) {
    return <div className="function">Hello {props.name}</div>
}*/

/*
* 使用箭头函数
* */
const FunctionComponent = (props, /* context */)=>{
    console.log("do somthing");
    return <div className="function">Hello {props.name}</div>
}

export default FunctionComponent;