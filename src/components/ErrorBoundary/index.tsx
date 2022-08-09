import * as React from "react";

type Props = {
  children: React.ReactNode;
  errorChildren: React.ReactNode | ((baseError: BaseError) => React.ReactNode);
};
export type BaseError = {
  error?: Error;
  info?: React.ErrorInfo;
};
type State = BaseError & {
  hasError: boolean;
};

export class ErrorBoundary extends React.PureComponent<Props, State> {
  static defaultProps = {
    errorChildren: () => null,
  };

  state = {
    hasError: false,
    error: undefined,
    info: undefined,
  };

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    const { children, errorChildren } = this.props;
    const { hasError, error, info } = this.state;

    if (hasError) {
      return typeof errorChildren === "function"
        ? errorChildren({ error, info })
        : errorChildren;
    }

    return children;
  }
}
