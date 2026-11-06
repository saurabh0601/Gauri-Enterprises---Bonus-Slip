const form = document.getElementById("searchForm");
const input = document.getElementById("employeeId");
const result = document.getElementById("result");
const viewer = document.getElementById("viewer");
const slipImage = document.getElementById("slipImage");
const viewerTitle = document.getElementById("viewerTitle");
const downloadLink = document.getElementById("downloadLink");

document.getElementById("year").textContent = new Date().getFullYear();

// Convert to uppercase while the employee types.
input.addEventListener("input", () => {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  input.value = input.value.toUpperCase().replace(/\s+/g, "");
  input.setSelectionRange(start, end);
});

function normalizeEmployeeId(raw) {
  // Accept GE0004, GE004, or just 4; always normalize to GE0004.
  const cleaned = raw.trim().toUpperCase().replace(/[\s-]/g, "");
  const match = cleaned.match(/^(?:GE)?(\d{1,4})$/);
  if (!match) return null;
  const number = Number(match[1]);
  if (!Number.isInteger(number) || number < 1 || number > 199) return null;
  return `GE${String(number).padStart(4, "0")}`;
}

function showMessage(message, type) {
  result.className = `result show ${type}`;
  result.textContent = message;
}

function openSlip(employeeId) {
  // Upload each employee's JPG to the bonus-slips folder using this exact filename.
  const slipUrl = `bonus-slips/${employeeId}.jpg`;
  const probe = new Image();
  probe.onload = () => {
    slipImage.src = slipUrl;
    slipImage.alt = `Festival Bonus Slip for ${employeeId}`;
    viewerTitle.textContent = employeeId;
    downloadLink.href = slipUrl;
    downloadLink.download = `${employeeId}_Festival_Bonus_Slip.jpg`;
    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
    showMessage(`Bonus slip found for ${employeeId}. You can view or download it below.`, "success");
  };
  probe.onerror = () => {
    showMessage(`No bonus slip was found for ${employeeId}. Please check your Employee ID or contact HR.`, "error");
  };
  probe.src = `${slipUrl}?v=${Date.now()}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const employeeId = normalizeEmployeeId(input.value);
  if (!employeeId) {
    showMessage("Please enter a valid Employee ID from GE0001 to GE0199 (for example: GE0004).", "error");
    input.focus();
    return;
  }
  input.value = employeeId;
  showMessage(`Searching for ${employeeId}…`, "success");
  openSlip(employeeId);
});

function closeViewer() {
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
}
document.getElementById("closeViewer").addEventListener("click", closeViewer);
document.getElementById("closeViewerBottom").addEventListener("click", closeViewer);
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) closeViewer();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeViewer();
});
