import { IPropsals, IInternalCorrespondants, IInternalReviews, IAmountOfFees } from "types";

export const expertise: string[] = ["Mergers and acquisition"];

export const specialities: string[] = ["Cross border operation", "Transition over 500M"];

export const admissionToPracticeLaw: string[] = ["Paris bar association", "Tunisian bar association"];

export const counties: string[] = ["Tunisia"];

export const internalCorrespondants: IInternalCorrespondants[] = [
  {
    firstname: "John",
    lastName: "Doe",
  },
  {
    firstname: "Mike",
    lastName: "Doe",
  },
];

export const propsals: IPropsals[] = [
  {
    name: "Operation time",
    entity: "Renault Corporation",
    location: "France",
    expertise: "#Tax",
    date: "2018-01-20",
    firm: "	Racine",
  },
  {
    name: "Op. Promtech",
    entity: "Renault HQ",
    location: "USA",
    expertise: "#M&A",
    date: "2019-02-18",
    firm: "	Clifford chance",
  },
  {
    name: "Op. Latandre",
    entity: "Renault Breslau",
    location: "Germany",
    expertise: "#Social",
    date: "2019-02-18",
    firm: "	SVZ",
  },
];

export const internalReviews: IInternalReviews[] = [
  {
    name: "Operation time",
    entity: "Renault Corporation",
    location: "France",
    expertise: "#Tax",
    date: "2018-01-20",
  },
  {
    name: "Op. Promtech",
    entity: "Renault HQ",
    location: "USA",
    expertise: "#M&A",
    date: "2019-02-18",
  },
  {
    name: "Op. Latandre",
    entity: "Renault Breslau",
    location: "Germany",
    expertise: "#Social",
    date: "2019-02-18",
  },
];

export const amountOfFees: IAmountOfFees[] = [
  {
    year: 2019,
    costCenter: "CS 153",
    totalAmount: "$3,500",
    lawFirm: "Clifford chance",
  },
  {
    year: 2018,
    costCenter: "CS 153",
    totalAmount: "$9,500",
    lawFirm: "Linklaters",
  },
  {
    year: 2017,
    costCenter: "CS 47",
    totalAmount: "$10,500",
    lawFirm: "Linklaters",
  },
  {
    year: "",
    costCenter: "CS 153",
    totalAmount: "$18,500",
    lawFirm: "Linklaters",
  },
  {
    year: "",
    costCenter: "CS 32",
    totalAmount: "$15,500",
    lawFirm: "Linklaters",
  },
];
