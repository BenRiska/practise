const downloadCsv = (string: string) => {
  var blob = new Blob([string]);
  // @ts-ignore
  if (window.navigator.msSaveOrOpenBlob) {
    // @ts-ignore
    window.navigator.msSaveBlob(blob, "filename.csv");
  } else {
    var a = window.document.createElement("a");

    a.href = window.URL.createObjectURL(blob);
    a.download = "leads.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

export default downloadCsv