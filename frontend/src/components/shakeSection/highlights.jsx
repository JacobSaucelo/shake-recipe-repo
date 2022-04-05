import React, { useState } from "react";
import highlightImage from "../../media/images/shakesProd/exotic1.jpg";

import {
  HighlightsContainer,
  HighlightsMenu,
  HighlightsItem,
  Image,
  HighlightsDescription,
} from "../../styles/components/shakeSection/highlightsElements";
import { DarkBtn } from "../buttons";

const Highlights = () => {
  const [position, setPosition] = useState(false);

  return (
    <HighlightsContainer>
      <HighlightsMenu position={position}>
        <HighlightsItem>
          <Image src={highlightImage} alt="highlighted Image" />
        </HighlightsItem>
        <HighlightsItem>
          <HighlightsDescription>
            <h2>TRY OUR ADD-ON'S NOW!</h2>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              itaque aliquid dolore quasi.
            </h5>
            <DarkBtn Text={"I Do Like Some Add-on's."} />
          </HighlightsDescription>
        </HighlightsItem>
      </HighlightsMenu>
    </HighlightsContainer>
  );
};

export default Highlights;
