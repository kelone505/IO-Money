import React, { useState, useEffect } from 'react';
import { getBalance } from '../firebase/CRUD';

const Balance = () => {
  const [balance, setBalance] = useState();

  const loadBalance = async () => {
    let total = await getBalance();
    setBalance(total);
  };

  useEffect(() => {
    loadBalance();
  }, []);

  return (
    <div className="balanceCard">
      <h5>Balance</h5>
      <h1> <strong>{balance}</strong></h1>
    </div>
  );
  };

export default Balance;
