import React from 'react';

interface Props {
  title?: string;
}

function Article({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <article>
      {title &&  <h3>{title}</h3>}
      {children}
    </article>
  )
}

export default Article;
