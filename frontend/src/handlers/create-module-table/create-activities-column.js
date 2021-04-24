import { createAfter } from '../../helpers/create-element.js';
import { weekActivities } from '../../data.js';

export function createActivitiesColumn(parent, idx) {
  const activityData = createAfter(`td`, parent, {
    text: `${weekActivities[idx]}`,
    classList: `activity-data table-data`,
  });

  return activityData;
}
