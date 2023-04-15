function getInteger() {
  const withMs = parseInt(document.getElementById("with-multisport").value);
  const woMs = parseInt(document.getElementById("without-multisport").value);
  const feePer30Min = parseInt(document.getElementById("fee-per-30-min").value);
  const duration = parseInt(document.getElementById("duration").value);
  const numCourts = parseInt(document.getElementById("num-courts").value);

  let numRounds = Math.round(duration / 30)
  let totalFeeOrig = feePer30Min * numCourts * numRounds
  let totalFeeDisc = feePer30Min * Math.max(numCourts * numRounds - withMs, 0)
  let origFeePerPlayer = totalFeeDisc / (withMs + woMs)
  let feeWithMulti = Math.max(0, origFeePerPlayer - feePer30Min)
  let feeWoMulti = (totalFeeOrig - feeWithMulti * withMs) / withMs
  
  document.getElementById("total-fee-orig").value = totalFeeOrig;
  document.getElementById("total-fee-disc").value = totalFeeDisc;
  document.getElementById("fee-multisport").value = feeWithMulti;
  document.getElementById("fee-no-multisport").value = feeWoMulti
}