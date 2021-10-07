import cx from "classnames";

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className={cx(appearance, shape, hover, focus)}>
      Click me
    </button>
  );
}

const appearance =
  "bg-gradient-to-r from-green-400 to-blue-500 font-semibold text-white";
const shape = "px-4 py-3 text-md rounded";
const hover =
  "hover:from-pink-500 hover:to-yellow-500 hover:border-color-pink-500 hover:ring-pink-500 transition-colors";
const focus =
  " focus:ring-offset-2 focus:ring-2 focus:ring-green-400 ring-offset-gray-900";

export default Button;
