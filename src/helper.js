import { format } from 'date-fns';
import he from 'he';

export default {
  setSmsText(value) {
    return `Hello ${value}, see you tomorrow!`;
  },
  parsePhoneNumber(value) {
    if (typeof value !== 'undefined' && value !== null) {
      return value.map(val => val.value).join(', ');
    }
    return '-';
  },
  getFirstPhoneNumber(value) {
    if (typeof value !== 'undefined' && value !== null) {
      return value[0].value;
    }
    return null;
  },
  formatDate(value, dateFormat) {
    const newDate = new Date(value);
    if (dateFormat) {
      return format(newDate, dateFormat);
    }
    return format(newDate, 'D MMM YYYY');
  },
  htmlDecode(value) {
    if (value) {
      return he.decode(value);
    }
    return null;
  },
};
