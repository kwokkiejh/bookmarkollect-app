import axios from "axios";

const address = "http://localhost:8000";

export function getAllBookmarks() {
  var link = address + "/getAllBookmarks";
  return axios.get(link);
}
