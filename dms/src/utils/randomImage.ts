import TaskImage_1 from "assets/images/task/1.jpg";
import TaskImage_2 from "assets/images/task/2.jpg";
import TaskImage_3 from "assets/images/task/3.jpg";
import TaskImage_4 from "assets/images/task/4.jpg";
import TaskImage_5 from "assets/images/task/5.jpg";

export const getRandomTaskImage = (): string => {
  const randomId = Math.floor(Math.random() * (5 - 1)) + 1;
  const images = [TaskImage_1, TaskImage_2, TaskImage_3, TaskImage_4, TaskImage_5];

  return images[randomId];
};
