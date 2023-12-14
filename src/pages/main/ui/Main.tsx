import { FC } from "react";

import styles from "./styles.module.scss";
import "@/shared/lib/web-components";

type MainProps = {
  className?: string;
};

export const Main: FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <title-component></title-component>
    </div>
  );
};
