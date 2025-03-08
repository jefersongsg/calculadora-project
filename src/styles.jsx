 import styled from "styled-components";
 
 export const Div = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
 background-color: #bc4f00;
 
 `;
    
 export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 280px;
  background-color: #faf8f8;
  border-radius: 30px;
  border: 5px solid #90d60f;
  
  input{
    width: 220px;
    height: 60px;
    font-size: 25px;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #1c1c1c;
    text-align: end;
    color: #ffffff;
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
    grid-column:1/3;
    grid-row:4/5;
    width: 110px;
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
    background-color: #9a9a9a;
    cursor: pointer;
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
 
 