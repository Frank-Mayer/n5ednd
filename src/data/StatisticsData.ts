import { StatisticsModel } from "../model/Statistics";

let statisticsData: StatisticsModel & {
  [key in keyof StatisticsModel]: StatisticsModel[key];
};

export const getStatisticsData = () => statisticsData;

export const setStatisticsData = (data: Partial<StatisticsModel>) => {
  statisticsData = new StatisticsModel(data);
};

(window as any).getStatisticsData = getStatisticsData;

setStatisticsData({});
