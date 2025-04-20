// Middleware functions for authentication and authorization

// Kiểm tra đăng nhập
function checkAuth() {
    const adminUser = JSON.parse(localStorage.getItem('adminUser'));
    const clientUser = JSON.parse(localStorage.getItem('clientUser'));
    if (!adminUser && !clientUser) {
        window.location.href = '../client/auth.html';
        return false;
    }
    return true;
}

// Kiểm tra quyền admin
function checkAdminAuth() {
    const adminUser = JSON.parse(localStorage.getItem('adminUser'));
    if (!adminUser || adminUser.role !== 'admin') {
        window.location.href = '../client/auth.html';
        return false;
    }
    return true;
}

// Kiểm tra quyền client
function checkClientAuth() {
    const clientUser = JSON.parse(localStorage.getItem('clientUser'));
    if (!clientUser || clientUser.role !== 'client') {
        window.location.href = '../client/auth.html';
        return false;
    }
    return true;
}

// Kiểm tra và cập nhật trạng thái đăng nhập trên navbar
function updateAuthStatus() {
    const adminUser = JSON.parse(localStorage.getItem('adminUser'));
    const clientUser = JSON.parse(localStorage.getItem('clientUser'));
    const authSection = document.querySelector('.auth-section');
    const userMenu = document.querySelector('.user-menu');
    
    if (adminUser || clientUser) {
        const currentUser = adminUser || clientUser;
        // Nếu đã đăng nhập
        if (authSection) {
            authSection.innerHTML = `
                <div class="user-menu">
                    <div class="user-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="dropdown-menu">
                        <div class="user-info">
                            <span class="user-name">${currentUser.name}</span>
                            <span class="user-email">${currentUser.email}</span>
                        </div>
                        ${currentUser.role === 'admin' ? 
                            '<a href="../admin/dashboard.html"><i class="fas fa-tachometer-alt"></i>Dashboard</a>' : 
                            '<a href="../client/profile.html"><i class="fas fa-user"></i>Tài khoản của tôi</a>'}
                        <a href="../client/orders.html"><i class="fas fa-shopping-bag"></i>Đơn hàng của tôi</a>
                        <a href="../client/wishlist.html"><i class="fas fa-heart"></i>Sản phẩm yêu thích</a>
                        <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i>Đăng xuất</a>
                    </div>
                </div>
            `;
        }
    } else {
        // Nếu chưa đăng nhập
        if (authSection) {
            authSection.innerHTML = '<a href="../client/auth.html">Đăng nhập</a>';
        }
    }
}

// Hàm đăng xuất
function logout() {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('clientUser');
    window.location.href = '../client/auth.html';
}

// Bảo vệ route admin
function protectAdminRoute() {
    const currentPath = window.location.pathname;
    if (currentPath.includes('/admin/')) {
        return checkAdminAuth();
    }
    return true;
}

// Bảo vệ route client
function protectClientRoute() {
    const protectedPaths = ['/profile.html', '/orders.html', '/wishlist.html', '/checkout.html'];
    const currentPath = window.location.pathname;
    
    if (protectedPaths.some(path => currentPath.includes(path))) {
        return checkClientAuth();
    }
    return true;
}

// Khởi tạo middleware khi trang load
document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật trạng thái đăng nhập
    updateAuthStatus();
    
    // Kiểm tra và bảo vệ routes
    if (window.location.pathname.includes('/admin/')) {
        protectAdminRoute();
    } else {
        protectClientRoute();
    }
}); 