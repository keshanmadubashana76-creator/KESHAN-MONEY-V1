```javascript
let points = 125;
let bonusClaimed = false;

function showLogin() {
  document.getElementById("login")
    .classList.remove("hidden");

  document.getElementById("login")
    .scrollIntoView({ behavior: "smooth" });
}

function showDashboard() {
  document.getElementById("login")
    .classList.add("hidden");

  document.getElementById("dashboard")
    .classList.remove("hidden");

  document.getElementById("dashboard")
    .scrollIntoView({ behavior: "smooth" });

  updatePoints();
}

function updatePoints() {
  document.getElementById("points").textContent = points;
}

function dailyBonus() {
  if (bonusClaimed) {
    notify("You already claimed today's demo bonus!");
    return;
  }

  bonusClaimed = true;
  points += 10;
  updatePoints();
  notify("🎉 You collected 10 demo points!");
}

function completeTask() {
  points += 5;
  updatePoints();
  notify("✅ Demo task completed! +5 points");
}

async function shareReferral() {
  const link = window.location.href;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Keshan Money",
        text: "Check out Keshan Money!",
        url: link
      });
    } else {
      await navigator.clipboard.writeText(link);
      notify("Referral link copied!");
    }
  } catch (error) {
    notify("You can copy your website link to share.");
  }
}

function adInfo() {
  notify("Rewarded ads are not connected yet.");
}

function loginInfo(provider) {
  notify(
    provider +
    " login needs Firebase configuration first."
  );
}

function notify(message) {
  document.getElementById("message").textContent =
    message;
}
```
