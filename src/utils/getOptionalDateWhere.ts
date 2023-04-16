import { Between, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

export const getOptionalDateWhere = (startDate?: Date, endDate?: Date) => {
  if (startDate && endDate) {
    return Between(startDate, endDate);
  } else if (startDate && !endDate) {
    return MoreThanOrEqual(startDate);
  } else if (endDate && !startDate) {
    return LessThanOrEqual(endDate);
  }
  return undefined;
};
