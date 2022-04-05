import smoothie1 from "../media/images/hero/heroSmoothie1.png";
import smoothie2 from "../media/images/hero/heroSmoothie2.png";

import {
  HeroContainer,
  HeroDescription,
  HeaderImage,
} from "../styles/components/heroElements";
import { DarkBtn, LightBtn } from "./buttons";

const Hero = () => {
  return (
    <HeroContainer>
      <HeaderImage src={smoothie2} alt="strawberry smoothie" />
      <HeroDescription>
        <h4>Shake Recipes!</h4>
        <h5>Lorem ipsum consectetur adipisicing elit.</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta est
          vitae omnis sunt quas.
        </p>
        <DarkBtn Text={"Check Recipes"} Path={"/dashboard"} />
      </HeroDescription>
    </HeroContainer>
  );
};

export default Hero;
