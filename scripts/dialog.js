const dialog = document.getElementById('file-upload-dialog');
const overlay = document.getElementById('dialog-overlay');

function openDialog() {
  dialog.classList.add('active');
  overlay.classList.add('active');
}

function closeDialog() {
  dialog.classList.remove('active');
  overlay.classList.remove('active');
}

// Example trigger
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDialog(); // close with Esc key
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        closeDialog();
    });
});
