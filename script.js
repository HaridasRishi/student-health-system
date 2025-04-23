function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    // Dummy check (replace with real backend later)
    if (user === "student" && pass === "123") {
      localStorage.setItem("studentName", user);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials!");
    }
  }
  
  function saveHealthProfile() {
    const profile = {
      bloodGroup: document.getElementById("bloodGroup").value,
      allergies: document.getElementById("allergies").value,
      conditions: document.getElementById("conditions").value,
    };
    localStorage.setItem("healthProfile", JSON.stringify(profile));
    displayHealthProfile();


  }
  
  function displayHealthProfile() {
    const saved = localStorage.getItem("healthProfile");
    if (saved) {
      document.getElementById("savedProfile").textContent = saved;
    }
  }
  
  window.onload = () => {
    const name = localStorage.getItem("studentName");
    if (name) {
      document.getElementById("studentName").textContent = name;
      displayHealthProfile();
    }
  };
  function logout() {
    localStorage.removeItem("studentName");
    localStorage.removeItem("healthProfile");
    window.location.href = "index.html";
  }
  
  function saveHealthProfile() {
    const bloodGroup = document.getElementById("bloodGroup").value.trim();
    const allergies = document.getElementById("allergies").value.trim();
    const conditions = document.getElementById("conditions").value.trim();
  
    if (!bloodGroup || !allergies || !conditions) {
      alert("Please fill in all fields.");
      return;
    }
  
    const profile = { bloodGroup, allergies, conditions };
    localStorage.setItem("healthProfile", JSON.stringify(profile));
    displayHealthProfile();
    alert("Profile saved!");
  }

  function saveHealthProfile() {
    const bloodGroup = document.getElementById("bloodGroup").value.trim();
    const allergies = document.getElementById("allergies").value.trim();
    const conditions = document.getElementById("conditions").value.trim();
  
    if (!bloodGroup || !allergies || !conditions) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newEntry = {
      date: new Date().toLocaleString(),
      bloodGroup,
      allergies,
      conditions,
    };
  
    const history = JSON.parse(localStorage.getItem("healthHistory")) || [];
    history.push(newEntry);
    localStorage.setItem("healthHistory", JSON.stringify(history));
  
    displayHealthHistory();
    alert("Profile entry added!");
  }
  
  function displayHealthHistory() {
    const history = JSON.parse(localStorage.getItem("healthHistory")) || [];
    const saved = document.getElementById("savedProfile");
    saved.innerHTML = "";
  
    history.forEach((entry, index) => {
      saved.innerHTML += `
        <div style="margin-bottom: 10px;">
          <strong>Entry ${index + 1} - ${entry.date}</strong><br />
          Blood Group: ${entry.bloodGroup}<br />
          Allergies: ${entry.allergies}<br />
          Conditions: ${entry.conditions}
        </div>
      `;
    });
  }
  window.onload = () => {
    const name = localStorage.getItem("studentName");
    if (name) {
      document.getElementById("studentName").textContent = name;
      displayHealthHistory();
    }
  };
    