import { createAndAttach } from "../../helpers/create-and-attach.js";
import { weekActivities } from "../../data.js";

export function createActivitiesColumn(parent, idx) {
  const activityData = createAndAttach(`td`, parent, `after`, {
    text: `${weekActivities[idx]}`,
    classList: `activity-data table-data`,
  });

  return activityData;
}
