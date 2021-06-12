import Base from "./Base";
import Grid from "./Grid";
import { InputField, Button } from "components/formik";
import { IPropsals } from "types";

class PropsalsGrid extends Base<IPropsals> {
  headers: string[] = ["Name", "Entity", "Location", "Expertise", " Date", "Firm"];
  template: IPropsals = {
    name: "",
    entity: "",
    location: "",
    expertise: "",
    date: "",
    firm: "",
  };

  render() {
    return (
      <Grid disabled={this.props.disabled} headers={this.headers} template={this.template} count={this.props.values.length} push={this.props.push}>
        <tbody>
          {this.props.values.map((v, index) => (
            <tr key={index}>
              <td>
                <InputField type="text" name={`propsals[${index}].name`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`propsals[${index}].entity`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`propsals[${index}].location`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`propsals[${index}].expertise`} />{" "}
              </td>
              <td>
                <InputField type="date" name={`propsals[${index}].date`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`propsals[${index}].firm`} />{" "}
              </td>
              <td>{!this.props.disabled && <Button.Remove onClick={() => this.props.remove(index)} />}</td>
            </tr>
          ))}
        </tbody>
      </Grid>
    );
  }
}

export default PropsalsGrid;
