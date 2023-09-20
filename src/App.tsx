import React, { ChangeEventHandler, ReactNode } from 'react';

import './App.css';

const getUser = () => Promise.resolve({ id: '1', name: 'Robin' });

function App() {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState({ name: '' });

  React.useEffect(() => {
    const loadUser = async () => {
      const loadedUser = await getUser();
      setUser(loadedUser);
    };

    loadUser();
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => setSearch(currentTarget.value);

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search || '...'}</p>
    </div>
  );
}

export default App;

type SearchProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLDivElement>;
  children: ReactNode;
};

export function Search({ value, onChange, children }: SearchProps) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}
