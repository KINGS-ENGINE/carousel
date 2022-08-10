import { motion } from "framer-motion";

const MenuToggler = ({ toggle }) => {
  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path
          d="M 2 2.5 L 20 2.5"
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
        />
        <path
          d="M 2 9.423 L 20 9.423"
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
        />
        <path
          d="M 2 16.346 L 20 16.346"
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
export default MenuToggler;
