
require(['dialog'],function(dialogPolyfill){

  // //select all modal and convert node list to array
  // const modalContainers = [].slice.call(document.querySelectorAll('.dcf-js-dialog'));

  // modalContainers.forEach((modalContainer) => {
  //   const trigger = modalContainer.querySelector('.dcf-js-dialog-trigger');
  //   const modalDialog = modalContainer.querySelector('dialog');
  //   const closeButton = modalContainer.querySelector('.dcf-o-dialog__close');

  //   // if global dialog property not present, register all dialog modal with polyfill
  //   if(!window.HTMLDialogElement) {
  //     dialogPolyfill.registerDialog(modalDialog);
  //   }

  //   // show dialog on trigger button click
  //   trigger.addEventListener('click',() => {
  //     modalDialog.showModal();
  //     // translate doesn't seem to work on dialog
  //     modalDialog.style.top = `calc(50% - ${modalDialog.scrollHeight/2}px)`;
  //   });

  //   // close dialog on close button click
  //   closeButton.addEventListener('click', () => {modalDialog.close('closed')});

  //   // close dialog on Esc button press
  //   modalDialog.addEventListener('cancel', () => {modalDialog.close('cancelled')});

  //   // close dialog when clicking on dialog backdrop
  //   // for this to work properly, child elements of dialog must span the entire region
  //   // within the dialog box so that when clicking within the dialog, child elements
  //   // are clicked on instead of the dialog box itself
  //   modalContainer.addEventListener('click', (e) => {
  //     if (e.target == modalDialog) modalDialog.close('cancelled');
  //     console.log(e.target);
  //   });
  // });
});

// require(['dialog'], function (dialogPolyfill) {

//   //select all modal
//   var modalContainers = document.querySelectorAll('.dcf-js-dialog');

//   [].forEach.call(modalContainers, function (modalContainer) {
//     var trigger = modalContainer.querySelector('.dcf-js-dialog-trigger');
//     var modalDialog = modalContainer.querySelector('dialog');
//     var closeButton = modalContainer.querySelector('.dcf-o-dialog__close');

//     if (!window.HTMLDialogElement) {
//       dialogPolyfill.registerDialog(modalDialog);
//     }

//     trigger.addEventListener('click', function () {
//       modalDialog.showModal();
//       // translate doesn't seem to work on dialog
//       modalDialog.style.top = 'calc(50% - ' + modalDialog.scrollHeight / 2 + 'px)';
//     });

//     closeButton.addEventListener('click', function () {
//       modalDialog.close('closed');
//     });

//     modalDialog.addEventListener('cancel', function () {
//       modalDialog.close('cancelled');
//     });
//     modalContainer.addEventListener('click', function (e) {
//       if (e.target == modalDialog) modalDialog.close('cancelled');
//       console.log(e.target);
//     });
//   });
// });