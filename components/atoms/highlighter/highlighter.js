import {PrismLight as Prism} from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import style from './style';

const languages = [
    ['javascript', javascript],
    ['bash', bash],
    ['css', css],
    ['scss', scss],
    ['json', json]
];

export default function Highlighter({language, code}) {
    languages.forEach(language => {
        const [name, definition] = language;
        Prism.registerLanguage(name, definition);
    });

    return (
        <Prism className={`!mb-5 !mt-1`} language={language} style={style}>
            {code}
        </Prism>
    )
}
