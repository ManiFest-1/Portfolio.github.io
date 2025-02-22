
function openProject(projectId) {
    document.getElementById(projectId).style.display = 'block';
}


function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
};
document.getElementById('projectsButton').addEventListener('click', function(e) {
    e.preventDefault(); 
    const targetSection = document.getElementById('projects');
    targetSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
});
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        targetSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'      
        });
    });
});
