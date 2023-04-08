function getInteger() {
  const withMs = parseInt(document.getElementById("with-multisport").value);
  const woMs = parseInt(document.getElementById("without-multisport").value);
  const feePer30Min = parseInt(document.getElementById("fee-per-30-min").value);
  const duration = parseInt(document.getElementById("duration").value);
  const numCourts = parseInt(document.getElementById("num-courts").value);

  let numRounds = Math.round(duration / 30)
  let totalFee = feePer30Min * Math.max(numCourts * numRounds - withMs, 0)
  let feeWoMs = totalFee / ((numRounds - 1) / numRounds * withMs + woMs)
  let feeWithMs = (numRounds - 1) / numRounds * feeWoMs
  
  document.getElementById("total-fee").value = totalFee;
  document.getElementById("fee-multisport").value = feeWithMs;
  document.getElementById("fee-no-multisport").value = feeWoMs;
}