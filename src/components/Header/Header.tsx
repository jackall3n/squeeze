import React from 'react';
import { format } from 'date-fns';

function Header() {
  return (
    <main>
      <h2>as of <span id="date">{format(new Date(), 'MMMM do')}</span>,</h2>
      <h1>the squeeze has <u>not</u> been squoze.</h1>
    </main>
  )
}

export default Header;
