import { Component } from "react";
import { IProps } from "./types";

abstract class Base<T> extends Component<IProps<T>> {
  abstract headers: string[];
  abstract template: T;
}

export default Base;
