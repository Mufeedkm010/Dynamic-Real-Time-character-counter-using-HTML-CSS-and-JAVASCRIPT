document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('inputText');
    const typedCount = document.getElementById('typedCount');
    const remainingCount = document.getElementById('remainingCount');

    textarea.addEventListener('input', () => {
        const typed = textarea.value.length;
        const remaining = 500 - typed;
        typedCount.textContent = `${typed} characters typed`;
        remainingCount.textContent = `${remaining} characters remaining`;
    });
});
