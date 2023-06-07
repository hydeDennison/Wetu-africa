import { motion } from "framer-motion";
import styled from "styled-components";
import { WavingHandIcon } from "../resources/icons";
import { wavingHandVariant, wavingHandWhileHover } from "../resources/variants";

const WavingHand = () => {
  return (
    <StyledWavingHand
      variants={wavingHandVariant}
      initial="initial"
      animate="animate"
      whileHover={wavingHandWhileHover}
    >
      <WavingHandIcon />
    </StyledWavingHand>
  );
};

const StyledWavingHand = styled(motion.div)`
  width: 80px;
  height: 80px;
  position: fixed;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00277a;
  z-index: 30;
  border-radius: 50%;
  bottom: 50px;
  right: 70px;
`;

export default WavingHand;
