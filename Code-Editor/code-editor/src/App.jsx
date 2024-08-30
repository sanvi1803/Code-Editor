// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import HomePage from './components/HomePage/HomePage';
// import CodeEditor from './components/CodeEditor/CodeEditor';
// import CodePenEditor from './components/CodePen/CodePenEditor';
// import Register from './components/Authentication/Register';
// import Login from './components/Authentication/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/code-editor" element={<CodeEditor />} />
//         <Route path="/codepen-editor" element={<CodePenEditor />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import CodeEditor from './components/CodeEditor/CodeEditor';
import CodePenEditor from './components/CodePen/CodePenEditor';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ProtectedRoute from './components/Authentication/ProtectedRoute'
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/user/code-editor" element={
            <ProtectedRoute>
              <CodeEditor />
            </ProtectedRoute>
          } />
          <Route path="/user/codepen-editor" element={
            <ProtectedRoute>
              <CodePenEditor />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
