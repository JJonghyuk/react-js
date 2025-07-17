import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  font-size: 32px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              key={i}
              variants={box}
              initial="invisible"
              animate="visible"
              exit="exit"
            >
              {i}
            </Box>
          ) : null,
        )}
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
