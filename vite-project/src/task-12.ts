function sendDoneStatus(callback: (param: string) => void): void {
  callback("done");
}

sendDoneStatus((msg) => {
  console.log("Status:", msg);
});