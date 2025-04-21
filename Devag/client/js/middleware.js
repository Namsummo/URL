// Middleware để kiểm tra đăng nhập
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('clientUser') || sessionStorage.getItem('clientUser'));
    if (!currentUser) {
        sessionStorage.setItem('returnUrl', window.location.href);
        window.location.href = 'auth.html';
        return false;
    }
    return true;
}

// Middleware để kiểm tra quyền admin
function checkAdmin() {
    const currentUser = JSON.parse(localStorage.getItem('clientUser') || sessionStorage.getItem('clientUser'));
    if (!currentUser || currentUser.role !== 'admin') {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Export các hàm middleware
window.checkAuth = checkAuth;
window.checkAdmin = checkAdmin; 