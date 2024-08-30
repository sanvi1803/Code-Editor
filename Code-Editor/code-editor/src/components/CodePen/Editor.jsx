/* eslint-disable react/prop-types */
import { useState } from 'react'
import styled from 'styled-components';
import { MdCloseFullscreen } from "react-icons/md";
import { Controlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import '../App.css'

function Editor({ heading, logo, value, onChange }) {
    const [open, setOpen] = useState(true);
    // handleChange by default take below three values
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <>
            <Container style={open ? null : { flexGrow: 0 }}>
                <Box className='flex items-center justify-between bg-[#000] text-white font-medium rounded-br-md rounded-bl-md'>
                    <Box className='flex items-center bg-[#1d1e22] py-1 px-2 gap-2 rounded-tr-md rounded-tl-md'>
                        <Box className='w-5 h-5 items-center flex justify-center rounded-md'>
                            {logo}
                        </Box>
                        {heading}
                    </Box>
                    <MdCloseFullscreen
                        className='cursor-pointer font-sm'
                        onClick={() => setOpen(prevState => !prevState)}
                    />
                </Box>
                <CodeMirror
                    className='controlled-editor'
                    value={value}
                    onBeforeChange={handleChange}
                    options={
                        {
                            theme: 'material',
                            lineNumbers: true,
                        }
                    }
                />
            </Container>
        </>
    )
}

export default Editor
const Container = styled.div`
    flex-grow: 1;
    padding: 0 8px 8px;
`;

const Box = styled.div`
    
`