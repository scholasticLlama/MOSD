import React, { useState } from 'react';
import DisplayMainScreen from './components/MainScreen';

export default function App() {
  const [currentServer, setCurrentServer] = useState('Milan');
  const server = { country: "Italy", city: "Milan", ipAddress: "155.20.11.01", timeRunning: "00:01:22" };
  return (
    <DisplayMainScreen server={server}/>
  );
}