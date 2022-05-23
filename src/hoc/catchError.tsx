import React from 'react';
import { message } from 'antd';
import fundebug from 'fundebug-javascript';

export default function catchError<T>(Com: React.ComponentType<T>) {
  return class ErrorBoundary extends React.Component<T, {}> {
    componentDidCatch(error: Error, info: React.ErrorInfo) {
        message.warn('页面出错了,请刷新页面后再试!', 2000);
      fundebug.notifyError(error, {
        metaData: {
          info,
        },
      });
    }

    render() {
      return <Com {...this.props} />;
    }
  };
}
