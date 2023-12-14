import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
