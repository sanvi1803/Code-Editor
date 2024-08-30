/* eslint-disable no-unused-vars */
import Editor from './Editor'
import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import debounce from 'lodash/debounce'
function Code() {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)
    useEffect(() => {
        // Fetch the saved code when the component mounts
        const fetchCode = async () => {
            try {
                const response = await axios.get('https://code-editor-backend-7e6i.onrender.com/user/get-code', { withCredentials: true });
                const { html, css, js } = response.data;
                console.log('Response Data:', response.data);
                setHtml(html);
                setCss(css);
                setJs(js);
            } catch (error) {
                console.error('Error fetching code:', error);
            }
        };

        fetchCode();
    }, [setHtml, setCss, setJs]);
    useEffect(() => {
        const saveCodeDebounced = debounce(async () => {
            try {
                await axios.post('https://code-editor-backend-7e6i.onrender.com/user/save-code', { html, css, js }, { withCredentials: true });
            } catch (error) {
                console.error('Error saving code:', error);
            }
        }, 1000); // Save code after 1 second of inactivity

        saveCodeDebounced();

        return () => {
            saveCodeDebounced.cancel();
        };
    }, [html, css, js]);

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