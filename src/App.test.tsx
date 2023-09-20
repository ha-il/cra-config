import React from 'react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from './App';

describe('App 1', () => {
  it('selecting element by getByText', () => {
    render(<App />);
    // 성공: 해당 요소를 반환한다.
    expect(screen.getByText('Search:')).toBeInTheDocument();
    // 성공: getByText 함수는 정규식도 받을 수 있다.
    expect(screen.getByText(/Searches/)).toBeInTheDocument();
  });
});

describe('App 2', () => {
  it('selecting element by queryByText', () => {
    render(<App />);
    // queryBy: 존재하지 않아야 하는 요소에 대한 확인이 필요할 때 사용
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

describe('App 3', () => {
  it('selecting element by findByText', async () => {
    render(<App />);
    // findBy: 비동기 요소 검색에 사용
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});

describe('App 4', () => {
  it('event testing', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    // 처음에는 Searches for JavaScript라는 텍스트는 없어야 한다.
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    // userEvent.type에 textbox 역할을 하는 요소에 'JavaScript'라는 텍스트를 삽입한다.
    userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    // 이벤트가 잘 일어났는지 확인하기 위해 Searches for JavaScript라는 텍스트가 있는지 확인한다.
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});
