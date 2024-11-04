import PropTypes from "prop-types";

export default function Button({ children }) {
  return (
    <div className="bg-gradient-to-r to-pink-500  from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 delay-200 ">
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};
