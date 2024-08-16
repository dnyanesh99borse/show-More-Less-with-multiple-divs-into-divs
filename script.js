function toggleVisibility(button) {
    const section = button.closest('.sectionshow');
    const pdfContainer = section.querySelector('.pdf');
    pdfContainer.classList.toggle('show');
    
    if (pdfContainer.classList.contains('show')) {
        button.textContent = 'View less';
    } else {
        button.textContent = 'View more';
    }
}
