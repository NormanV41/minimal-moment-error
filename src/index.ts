import { tz } from "moment-timezone";

const dateString = "Sun, 26 Jul 2020 17:38:18 GMT";

const dateFormat = "ddd, DD MMM YYYY HH:mm:ss zz";

const timezone = "America/Costa_Rica";

const date = tz(dateString, dateFormat, timezone);

const badDateJSON = date.toJSON();

const expectedDateJSON = (date as any)._d.toJSON();

console.log(badDateJSON, expectedDateJSON);
