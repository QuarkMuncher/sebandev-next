import MD from 'react-markdown';
import remarkHint from 'remark-hint';
import { Highlighter } from '../../atoms';

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
          <blockquote className={`relative my-4 px-4 pt-11 pb-1 italic quote bg-gray-100 text-gray-900`}>
            <div className={`absolute z-0 top-[0] lef-0 right-0 py-1 pl-5 w-full bg-gray-200`}>Quote</div>
            <div className={`absolute top-[-1rem] right-[96%] mr-2 hidden md:block text-8xl text-red-300 leading-none select-none`} aria-hidden>&ldquo;</div>
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

