import './components/NavBar.js';
import './router.js';
import './utils/darkmode.js';

document.addEventListener('DOMContentLoaded', () => {
    const floatingButton = document.createElement('button');
    floatingButton.className = 'theme-toggle-button';
    document.body.appendChild(floatingButton);

    const updateThemeIcon = () => {
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        floatingButton.innerHTML = isDarkMode
            ? '<i class="fas fa-sun"></i>' // 태양 아이콘
            : '<i class="fas fa-moon"></i>'; // 달 아이콘
    };

    // 시스템 기본 테마 확인
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        document.documentElement.classList.add('dark-mode');
        toggleDarkMode(true);
    } else {
        document.documentElement.classList.remove('dark-mode');
        toggleDarkMode(false);
    }

    updateThemeIcon();

    // 플로팅 버튼 클릭 이벤트
    floatingButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        if (isDarkMode) {
            document.documentElement.classList.remove('dark-mode');
            toggleDarkMode(false);
        } else {
            document.documentElement.classList.add('dark-mode');
            toggleDarkMode(true);
        }
        updateThemeIcon();
    });
});
