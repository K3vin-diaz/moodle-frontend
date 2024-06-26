import { CoreCourseGetCourses } from "./types";



export class MoodleApi {
  static apiUrl = "https://b56a-187-137-207-66.ngrok-free.app"
  static token: string = "81010a4f0a482ad74f5c0c3319c5c23f";
  static url: string = `${this.apiUrl}/webservice/rest/server.php`;

  static async getCourses(): Promise<CoreCourseGetCourses> {
    return this.get("core_course_get_courses", {});
  }

  static async getCourseById(id: string) {
    return this.get("core_course_get_contents", { courseid: id });
  }

  static async get(endpoint: string, params: Record<string, string>) {
    const url = this.buildUrl(endpoint, params);
    const res = await fetch(url).then(response => response.json());
    return res;
  }

  static buildUrl(endpoint: string, params: Record<string, string>) {
    const builtUrl = new URL(this.url);
    builtUrl.searchParams.append("wstoken", this.token);
    builtUrl.searchParams.append("wsfunction", endpoint);
    builtUrl.searchParams.append("moodlewsrestformat", "json");

    for (const key in params) {
      builtUrl.searchParams.append(key, params[key]);
    }
    return builtUrl.toString();
  }
}

