/**
 * Function to enable the disabled fields before the page is loaded..
 *
 * The disabling serves to prevent the autocomplete of browsers like Chrome
 *
 */
export function enableInputs() {
  let disableElementNames = [
    "email",
    "user",
    "password",
    "password-c",
    "name-login",
    "password-login",
  ];

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  disableElementNames.forEach((element) => {
    sleep(1000).then(async () => {
      document.getElementsByName(element)[0].disabled = false;
    });
  });
}
