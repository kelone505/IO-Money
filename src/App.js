import React from 'react';
import './style.css';
import IOList from './components/IOList';
import ToolBar from './components/ToolBar';
import Balance from './components/Balance';

export default function App() {
  return (
    <>
      <Balance />
      <IOList/>
      <ToolBar/>
    </>
  );
}
