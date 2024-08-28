import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import styled from 'styled-components';
function Result() {
    const { html, css, js } = useContext(DataContext);
    const srcCode = `
        <html>
        <style>${css}</style>
        <body>${html}</body>
        <script>${js}</script>
        </html>
    `
    return (
        <Box>
            <iframe
                srcDoc={srcCode}
                title="Output"
                sandbox='allow-scripts'
                width='100%'
                height='100%'
            />
        </Box>
    )
}

export default Result
const Box = styled.div`
    padding-top: 1vw;
    height:39vh;
`

