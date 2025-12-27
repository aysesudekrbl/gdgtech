document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-btn');
    const fileInput = document.getElementById('fileInput');
    const categoryInput = document.getElementById('categoryInput');
    const uploadForm = document.getElementById('uploadForm');

    if (addButtons && fileInput && categoryInput && uploadForm) {
        addButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryInput.value = btn.getAttribute('data-category');
                fileInput.click();
            });
        });

        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                uploadForm.submit();
            }
        });
    }
});