import Base from "./Base";
import Grid from "./Grid";
import { FaComment, FaUserAlt } from "react-icons/fa";
import { Button as ButtonComponent } from "components";
import { InputField, Button } from "components/formik";
import { IInternalCorrespondants } from "types";

class InternalCorrespondantsGrid extends Base<IInternalCorrespondants> {
  headers: string[] = ["First name", "Last name"];
  template: IInternalCorrespondants = {
    firstname: "",
    lastName: "",
  };

  render() {
    return (
      <Grid disabled={this.props.disabled} headers={this.headers} template={this.template} count={this.props.values.length} push={this.props.push}>
        <tbody>
          {this.props.values.map((v, index) => (
            <tr key={index}>
              <td>
                <InputField type="text" name={`internalCorrespondants[${index}].firstname`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`internalCorrespondants[${index}].lastName`} />{" "}
              </td>
              <td>
                <ButtonComponent variant="primary">
                  <FaComment /> Message
                </ButtonComponent>
              </td>
              <td>
                <ButtonComponent variant="primary">
                  <FaUserAlt /> Profile
                </ButtonComponent>
              </td>
              <td>{!this.props.disabled && <Button.Remove onClick={() => this.props.remove(index)} />}</td>
            </tr>
          ))}
        </tbody>
      </Grid>
    );
  }
}

export default InternalCorrespondantsGrid;
