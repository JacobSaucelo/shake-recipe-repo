import strawberry1 from "../../media/images/shakesProd/strawberry1.jpg";
import strawberry2 from "../../media/images/shakesProd/strawberry2.jpg";
import strawberry3 from "../../media/images/shakesProd/strawberry3.jpg";

import {
  ShakeContainer,
  ShakeHeader,
  ShakeProducts,
  Shake,
  ShakeImage,
  BorderDesign,
} from "../../styles/components/shakeSection/shakesSection";
import { DarkBtn, LightBtn } from "../buttons";

const ShakesSection = () => {
  return (
    <ShakeContainer>
      <ShakeHeader>
        {/* <BorderDesign> */}
        <h1>COME AND TRY OUR BEST SELLERS!!</h1>
        {/* </BorderDesign> */}
        <h2>People seem to like Strawberry more.</h2>
      </ShakeHeader>
      <ShakeProducts>
        <Shake>
          <ShakeImage src={strawberry1} />
          <h2>Plain Strawberry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas
            reprehenderit ea.
          </p>
          <LightBtn Text={"Order Now"} />
        </Shake>
        <Shake>
          <ShakeImage src={strawberry2} />
          <h2>200% Strawberry'er</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas
            reprehenderit ea.
          </p>
          <LightBtn Text={"Order Now"} />
        </Shake>
        <Shake>
          <ShakeImage src={strawberry3} />
          <h2>Strawberry Combo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas
            reprehenderit ea.
          </p>
          <LightBtn Text={"Order Now"} />
        </Shake>
      </ShakeProducts>
    </ShakeContainer>
  );
};

export default ShakesSection;
