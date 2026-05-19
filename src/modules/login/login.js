export const loginCredentials = {
  username: "admin",
  password: "123456",
};

const authStorageKey = "property-manager-todo-authenticated";
const authUserStorageKey = "property-manager-todo-username";

export function createLoginModule({ elements }) {
  function setupLogin() {
    elements.loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = elements.usernameInput.value.trim();
      const password = elements.passwordInput.value;
      const isValid =
        username === loginCredentials.username && password === loginCredentials.password;

      if (!isValid) {
        elements.loginError.hidden = false;
        elements.passwordInput.select();
        return;
      }

      sessionStorage.setItem(authStorageKey, "true");
      sessionStorage.setItem(authUserStorageKey, username);
      elements.loginForm.reset();
      elements.loginError.hidden = true;
      showTodoApp();
    });

    elements.logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem(authStorageKey);
      sessionStorage.removeItem(authUserStorageKey);
      showLoginView();
    });

    if (sessionStorage.getItem(authStorageKey) === "true") {
      showTodoApp();
      return;
    }

    showLoginView();
  }

  function showTodoApp() {
    elements.loginView.hidden = true;
    elements.todoApp.hidden = false;
    elements.welcomeUserName.textContent = getCurrentUserName();
    elements.usernameInput.blur();
  }

  function showLoginView() {
    elements.todoApp.hidden = true;
    elements.loginView.hidden = false;
    elements.loginError.hidden = true;
    elements.passwordInput.value = "";
    elements.usernameInput.focus();
  }

  function getCurrentUserName() {
    return sessionStorage.getItem(authUserStorageKey) || loginCredentials.username;
  }

  return {
    setupLogin,
    getCurrentUserName,
    defaultUserName: loginCredentials.username,
  };
}
