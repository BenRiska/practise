const downloadCsv = (string: string): void => {
  var blob: Blob = new Blob([string]);
  // @ts-ignore
  if (window.navigator.msSaveOrOpenBlob) {
    // @ts-ignore
    window.navigator.msSaveBlob(blob, "filename.csv");
  } else {
    const a: HTMLAnchorElement = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "leads.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

export default downloadCsv