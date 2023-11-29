const addProtocolToUrl = (url: string) => {
  if (url.startsWith("http")) {
    return url;
  }

  return `https://${url}`;
};

export { addProtocolToUrl };
