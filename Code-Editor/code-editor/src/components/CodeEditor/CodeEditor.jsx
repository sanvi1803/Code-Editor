import styled from 'styled-components'
import CodeEditorC from './CodeEditorContainers'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaCodepen } from "react-icons/fa";
function CodeEditor() {
    return (
        <ChakraProvider theme={theme}>
            <Link to="/home">
                <FaCodepen className='text-[#e6e1e1] text-3xl z-10 ml-[80px]  fixed top-2' />
            </Link>
            <button className='text-white px-2 py-1 absolute right-4 top-3 rounded-md border border-gray-400 hover:bg-[#dcd4781d]bg-[#dcd4781d] hover:text-[#dcd478] hover:border-transparent duration-200'>
                <Link to="/user/codepen-editor">CodePen Editor</Link>
            </button>
            <Box className='min-h-[100vh] bg-[#151517] text-gray-400 px-6 py-8'>
                <CodeEditorC />
            </Box>
        </ChakraProvider>
    )
}

export default CodeEditor
const Box = styled.div`
    
`