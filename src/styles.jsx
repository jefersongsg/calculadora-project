 import styled from "styled-components";
 
 export const Div = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
  background-image: linear-gradient(#000000,#222222 ,#4a4a4a);
 `;
    
 export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 430px;
  width: 265px;
  background-color: #4a4a4a;
  border-radius: 30px;
  box-shadow:#000000 0px -5px 0px 5px inset;
  
  input{
    width: 220px;
    height: 70px;
    font-size: 25px;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #8c8b8b;
    text-align: end;
    color: #ffffff;
    box-shadow: #e6e508 -2px -3px 13px 7px inset;
  }
 `;

 export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  margin-top: 20px;

  #clear{
    background-color: #e68608;
    //grid-column:1/3;
    //grid-row:4/5;
    //width: 110px;
    border-radius: 20px;
  }
  #igual{
    background-color: #e68608;
    grid-row:5/6;
    grid-column:1/5;
    width: 230px;
    height: 50px;
    border-radius: 20px;
  }
  #soma{
    background-color: #e68608;
    grid-column:4/5;
    grid-row:1/2;
  }
  #sub{
    background-color: #e68608;
    grid-column:4/5;
    grid-row:2/3;
  }
  #div{
    background-color: #e68608;
    grid-column:4/5;
    grid-row:4/5;
  }
  #mult{
    background-color: #e68608;
    grid-column:4/5;
    grid-row:3/4;
  }
  button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-size: 20px;
    background-color: #b4b4b4;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) -4px 4px 5px 0px inset;
  }

  button:hover{
    background-color: #e68608;
    color: #ffffff;
  }
  button:active{
    background-color: #000000;
    color: #ffffff;
    transform: scale(1.1);
  }
 `;
 
 
