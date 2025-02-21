// Открытие модального окна с проектом
function openProject(projectId) {
    document.getElementById(projectId).style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
};