import Base from "./Base";
import Grid from "./Grid";
import { InputField, Button } from "components/formik";
import { IAmountOfFees } from "types";

class AmountOfFeesGrid extends Base<IAmountOfFees> {
  headers: string[] = ["Year", "Cost center", "Total amount", "Law firm"];
  template: IAmountOfFees = {
    year: 2021,
    costCenter: "",
    totalAmount: "",
    lawFirm: "",
  };

  render() {
    return (
      <Grid disabled={this.props.disabled} headers={this.headers} template={this.template} count={this.props.values.length} push={this.props.push}>
        <tbody>
          {this.props.values.map((v, index) => (
            <tr key={index}>
              <td>
                <InputField type="number" name={`amountOfFees[${index}].year`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`amountOfFees[${index}].costCenter`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`amountOfFees[${index}].totalAmount`} />{" "}
              </td>
              <td>
                <InputField type="text" name={`amountOfFees[${index}].lawFirm`} />{" "}
              </td>
              <td>{!this.props.disabled && <Button.Remove onClick={() => this.props.remove(index)} />}</td>
            </tr>
          ))}
        </tbody>
      </Grid>
    );
  }
}

export default AmountOfFeesGrid;
