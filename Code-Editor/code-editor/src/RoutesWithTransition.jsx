import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './components/HomePage/HomePage';
import CodeEditor from './components/CodeEditor/CodeEditor';
import CodePenEditor from './components/CodePen/CodePenEditor';
import './App.css'; // For custom CSS transitions

function RoutesWithTransition() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/code-editor" element={<CodeEditor />} />
                    <Route path="/codepen-editor" element={<CodePenEditor />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default RoutesWithTransition;
