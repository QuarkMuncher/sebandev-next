import MD from 'react-markdown';
import {Prism} from 'react-syntax-highlighter';
import style from './style';
import remarkHint from 'remark-hint';

import {ExternalLink, InternalLink} from "..";
import Tip from './tip';
import Warning from './warning';
import Error from './error';

export default function Markdown({markdown}) {
  return (
    <MD
      remarkPlugins={[remarkHint]}
      components={{
        h1: ({children}) => {
          return (<h2 className={`text-3xl mb-1 mt-2`}>{children}</h2>);
        },
        h2: ({children}) => {
          return (<h3 className={`text-2xl mb-1 mt-2`}>{children}</h3>);
        },
        h3: ({children}) => {
          return (<h4 className={`text-xl mb-1 mt-1`}>{children}</h4>);
        },
        ul: ({children}) => {
          return (<ul className={`list-disc pl-6 mb-5`}>{children}</ul>);
        },
        p: ({children, className}) => {
          switch (className) {
            case 'hint tip':
              return (<Tip>{children}</Tip>);
            case 'hint warn':
              return (<Warning>{children}</Warning>);
            case 'hint error':
              return (<Error>{children}</Error>);
            default:
              return(<p className={`mt-1 mb-5`}>{children}</p>);
          }
        },
        blockquote: ({children}) => {
          return (
          <blockquote className={`relative p-4 italic quote`}>
            <div className={`right-[96%] mr-2 hidden md:block text-8xl text-red-300 top-0 absolute leading-none`} aria-hidden>&ldquo;</div>
            {children}
          </blockquote>
          );
        },
        code: ({node, inline, className, children, ...props}) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (<Highlighter
            code={String(children).replace(/\n$/, '')}
            language={match[1]}
            PreTag={'div'}
            {...props}
          />) : (<code className={className} {...props}>{children}</code>)
        },
        a: ({href, children}) => {
          return href.includes('https')
            ? <ExternalLink href={href}>{children[0]}</ExternalLink>
            : <InternalLink href={href}>{children[0]}</InternalLink>
        },
      }}
    >
      {markdown}
    </MD>
  );

}

function Highlighter({language, code}) {
  return (
    <Prism className={`!mb-5 !mt-1`} language={language} style={style}>
      {code}
    </Prism>
  )
}
