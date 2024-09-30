import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)

// We deleted reactmode in order to avoid duplication of code editor
const circle = document.querySelector('.circle');

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();