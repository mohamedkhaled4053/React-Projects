import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  let [content, setContent] = useState('# markdown preview')
  console.log(content);

  return (
    <main>
      <section className="markdown">
        <textarea className="input" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        <article className="result">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
