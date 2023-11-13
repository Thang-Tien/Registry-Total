import cx from "classnames";
import styles from "./index.module.scss";
import Flex from "@/modules/ui/components/Flex";
import NavBar from "../NavBar";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function HomePage({ className, style }: Props) {
  return <div className={cx(className, styles.container)} style={style}>
    <Flex.Row>
      <NavBar active="centers" />
    </Flex.Row>
  </div>;
}
