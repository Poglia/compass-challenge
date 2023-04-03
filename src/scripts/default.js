/**
 * Function to enable the disabled fields before the page is loaded..
 *
 * The disabling serves to prevent the autocomplete of browsers like Chrome
 *
 */
export function enableInputs(screen) {
  let disableElementNames = [];

  if (screen === "login") {
    disableElementNames.push("name-login", "password-login");
  } else {
    disableElementNames.push("user", "password", "email", "password-c");
  }

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  disableElementNames.forEach((element) => {
    sleep(1000).then(async () => {
      if (document.getElementsByName(element)[0].disabled === true)
        document.getElementsByName(element)[0].disabled = false;
    });
  });
}