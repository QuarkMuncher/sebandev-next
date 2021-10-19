import MD from 'react-markdown';
import {Prism} from 'react-syntax-highlighter';
import style from './style';
import {ExternalLink, InternalLink} from "../../atoms";

export default function Markdown({markdown}) {
  return (
    <MD
      components={{
        h2: ({children}) => {
          return (<h2 className={`text-2xl mb-1 mt-2`}>{children}</h2>);
        },
        h3: ({children}) => {
          return (<h3 className={`text-xl mb-1 mt-2`}>{children}</h3>);
        },
        ul: ({children}) => {
          return (<ul className={`list-disc pl-6`}>{children}</ul>);
        },
        p: ({children}) => {
          return(<p className={`my-1`}>{children}</p>);
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
        a: ({href, children, ...props}) => {
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

function Highlighter({language, code, PreTag}) {
  return (
    <Prism language={language} style={style} PreTag={PreTag}>
      {code}
    </Prism>
  )
}
