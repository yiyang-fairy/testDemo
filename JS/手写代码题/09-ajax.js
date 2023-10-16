const mAjax = (method, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 || xhr.status !== 200) {
      return;
    } else {
      return JSON.parse(xhr.responseText);
    }
  };
};
