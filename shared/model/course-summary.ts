export interface CourseSummary {
  readonly id: number;
  readonly url: string;
  description: string;
  iconUrl: string;
  seqNo: number;
  courseListIcon: string;
}

export function createCourseSummary({
  id,
  url,
  description,
  iconUrl,
  courseListIcon,
  seqNo
}: any): CourseSummary {
  return {
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo
  };
}

export function createCourseSummaries(data: CourseSummary[]): CourseSummary[] {
  return data.map(createCourseSummary);
}
