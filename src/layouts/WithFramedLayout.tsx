/* eslint-disable react/prop-types */
import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import  "../styles/main.scss";

const WithFramedLayout: React.FunctionComponent<
  RouteConfigComponentProps<void>
> = (props: any) => {
  const { route } = props;
  return (
    <div>
      <div className='mainWrap'>
        {route && renderRoutes(route.routes)}
      </div>
    </div>
  );
};
export default WithFramedLayout;
