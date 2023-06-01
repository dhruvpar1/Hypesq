import { motion } from "framer-motion";
import { HypeSQBLogo, HypeSQLogo } from "../../../Assets/svg";
import { ourPastWorqData } from "./data";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import "./styles.css";

const PastWorq = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(-1);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(-1);
  };
  return (
    <div className="landing-wrapper-worq">
      <div
        className="landing-left-worq"
        style={{
          backgroundColor: `${
            hoveredIdx === -1 ? "white" : ourPastWorqData[hoveredIdx]?.bgColor
          }`,
        }}
      >
        <div>
          <motion.h1
            className="heading-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Past
          </motion.h1>
          <motion.h1
            className="heading-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div>wor</div>
              <div style={{ marginTop: "28px" }}>
                <HypeSQLogo width={132} />
              </div>
            </div>
          </motion.h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {ourPastWorqData.map((i, k) => (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                // color: `${bgColor !== "" && "white"}`,
              }}
              onMouseEnter={() => handleMouseEnter(k)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ marginRight: "10px", cursor: "pointer" }}>
                {hoveredIdx == k ? (
                  <FiArrowUpRight style={{ color: "white" }} />
                ) : (
                  <AiOutlineArrowRight />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: `${hoveredIdx === k ? "white" : "black"}`,
                }}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {i.headingText}
                </p>
                <p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  {i.descriptionText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="landing-right">some image</div>
    </div>
  );
};

export default PastWorq;
