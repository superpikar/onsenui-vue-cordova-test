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
};
