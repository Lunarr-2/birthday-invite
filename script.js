const form = document.getElementById("form");

// highlight selected time
const options = document.querySelectorAll(".time-option");
options.forEach((opt) => {
  opt.addEventListener("click", () => {
    options.forEach((o) => o.classList.remove("active"));
    opt.classList.add("active");
    opt.querySelector("input").checked = true;
  });
});

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

// FORMSPREE SUBMISSION ONLY
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    attendance: formData.get("attendance"),
    time: formData.get("time")
  };

  const endpoint = "https://formspree.io/f/mqegzydl";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    form.reset();
    options.forEach((o) => o.classList.remove("active"));

    // alert("Response submitted successfully.");
    showToast("Response submitted successfully.");
  } catch (err) {
    console.error("Form submission error:", err);
    // alert("Submission failed. Check your Formspree endpoint.");
    showToast("Submission failed. Check your Formspree endpoint.", "error");
  }
});