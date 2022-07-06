import Navbar from "./components/Navbar";
import { Box } from '@chakra-ui/react'
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <Box >
      <Navbar />
      <Hero />
      <Productive />
      <Subscribe />
      <Footer />
    </Box>
  );
}

export default App;
