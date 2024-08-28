import styled from 'styled-components'
import CodeEditorC from './CodeEditorContainers'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaCodepen } from "react-icons/fa";
function CodeEditor() {
    return (
        <ChakraProvider theme={theme}>
            <Link to="/">
                <FaCodepen className='text-[#e6e1e1] text-3xl z-10 ml-[80px]  fixed top-2' />
            </Link>
            <Box className='min-h-[100vh] bg-[#151517] text-gray-400 px-6 py-8'>
                <CodeEditorC />
            </Box>
        </ChakraProvider>
    )
}

export default CodeEditor
const Box = styled.div`
    
`