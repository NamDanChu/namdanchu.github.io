function loadContent(section) {
    const contentDiv = document.getElementById('main-content');
    let url = '';

    switch(section) {
        case 'profile':
            url = 'profile.html';
            break;
        default:
            url = '';
    }

    if (url) {
        // 회전 효과 추가
        contentDiv.style.transition = 'transform 0.6s';
        contentDiv.style.transform = 'rotateY(90deg)';

        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data;
                    contentDiv.style.transform = 'rotateY(0deg)';
                })
                .catch(error => console.error('Error loading content:', error));
        }, 600); // 회전 효과 시간과 일치
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('inactive');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('inactive');
    activeSection.classList.add('active');
}

function goToProjectSite() {
    const urlInput = document.getElementById('project-url');
    const url = urlInput.value.trim();
    
    if (url) {
        // URL이 http:// 또는 https://로 시작하는지 확인
        if (!/^https?:\/\//i.test(url)) {
            window.open('https://' + url, '_blank');
        } else {
            window.open(url, '_blank');
        }
    } else {
        alert('프로젝트 사이트 주소를 입력해주세요.');
    }
}
