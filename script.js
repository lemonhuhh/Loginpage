function showReward() {
  const welcome = document.getElementById("welcomeBox");
  const reward = document.getElementById("rewardBox");

  welcome.style.transform = "translate(-50%, -50%) scale(0)";
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.classList.add("hidden");
    reward.classList.remove("hidden");
  }, 500);
}