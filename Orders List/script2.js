const allIcons = document.querySelectorAll(".fa-ellipsis-h");
const allPopovers = document.querySelectorAll(".popover");
const allSelectBtns = document.querySelectorAll(".btn-select");
const allRemoveBtns = document.querySelectorAll(".btn-remove");

//show popovers
allIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    allPopovers.forEach((popover) => {
      popover.classList.remove("show");
    });
    if (!icon.nextElementSibling.classList.contains("show")) {
      icon.nextElementSibling.classList.add("show");
    }
  });
});

//check and uncheck the invoice
allSelectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", (e) => {
    const invoice = e.target.closest(".invoice");
    if (!invoice.classList.contains("checked")) {
      selectBtn.textContent = "Unselect";
      selectBtn.nextElementSibling.disabled = false;
      invoice.classList.add("checked");
      invoice.querySelector("input").checked = true;
    } else {
      selectBtn.textContent = "Select";
      selectBtn.nextElementSibling.disabled = true;
      invoice.classList.remove("checked");
      invoice.querySelector("input").checked = false;
    }
  });
});

//remove invoice while checked
allRemoveBtns.forEach((removeBtn) => {
  removeBtn.addEventListener("click", (e) => {
    const invoice = e.target.closest(".invoice");
    invoice.remove();
  });
});

//close popover if clicked outside it
// window.addEventListener("click", (e) => {
//   if (!e.target.classList.contains("fa-ellipsis-h")) {
//     allPopovers.forEach((popover) => {
//       popover.classList.remove("show");
//     });
//   }
// });


//remove checked class from all invoices
// allInvoices.forEach((invoice) => {
//   invoice.classList.remove("checked");
// });

//make checkboxs unchecked then check the clickec one
// allCheckboxs.forEach((checkbox) => {
//   checkbox.checked = false;
// });

//disable all popover icons
// allPopoverIcons.forEach((popverIcon) => {
//   popverIcon.disabled = true;
// });
