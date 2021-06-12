import { Component } from "react";
import { Empty } from "components";
import { Button } from "components/formik";

interface IProps {
  disabled: boolean;
  headers: string[];
  template: any;
  count: number;
  push: (obj: any) => void;
}

class Grid extends Component<IProps> {
  render() {
    return (
      <fieldset>
        <table>
          <thead>
            <tr>
              {this.props.headers.map((header) => (
                <td key={header}>{header}</td>
              ))}
            </tr>
            <tr></tr>
          </thead>
          {this.props.children}
        </table>
        {!this.props.count && <Empty message="No data" />}
        {!this.props.disabled && <Button.Add onClick={() => this.props.push(this.props.template)} />}
      </fieldset>
    );
  }
}

export default Grid;
