export const truncate = (string, length) => {
  if (string.length >= length) {
    return `${string.substring(0, length)}...`;
  }

  return string;
};

export const validate = string => {
  if (string.length < 1) {
    return false;
  }
  return true;
};
