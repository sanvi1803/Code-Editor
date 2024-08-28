import Editor from './Editor'
import styled from 'styled-components';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
function Code() {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)
    return (
        <Container>
            <Editor
                heading="HTML"
                logo={<FaHtml5 className='text-white text-lg' />}
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading="CSS"
                logo={<FaCss3 className='text-white text-lg' />}
                value={css}
                onChange={setCss}
            />
            <Editor
                heading="JavaScript"
                logo={<RiJavascriptFill className='text-white text-lg' />}
                value={js}
                onChange={setJs}
            />
        </Container>
    )
}

export default Code
const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #000;
    height: 52vh;
`