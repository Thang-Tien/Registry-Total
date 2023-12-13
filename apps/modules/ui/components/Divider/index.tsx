import cx from "classnames";
import * as React from "react";

import styles from "./index.module.scss";

const COLOR_TO_CLASS_NAME = {
  white: styles.colorWhite,
  white50: styles.colorWhite50,
  black: styles.colorBlack,
};

type Props = {
  className?: string;
  style?: React.CSSProperties;

  color?: keyof typeof COLOR_TO_CLASS_NAME;
};

function Horizontal({ className, style, color = "black" }: Props) {
  return (
    <hr
      className={cx(
        styles.divider,
        styles.horizontal,
        COLOR_TO_CLASS_NAME[color],
        className
      )}
      style={style}
    ></hr>
  );
}

function Vertical({ className, style, color = "black" }: Props) {
  return (
    <hr
      className={cx(
        styles.divider,
        styles.vertical,
        COLOR_TO_CLASS_NAME[color],
        className
      )}
      style={style}
    ></hr>
  );
}

const Divider = { Horizontal, Vertical };

export default Divider;
