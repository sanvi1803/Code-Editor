/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";
import axios from 'axios'
import { BASE_URL } from "../../config/helper"
const CodeEditorC = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");
    const fetchCodeForLanguage = async (language) => {
        try {
            const response = await axios.get(`${BASE_URL}/user/get-codes/${language}`, { withCredentials: true });
            console.log(response);
            setValue(response.data.code || CODE_SNIPPETS[language]);
        } catch (error) {
            // console.error("Error fetching code:", error);
            setValue(CODE_SNIPPETS[language]); // Set an empty value in case of an error
        }
    };
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
        fetchCodeForLanguage(language);
    };
    useEffect(() => {
        fetchCodeForLanguage(language);
    }, [language]);
    return (
        <Box className="mt-3">
            <HStack spacing={4}>
                <Box w="50%">
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                        height="75vh"
                        theme="vs-dark"
                        language={language}
                        defaultValue={CODE_SNIPPETS[language]}
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>
        </Box>
    );
};
export default CodeEditorC;