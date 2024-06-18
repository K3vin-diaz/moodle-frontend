// import axios from 'axios';

import { CoreCourseGetCourses } from "./types";

// const api = axios.create({
//     baseURL: ''
// });

// http://localhost:8200/webservice/rest/server.php?wstoken=c80dc771088c9d13314c4251302fef9b&wsfunction=core_user_get_users&criteria[0][key]=email&criteria[0][value]=user@example.com&moodlewsrestformat=json

export class MoodleApi {
  private token: string;
  private url: string;

  constructor(token: string, url: string) {
    this.token = token;
    this.url = url;
  }

  async getCourses(): Promise<CoreCourseGetCourses> {
    return this.get("core_course_get_courses", {});
  }

  async get(endpoint: string, params: Record<string, string>) {
    const url = new URL(this.url);
    url.searchParams.append("wstoken", this.token);
    url.searchParams.append("wsfunction", endpoint);
    url.searchParams.append("moodlewsrestformat", "json");

    for (const key in params) {
      url.searchParams.append(key, params[key]);
    }

    const res = await fetch(url.toString());
    const data = await res.json();
    return data;
  }
}
