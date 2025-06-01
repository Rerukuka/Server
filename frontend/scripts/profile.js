// profile.js
import { auth, db } from "/scripts/firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { translations, applyLanguage, toggleLanguage, applyTheme, toggleTheme } from "/scripts/script.js";

console.log("Profile.js loaded at:", new Date().toISOString());

function getTranslation(key) {
  const lang = localStorage.getItem("language") || "ru";
  return translations[lang]?.[key] || translations["ru"][key] || key;
}

function updateTranslations() {
  console.log("Updating translations in profile.js at:", new Date().toISOString());
  applyLanguage();
}

function initializePage() {
  console.log("Initializing page at:", new Date().toISOString());

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);
  else console.warn("Language button not found.");

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  else console.warn("Theme toggle button not found.");

  updateTranslations();
  applyTheme();

  onAuthStateChanged(auth, async (user) => {
    console.log("Auth state changed, user:", user ? user.uid : "null");
    if (!user) {
      console.log("No user authenticated, redirecting to Login.html");
      window.location.href = "/Login.html";
      return;
    }

    const accountCard = document.querySelector(".account-card");
    if (!accountCard) {
      console.error("Account card not found!");
      return;
    }

    try {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const data = userDoc.data();
        console.log("User data from Firestore:", data); // Для отладки
        document.getElementById("username").textContent = data.username || "Not specified";
        document.getElementById("email").textContent = data.email || "Not specified";
        document.getElementById("wallet-address").textContent = data.walletAddress || "Not specified";
        document.getElementById("ai-algorithm").textContent = data.aiAlgorithm || "Not specified"; // Добавлено
        document.getElementById("basic-tokens").textContent = data.basicStakingTokens || 0; // Исправлено
        document.getElementById("premium-tokens").textContent = data.premiumStakingTokens || 0; // Исправлено
        document.querySelector(".wallet-edit").style.display = "block";
      } else {
        await setDoc(userDocRef, {
          username: user.displayName || "Anonymous",
          email: user.email || "unknown",
          createdAt: new Date(),
          walletAddress: "",
          emailVerified: user.emailVerified || false,
          basicStakingTokens: 0,
          premiumStakingTokens: 0
        });
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      alert(`${getTranslation("error-fetch") || "Error:"} ${error.message}`);
    }

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
          window.location.href = "/Login.html";
        }).catch((error) => {
          console.error("Logout error:", error.message);
          alert(`${getTranslation("logout-error") || "Error:"} ${error.message}`);
        });
      });
    }

    const saveWalletBtn = document.getElementById("update-wallet"); // Исправлено
    if (saveWalletBtn) {
      saveWalletBtn.addEventListener("click", async () => {
        const walletInput = document.getElementById("new-wallet"); // Исправлено
        if (walletInput.value.trim()) {
          try {
            await updateDoc(doc(db, "users", user.uid), { walletAddress: walletInput.value.trim() });
            document.getElementById("wallet-address").textContent = walletInput.value.trim();
            walletInput.value = "";
            alert(getTranslation("profile-save-wallet") || "Saved!");
          } catch (error) {
            console.error("Error saving wallet:", error.message);
            alert(`${getTranslation("wallet-save-error") || "Error:"} ${error.message}`);
          }
        } else {
          alert(getTranslation("wallet-placeholder") || "Enter wallet address!");
        }
      });
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  initializePage();
}