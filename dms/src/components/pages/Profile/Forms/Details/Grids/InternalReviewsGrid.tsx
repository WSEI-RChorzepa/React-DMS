import Base from "./Base";
import Grid from "./Grid";
import { InputField, Button } from "components/formik";
import { IInternalReviews } from "types";

class InternalReviewsGrid extends Base<IInternalReviews> {
  headers: string[] = ["Name", "Entity", "Location", "Expertise", " Date"];
  template: IInternalReviews = {
    name: "",
    entity: "",
    location: "",
    expertise: "",
    date: "",
  };

  render() {
    return (
      <Grid disabled={this.props.disabled} headers={this.headers} template={this.template} count={this.props.values.length} push={this.props.push}>
        <tbody>
          {this.props.values.map((v, index) => (
            <tr key={index}>
              <td>
                <InputField type="text" name={`internalReviews[${index}].name`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`internalReviews[${index}].entity`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`internalReviews[${index}].location`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`internalReviews[${index}].expertise`} />{" "}
              </td>
              <td>
                <InputField type="date" name={`internalReviews[${index}].date`} />{" "}
              </td>
              <td>{!this.props.disabled && <Button.Remove onClick={() => this.props.remove(index)} />}</td>
            </tr>
          ))}
        </tbody>
      </Grid>
    );
  }
}

export default InternalReviewsGrid;
