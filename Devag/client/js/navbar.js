// Hàm khởi tạo dropdown menu
function initializeNavbar() {
    // Tìm thẻ li chứa link Sản phẩm
    const productsLink = document.querySelector('.nav-links li a[href="products.html"]');
    if (productsLink) {
        const li = productsLink.parentElement;
        
        // Thêm class dropdown và cập nhật HTML
        li.className = 'dropdown';
        li.innerHTML = `
            <a href="products.html" class="dropdown-toggle">Sản Phẩm</a>
            <div class="dropdown-menu" id="categoriesDropdown">
                <!-- Categories will be loaded here -->
            </div>
        `;

        // Load categories
        loadNavbarCategories();

        // Thêm event listener cho localStorage changes
        window.addEventListener('storage', function(e) {
            if (e.key === 'categories') {
                loadNavbarCategories();
            }
        });
    }
}

// Hàm load categories cho navbar
function loadNavbarCategories() {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const dropdown = document.getElementById('categoriesDropdown');
    
    if (dropdown) {
        dropdown.innerHTML = categories
            .filter(category => category.isActive)
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map(category => `
                <a href="products.html?category=${category.slug}">
                    ${category.name}
                </a>
            `).join('');
    }
}

// Thêm styles cho dropdown menu
function addDropdownStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .dropdown {
            position: relative;
        }

        .dropdown-toggle {
            position: relative;
            padding-right: 20px !important;
        }

        .dropdown-toggle::after {
            content: '\\f107';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: transform 0.3s ease;
        }

        .dropdown:hover .dropdown-toggle::after {
            transform: translateY(-50%) rotate(180deg);
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            min-width: 200px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            border-radius: 8px;
            padding: 8px 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .dropdown-menu a {
            display: flex;
            align-items: center;
            padding: 10px 15px;
            color: #333;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .dropdown-menu a:hover {
            background: #f8f9fa;
            color: #ff6b6b;
            padding-left: 20px;
        }
    `;
    document.head.appendChild(styleElement);
}

// Khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', function() {
    addDropdownStyles();
    initializeNavbar();

    // Update auth status in navbar
    function updateAuthStatus() {
        const clientUser = JSON.parse(localStorage.getItem('clientUser')) || JSON.parse(sessionStorage.getItem('clientUser'));
        const navLinks = document.querySelector('.nav-links');
        
        if (navLinks) {
            const authLink = navLinks.querySelector('a[href="auth.html"]');
            if (authLink && clientUser) {
                authLink.textContent = clientUser.name;
                authLink.href = 'profile.html';
            }
        }
    }

    // Call update on page load
    updateAuthStatus();
}); 