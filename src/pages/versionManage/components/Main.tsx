import React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { inject, observer } from "mobx-react";
import Login from "./login";
import MainStore from "../stores/MainStore";
import styles from "./main.module.scss";
interface IMainProps extends RouteConfigComponentProps<void> {
  mainStore?: MainStore;
}
const Main = (props: IMainProps) => {
  const { mainStore } = props;
  const { pageTitle } = mainStore as MainStore;
  return (
    <div className={styles.contWrap}>
      <div className={styles.titleWrap}>{pageTitle}</div>
      <Login />
    </div>
  );
};
export default inject("mainStore")(observer(Main));
