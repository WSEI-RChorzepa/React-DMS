import { IWorkspaceState } from "store";
import contract from "assets/images/contract.jpg";
import office from "assets/images/office.jpg";
import estate from "assets/images/estate.jpg";

const data: IWorkspaceState = {
  workspaces: [
    {
      id: 1,
      title: "Client contract",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus nunc diam, laoreet non eleifend eget, volutpat in tellus. 
        Nulla facilisi. Cras vitae nisi ante. Sed volutpat erat ex, in aliquet turpis consequat pellentesque. 
        Curabitur in ullamcorper est, non commodo sem. Nullam ultricies quis nisl eu tincidunt. 
        Cras consectetur lacinia purus, sed finibus sapien tincidunt at. Donec a blandit nibh. 
        Integer consequat et nibh id efficitur. In euismod mollis fringilla. Nulla dignissim sagittis elit, non pharetra eros hendrerit nec. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
        Donec sodales massa quis justo vulputate porttitor. Sed scelerisque neque lacus, ac sagittis erat viverra a. 
        Sed felis velit, fringilla sed augue eget, scelerisque aliquet dui.`,
      backgroundImage: contract,
      icon: "publications",
    },
    {
      id: 2,
      title: "Supplier contract",
      body: `Aliquam vitae magna non mauris euismod euismod. 
        Nunc pulvinar dui in condimentum dictum. Etiam vitae est vulputate, fermentum tortor eu, mattis sem. 
        Nulla facilisi. Nullam volutpat quam ac commodo feugiat. Nunc vel ante ut turpis placerat eleifend. 
        Fusce ullamcorper eros vitae erat aliquet posuere. Nam posuere sagittis metus eu interdum.`,
      backgroundImage: contract,
      icon: "publications",
    },
    {
      id: 3,
      title: "Corporate",
      body: `Quisque lacinia pharetra est eget tincidunt. 
        Pellentesque cursus, turpis sed blandit imperdiet, lorem ex mattis arcu, non iaculis mauris metus sit amet est. 
        Ut dictum lectus vel commodo rutrum. Vestibulum tempor egestas aliquam. 
        Nam malesuada tristique urna, id feugiat lacus facilisis id. 
        Suspendisse ac leo elit. Morbi ac velit ac odio scelerisque porttitor. Cras ornare mi vel euismod mollis. 
        Aliquam facilisis massa a erat aliquam, non tincidunt augue laoreet. Aliquam accumsan nunc ac rhoncus mattis. 
        Nam ac erat bibendum, imperdiet turpis at, dictum sapien. Proin blandit ultrices lectus vel ullamcorper. 
        Ut et tortor vel sem vestibulum consequat id at turpis. 
        Nunc venenatis, justo eu efficitur sodales, tortor ante fermentum tortor, sed consequat mauris nisi eu augue.`,
      backgroundImage: office,
      icon: "entities",
    },
    {
      id: 4,
      title: "Group norms",
      body: `Fusce facilisis nunc sed commodo tempor. 
        Vestibulum malesuada justo eu condimentum pellentesque. 
        Pellentesque commodo massa at scelerisque convallis. 
        Ut tincidunt augue quis eleifend viverra. 
        Vestibulum dictum, magna vitae tincidunt volutpat, tortor tortor laoreet mauris, vitae scelerisque tellus turpis id magna. In id est diam. 
        Nullam quis mattis est, nec fermentum odio. Suspendisse elit orci, semper mollis turpis non, imperdiet iaculis nisi. 
        Integer sodales condimentum erat, in condimentum sapien faucibus eu. 
        Quisque ultricies pellentesque nisi consequat accumsan.`,
      backgroundImage: estate,
      icon: "ecosystem",
    },
    {
      id: 5,
      title: "Real Estate contracts",
      body: `Sed facilisis ultricies tortor. Aenean leo erat, sagittis vel odio efficitur, fringilla scelerisque mauris.
         Nunc at fermentum tellus. Morbi tempus libero lacus, quis scelerisque urna pretium vel. 
         Nullam dapibus quam congue, auctor est vitae, tincidunt lectus. Donec scelerisque urna vel nisl dignissim faucibus. 
        Cras commodo urna nec volutpat pulvinar. Nunc tempus feugiat arcu quis porttitor.`,
      backgroundImage: estate,
      icon: "ecosystem",
    },
    {
      id: 6,
      title: "Client contract 2",
      body: `Suspendisse a sollicitudin dolor, eu aliquet nibh. Vivamus suscipit rhoncus gravida. Nulla sed ex et neque faucibus scelerisque ac a ante. 
        Aenean rhoncus quam non massa sodales, vitae rutrum ligula luctus. Integer cursus,
         leo in tincidunt maximus, elit est faucibus nibh, eu pharetra eros leo a enim. 
        Maecenas vestibulum lorem quam, eu ullamcorper felis rutrum eu. In at quam blandit ligula consequat interdum nec porttitor odio.`,
      backgroundImage: contract,
      icon: "publications",
    },
    {
      id: 7,
      title: "Client contract 3",
      body: `Suspendisse a sollicitudin dolor, eu aliquet nibh. Vivamus suscipit rhoncus gravida. Nulla sed ex et neque faucibus scelerisque ac a ante. 
          Aenean rhoncus quam non massa sodales, vitae rutrum ligula luctus. Integer cursus,
           leo in tincidunt maximus, elit est faucibus nibh, eu pharetra eros leo a enim. 
          Maecenas vestibulum lorem quam, eu ullamcorper felis rutrum eu. In at quam blandit ligula consequat interdum nec porttitor odio.`,
      backgroundImage: contract,
      icon: "publications",
    },
  ],
};

export default data;
