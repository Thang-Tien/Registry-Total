import cx from "classnames";

import styles from "./index.module.scss";

export type Props = {
  className?: string;
  style?: React.CSSProperties;

  title: string;
} & React.ButtonHTMLAttributes<HTMLElement>;

export default function Underline({
  className,
  style,
  title,
  ...others
}: Props) {
  return (
    <div className={cx(className, styles.container)} style={style} {...others}>
      <button className={styles.button}>
        <div className={styles.title}>{title}</div>
      </button>
    </div>
  );
}
