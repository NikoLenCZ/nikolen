const initDialog = () => {
  document.querySelectorAll("[data-open-dialog]").forEach(button => {
    const dialogId = button.getAttribute("data-open-dialog");
    const dialog = document.getElementById(dialogId);

    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll("[data-close-dialog]").forEach(button => {
    const dialogId = button.getAttribute("data-close-dialog");
    const dialog = document.getElementById(dialogId);

    button.addEventListener("click", function () {
      if (dialog) {
        dialog.close();
      }
    });
  });
}

export { initDialog };
