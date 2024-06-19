import { Box } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";
import { MoreAbout } from "./MoreAbout/MoreAbout";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <Box bg={'#F4F4F4'}>

          <Header/>
          <Box h={650}>

          <HeroSection />

          </Box>
          <Stats/>
          <Box bg={'#F4F4F4'}>

            <MoreAbout />

          </Box>
          <WhyChooseUs/>
        
      </Box>
    
    </>
  );
}

export default App;
