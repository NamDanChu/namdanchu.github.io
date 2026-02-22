/**
 * 파일명: project.js
 * 수정일자: 2026-02-22
 * 용도: 프로젝트 선택 시 콘텐츠 로드 및 탭 전환
 * 구동 방법: project/index.html에서 로드.
 */

const PROJECTS = {
    schoolmanager: {
        id: 'schoolmanager',
        name: 'SchoolManager',
        category: '웹',
        references: [
            { label: 'PPT', url: '../assets/ppt/1-SchoolManager.pptx', download: true },
            { label: '사이트', url: 'https://school-manege.web.app/' }
        ],
        description: `
            <h2>설명</h2>
            <p>학교 관리 시스템 프로젝트입니다. 교직원 및 학생 관리를 위한 웹 기반 솔루션을 제공합니다.</p>
            <h2>작업 기간</h2>
            <p>2025.01 ~ 2025.04</p>
        `,
        privacyPolicy: null
    },
    catdefence2048: {
        id: 'catdefence2048',
        name: 'CatDefence2048',
        category: '앱',
        references: [
            { label: 'PPT', url: '../assets/ppt/2-CatDefence2048.pptx', download: true },
            { label: '사이트', url: 'https://namdanchu.github.io/CatDefence/CatDefence1024.html' },
            { label: '플레이스토어', url: 'https://play.google.com/apps/internaltest/4701437874831551646' },
            { label: '디스코드', url: 'https://discord.gg/rURQZ5BtuB' }
        ],
        description: `
            <h2>설명</h2>
            <p>고양이 테마의 게임 프로젝트입니다. 모바일 앱으로 제작되어 플레이스토어에서 다운로드 가능합니다.</p>
        `,
        privacyPolicy: null
    },
    imageeditor: {
        id: 'imageeditor',
        name: 'ImageEditor',
        category: '프로그램',
        references: [
            { label: 'ZIP', url: '../assets/zip/ImageEditor.zip', download: true },
            { label: 'PPT', url: '../assets/ppt/3-ImageEditor.pptx', download: true },
            { label: 'GitHub', url: 'https://github.com/NamDanChu/ImageEditor_Python' }
        ],
        description: `
            <h2>설명</h2>
            <p>이미지 편집 프로젝트입니다. Python으로 개발된 데스크톱 이미지 편집 도구입니다.</p>
        `,
        privacyPolicy: null
    },
    tictactoe: {
        id: 'tictactoe',
        name: '틱택토 온라인',
        category: '앱',
        references: [],
        description: `
            <h2>설명</h2>
            <p>온라인 멀티플레이어 틱택토 게임입니다. Google 로그인을 지원하며, AI 대전 및 랭킹 시스템을 제공합니다.</p>
        `,
        privacyPolicy: 'data/tictactoe-privacy.html'
    },
    tictacmove: {
        id: 'tictacmove',
        name: 'TicTac-Move',
        category: '앱',
        references: [],
        description: `
            <h2>설명</h2>
            <p>오프라인 틱택토 게임 앱입니다. 로그인 없이 기기에서 바로 즐길 수 있습니다.</p>
        `,
        privacyPolicy: 'data/tictacmove-privacy.html'
    }
};

function initProjectPage() {
    const hash = window.location.hash.slice(1) || 'schoolmanager';
    selectProject(hash);
    renderProjectList();
}

function renderProjectList() {
    const listEl = document.getElementById('project-list');
    if (!listEl) return;

    const byCategory = { '웹': [], '앱': [], '프로그램': [] };
    Object.values(PROJECTS).forEach(p => {
        if (byCategory[p.category]) byCategory[p.category].push(p);
    });

    let html = '';
    ['웹', '앱', '프로그램'].forEach(cat => {
        byCategory[cat].forEach(p => {
            html += `<li><a href="#${p.id}" data-id="${p.id}">${p.name}<span class="category-label">${p.category}</span></a></li>`;
        });
    });

    listEl.innerHTML = html || '<li><span>프로젝트가 없습니다.</span></li>';

    listEl.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            selectProject(a.dataset.id);
            window.location.hash = a.dataset.id;
        });
    });
}

function selectProject(id) {
    const project = PROJECTS[id];
    if (!project) return;

    document.querySelectorAll('#project-list a').forEach(a => {
        a.classList.toggle('active', a.dataset.id === id);
    });

    document.getElementById('project-name').textContent = project.name;
    document.getElementById('project-category').textContent = project.category;

    const refEl = document.getElementById('project-references');
    if (refEl) {
        if (project.references && project.references.length > 0) {
            refEl.style.display = '';
            refEl.innerHTML = '<span class="ref-label">참고 자료:</span>' + project.references.map(r => {
                const attrs = r.download ? `href="${r.url}" download` : `href="${r.url}" target="_blank"`;
                return `<a class="ref-link" ${attrs}>${r.label}</a>`;
            }).join('');
        } else {
            refEl.style.display = 'none';
            refEl.innerHTML = '';
        }
    }

    const descPanel = document.getElementById('content-desc');
    const privacyPanel = document.getElementById('content-privacy');
    const tabDesc = document.getElementById('tab-desc');
    const tabPrivacy = document.getElementById('tab-privacy');

    descPanel.innerHTML = project.description;
    descPanel.classList.add('active');

    if (project.privacyPolicy) {
        tabPrivacy.style.display = '';
        privacyPanel.innerHTML = `<iframe src="${project.privacyPolicy}" class="privacy-iframe" title="개인정보처리방침"></iframe>`;
        privacyPanel.classList.remove('active');
    } else {
        tabPrivacy.style.display = 'none';
        privacyPanel.innerHTML = '';
    }

    tabDesc.classList.add('active');
    tabPrivacy.classList.remove('active');
}

function switchTab(tabName) {
    document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));

    const tabEl = document.getElementById('tab-' + tabName);
    const panelEl = document.getElementById('content-' + tabName);
    if (tabEl) tabEl.classList.add('active');
    if (panelEl) panelEl.classList.add('active');
}

window.addEventListener('DOMContentLoaded', initProjectPage);
window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1);
    if (id && PROJECTS[id]) selectProject(id);
});
