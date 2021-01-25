/*Comman used functions*/
//add/remove checked class function
function mainFunc(checkSelectors) {
  checkSelectors.forEach((checkSelector) => {
    checkSelector.addEventListener("click", (e) => {
      //check current invoice
      const invoice = e.target.closest(".invoice");
      const checkBox = invoice.querySelector(".checkbox input");
      const selectBtn = invoice.querySelector(".btn-select");

      if (e.target.textContent === "Select") {
        e.target.textContent = "Unselect";
      } else {
        e.target.textContent = "Select";
      }
      if (!invoice.classList.contains("checked")) {
        invoice.classList.add("checked");
        checkBox.checked = true;
        checkedInvoicesNumber++;
        console.log(checkedInvoicesNumber);
        if (checkedInvoicesNumber > 1) {
          removeAllBtn.classList.add("show");
        }
        selectBtn.textContent = "Unselect";
      } else {
        invoice.classList.remove("checked");
        checkBox.checked = false;
        checkedInvoicesNumber--;
        console.log(checkedInvoicesNumber);
        if (checkedInvoicesNumber < 2) {
          removeAllBtn.classList.remove("show");
        }
        if (invoicesNumber !== checkedInvoicesNumber) {
          mainCheckbox.checked = false;
          removeAllBtn.textContent = "Remove Checked";
        } else {
          removeAllBtn.textContent = "Remove All";
        }
        selectBtn.textContent = "Select";
      }
    });
  });
}
//get element
function $(ele) {
  return document.querySelectorAll(ele);
}

//remove class
function addClass(element, clas) {
  element.forEach((ele) => {
    ele.classList.add(clas);
  });
}
//add class
function removeClass(element, clas) {
  element.forEach((ele) => {
    ele.classList.remove(clas);
  });
}

//variables
const allCheckboxs = $("tbody input[type='checkbox']");
const allPopoverIcons = $("tbody .popover-icon");
const allPopovers = $("tbody .popover");
const allSelectBtns = $("tbody .btn-select");
const allRemoveBtns = $("tbody .btn-remove");
const allInvoices = $("tbody .invoice");
const mainCheckbox = document.querySelector("thead .main-checkbox input");
const removeAllBtn = document.querySelector("thead .remove-all");
let checkedInvoicesNumber = 0;
let invoicesNumber = allInvoices.length;

// add checked class to invoice while click on checkbox
mainFunc(allCheckboxs);

// add checked class to invoice while click on select btn
mainFunc(allSelectBtns);

//show popover
allPopoverIcons.forEach((popoverIcon) => {
  popoverIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    //remove show class from all popovers
    removeClass(allPopovers, "show");
    const currentPopover = popoverIcon.nextElementSibling;
    currentPopover.classList.add("show");
  });
});

//remove invoice
allRemoveBtns.forEach((removeBtn) => {
  removeBtn.addEventListener("click", (e) => {
    const currentInvoice = removeBtn.closest(".invoice");
    invoicesNumber--;
    if (checkedInvoicesNumber > 0) {
      checkedInvoicesNumber--;
    }
    currentInvoice.remove();
    if (checkedInvoicesNumber < 2) {
      removeAllBtn.classList.remove("show");
    }
  });
});

//clsoe popover when click outside it
window.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("fas fa-ellipsis-h") &&
    !e.target.classList.contains("btn")
  ) {
    removeClass(allPopovers, "show");
  }
});

//handel main-checkbox click
mainCheckbox.addEventListener("click", (e) => {
  checkedInvoicesNumber = invoicesNumber;
  if (e.target.checked === true) {
    removeAllBtn.textContent = "Remove All";

    //show remove-all btn
    removeAllBtn.classList.add("show");

    //check all checkboxs
    allCheckboxs.forEach((checkbox) => {
      checkbox.checked = true;
    });

    //change textContent of all select btns text to unselect
    allSelectBtns.forEach((selectBtn) => {
      selectBtn.textContent = "Unselect";
    });

    //add checked class to all invoices
    addClass(allInvoices, "checked");
  } else if (e.target.checked === false) {
    removeAllBtn.textContent = "Remove Checked";
    checkedInvoicesNumber = 0;
    //remove remove-all btn
    removeAllBtn.classList.remove("show");

    //uncheck all checkboxs
    allCheckboxs.forEach((checkbox) => {
      checkbox.checked = false;
    });

    //remove checked class to all invoices
    removeClass(allInvoices, "checked");

    //change textContent of all select btns text to select
    allSelectBtns.forEach((selectBtn) => {
      selectBtn.textContent = "Select";
    });
  }
});

//remove all checked invoice
removeAllBtn.addEventListener("click", (e) => {
  allInvoices.forEach((invoice) => {
    if (invoice.classList.contains("checked")) {
      invoice.remove();
      invoicesNumber = invoicesNumber - 1;
      checkedInvoicesNumber = 0;
      if (invoicesNumber === 0) {
        mainCheckbox.style.opacity = "0";
        mainCheckbox.style.visibility = "hidden";
      }
    }
  });
  removeAllBtn.classList.remove("show");
});
