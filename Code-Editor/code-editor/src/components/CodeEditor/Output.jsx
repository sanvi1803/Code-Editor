/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "./api";
import { styled } from "styled-components";
import axios from 'axios'
const Output = ({ editorRef, language }) => {
    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [input, setInput] = useState(""); // New state for user input
    const saveCode = async () => {
        if (!editorRef.current) return;
        const sourceCode = editorRef.current.getValue();
        try {
            await axios.post('http://localhost:8000/user/save-codes', { language, code: sourceCode }, { withCredentials: true });
            toast({
                title: "Code Saved",
                description: "Your code was saved successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error saving code:", error);
            toast({
                title: "Error",
                description: "Failed to save your code. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode, input); // Pass input to executeCode
            setOutput(result.output.split("\n"));
            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
            toast({
                title: "An error occurred.",
                description: error.message || "Unable to run code",
                status: "error",
                duration: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Box w="50%">

            {/* User input textarea */}
            <Textarea1
                placeholder="Enter input here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex gap-4 items-center mb-2">
                <Button
                    variant="outline"
                    colorScheme="green"
                    isLoading={isLoading}
                    onClick={runCode}
                >
                    Run Code
                </Button>
                <Button
                    onClick={saveCode}
                    variant="outline"
                    colorScheme="blue"
                    className="border-2 border-zinc-800 p-1 rounded-md">
                    Save Code
                </Button>
            </div>
            <Text mb={2} fontSize="lg">
                Output
            </Text>
            <Box
                height="40vh"
                p={2}
                color={isError ? "red.400" : ""}
                border="1px solid"
                borderRadius={4}
                borderColor={isError ? "red.500" : "#333"}
                overflow="auto"
            >
                {output
                    ? output.map((line, i) => <Text key={i}>{line}</Text>)
                    : 'Click "Run Code" to see the output here'}
            </Box>
        </Box>
    );
};

export default Output;

const Textarea1 = styled.textarea`
 background-color   : transparent;
 display: block;
 outline: none;
 border: .1px solid #333;
 resize: vertical;
 border-radius: 5px;
 margin-bottom: 20px;
 padding: 8px;
 width: 100%;
 margin-top:90px;
 height: 20vh;
`
// /* eslint-disable react/prop-types */
/*import { useState } from "react";
// import { Box, Button, Text, useToast } from "@chakra-ui/react";
// import { executeCode } from "./api";

// const Output = ({ editorRef, language }) => {
//     const toast = useToast();
//     const [output, setOutput] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);

//     const runCode = async () => {
//         const sourceCode = editorRef.current.getValue();
//         if (!sourceCode) return;
//         try {
//             setIsLoading(true);
//             const { run: result } = await executeCode(language, sourceCode);
//             setOutput(result.output.split("\n"));
//             result.stderr ? setIsError(true) : setIsError(false);
//         } catch (error) {
//             console.log(error);
//             toast({
//                 title: "An error occurred.",
//                 description: error.message || "Unable to run code",
//                 status: "error",
//                 duration: 3000,
//             });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <Box w="50%">
//             <Text mb={2} fontSize="lg">
//                 Output
//             </Text>
//             <Button
//                 variant="outline"
//                 colorScheme="green"
//                 mb={4}
//                 isLoading={isLoading}
//                 onClick={runCode}
//             >
//                 Run Code
//             </Button>
//             <Box
//                 height="75vh"
//                 p={2}
//                 color={isError ? "red.400" : ""}
//                 border="1px solid"
//                 borderRadius={4}
//                 borderColor={isError ? "red.500" : "#333"}
//             >
//                 {output
//                     ? output.map((line, i) => <Text key={i}>{line}</Text>)
//                     : 'Click "Run Code" to see the output here'}
//             </Box>
//         </Box>
//     );
// };
 export default Output;*/

