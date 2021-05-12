import { Icon } from "components";
import { DropdownNavigation } from "components/controls/Dropdown/types";

class Source {
  static createNavigationOptions(): DropdownNavigation.IOption[] {
    return [
      {
        category: "Platform",
        options: [
          {
            value: "Home",
            route: "/home",
            icon: "house",
            prepend: <Icon type="house" />,
          },
          {
            value: "Publications",
            route: "/publications",
            icon: "publications",
            prepend: <Icon type="publications" />,
          },
          {
            value: "People",
            route: "/people",
            icon: "people",
            prepend: <Icon type="people" />,
          },
          {
            value: "Entities",
            route: "/entities",
            icon: "entities",
            prepend: <Icon type="entities" />,
          },
          {
            value: "Administration",
            route: "/administration",
            icon: "administration",
            prepend: <Icon type="administration" />,
          },
        ],
      },
      {
        category: "Workspace",
        options: [
          {
            value: "Client contract",
            route: "/clientContract",
            icon: "publications",
            prepend: <Icon type="publications" />,
          },
          {
            value: "Supplier contract",
            route: "/supplierContract",
            icon: "publications",
            prepend: <Icon type="publications" />,
          },
          {
            value: "Corporate",
            route: "/corporate",
            icon: "entities2",
            prepend: <Icon type="entities2" />,
          },
          {
            value: "Group Norms",
            route: "/groupNorms",
            icon: "ecosystem",
            prepend: <Icon type="ecosystem" />,
          },
          {
            value: "Real estate contracts",
            route: "/realEstateContracts",
            icon: "ecosystem",
            prepend: <Icon type="ecosystem" />,
          },
        ],
      },
    ];
  }
}

export default Source;
