import { LightButton, DarkButton } from "../styles/components/buttonsElements";

export const LightBtn = ({ Text, Path }) => {
  return (
    <LightButton to={Path || "/"}>
      {Text ? Text.toString() : "light btn"}{" "}
    </LightButton>
  );
};

export const DarkBtn = ({ Text, Path }) => {
  return (
    <DarkButton to={Path || "/"}>
      {Text ? Text.toString() : "dark btn"}
    </DarkButton>
  );
};
