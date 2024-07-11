import dayjs from "dayjs";

import { getMailClient } from "../lib/mail";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
dayjs.extend(localizedFormat);

export { dayjs };
