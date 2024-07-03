import { memo, useCallback, useEffect } from "react";
import KeyboardButton from "../keyboard-button";
import "./style.css";

const keys = "abcdefghijklmnopqrstuvwxyz".split("");
const Keyboard = memo(({ onKeyClick, onReset, disabledKeys }) => {
  const handleKeyOnClick = useCallback(
    (event) => {
      const key = event.target.value;
      onKeyClick(key); // Pass the clicked key directly
    },
    [onKeyClick]
  );

  const handleKeyOnPress = useCallback(
    (event) => {
      event.preventDefault();
      const key = event.key; // Use event.key directly

      /**
       * RESET
       * 8 = backspace
       * 13 = enter
       * 32 = space
       */
      const code = event.keyCode || event.which;
      if (code === 8 || code === 13 || code === 32) {
        onReset();
      } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        onKeyClick(key); // Pass the key directly
      }
    },
    [onKeyClick, onReset]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyOnPress);
    return () => document.removeEventListener("keyup", handleKeyOnPress);
  }, [handleKeyOnPress]);

  return (
    <div className="keyboard">
      <div className="letters">
        {keys.map((key) => (
          <KeyboardButton
            key={key}
            value={key} // Use lowercase key for value
            disabled={disabledKeys.includes(key)}
            onClick={handleKeyOnClick}
          />
        ))}
      </div>
      <KeyboardButton value="reset" text="Reset" onClick={onReset} />
    </div>
  );
});

export default Keyboard;