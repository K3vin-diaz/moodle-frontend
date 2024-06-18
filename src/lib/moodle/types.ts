export type CoreCourseGetCourses = {
  id: number;
  shortname: string;
  categoryid: number;
  categorysortorder: number;
  fullname: string;
  displayname: string;
  idnumber: string;
  summary: string;
  summaryformat: number;
  format: string;
  showgrades: number;
  newsitems: number;
  startdate: number;
  enddate: number;
  numsections: number;
  maxbytes: number;
  showreports: number;
  visible: number;
  groupmode: number;
  groupmodeforce: number;
  defaultgroupingid: number;
  timecreated: number;
  timemodified: number;
  enablecompletion: number;
  completionnotify: number;
  lang: string;
  forcetheme: string;
  courseformatoptions: Courseformatoption[];
  showactivitydates: boolean;
  showcompletionconditions: null;
}[];

export type Course = CoreCourseGetCourses[number];

export interface Courseformatoption {
  name: string;
  value: number;
}
