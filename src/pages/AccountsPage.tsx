import React, { useState } from 'react';

interface Account {
  id: number;
  name: string;
  selected?: boolean;
}

interface Balance {
  amount?: number;
  currency?: string;
}

export const AccountsPage = () => {
  const [accounts, setAccounts] = useState<Account[]>([
    { id: 1, name: 'First', selected: false },
    { id: 2, name: 'Second', selected: false },
  ]);

  const [balance, setBalance] = useState<Balance>({ amount: 0, currency: 'NZD' });

  return (
    <>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.id} {'=>'} {account.name} {'=>'} {account.selected ? 'yes' : 'no'}
            <button
              onClick={() => {
                account.selected = !account.selected;
                setAccounts([...accounts]);
              }}
            >
              toggle
            </button>
          </li>
        ))}
      </ul>
      <div>
        {balance?.amount} {balance?.currency}
      </div>
      <input value={balance.amount} onChange={(e) => setBalance({ ...balance, amount: parseInt(e.target.value) })} />{' '}
      <input value={balance.currency} onChange={(e) => setBalance({ ...balance, currency: e.target.value })} />
    </>
  );
};
