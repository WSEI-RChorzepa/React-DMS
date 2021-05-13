import { IWorkspaceTileProps } from "./types";
import contract from "assets/images/contract.jpg";
import office from "assets/images/office.jpg";
import estate from "assets/images/estate.jpg";

const Source: IWorkspaceTileProps[] = [
  {
    icon: "publications",
    title: "Client contract",
    backgroundImage: contract,
  },
  {
    icon: "publications",
    title: "Supplier contract",
    backgroundImage: contract,
  },
  {
    icon: "entities",
    title: "Corporate",
    backgroundImage: office,
  },
  {
    icon: "ecosystem",
    title: "Group norms",
    backgroundImage: estate,
  },
  {
    icon: "ecosystem",
    title: "Real Estate contracts",
    backgroundImage: estate,
  },
  {
    icon: "publications",
    title: "Client contract 2",
    backgroundImage: contract,
  },
  {
    icon: "publications",
    title: "Client contract 3",
    backgroundImage: contract,
  },
];

export default Source;
