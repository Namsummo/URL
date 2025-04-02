// Khởi tạo dữ liệu sản phẩm
let products = [
    {
        id: 1,
        name: "Áo Thun Nam Basic",
        price: 199000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Áo thun nam chất liệu cotton 100%, thoáng mát, dễ giặt"
    },
    {
        id: 2,
        name: "Quần Jean Nam",
        price: 799000,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Quần jean nam chất liệu denim cao cấp, form ôm dáng"
    },
    {
        id: 3,
        name: "Áo Khoác Nam",
        price: 1299000,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Áo khoác nam chống nước, giữ ấm tốt"
    },
    {
        id: 4,
        name: "Áo Sơ Mi Nam",
        price: 499000,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Áo sơ mi nam công sở, chất liệu cotton 100%, form slim fit"
    },
    {
        id: 5,
        name: "Đầm Hoa Nữ",
        price: 899000,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Đầm hoa nữ thiết kế trẻ trung, chất liệu voan mềm mại"
    },
    {
        id: 6,
        name: "Áo Khoác Nữ",
        price: 999000,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Áo khoác nữ thời trang, giữ ấm tốt"
    },
    {
        id: 7,
        name: "Quần Jean Nữ",
        price: 699000,
        image: "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Quần jean nữ form cao cấp, ôm dáng"
    },
    {
        id: 8,
        name: "Áo Thun Nữ",
        price: 299000,
        image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Áo thun nữ thiết kế trẻ trung, chất liệu cotton mềm mại"
    },
    {
        id: 9,
        name: "Áo Sơ Mi Nữ",
        price: 599000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Áo sơ mi nữ công sở, form đẹp, chất liệu cao cấp"
    },
    {
        id: 10,
        name: "Quần Short Nam",
        price: 399000,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Quần short nam thể thao, thoáng mát, dễ vận động"
    },
    {
        id: 11,
        name: "Váy Đen Nữ",
        price: 799000,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Váy đen nữ dự tiệc, thiết kế sang trọng"
    },
    {
        id: 12,
        name: "Áo Polo Nam",
        price: 599000,
        image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Áo polo nam thể thao, chất liệu thấm hút tốt"
    },
    {
        id: 13,
        name: "Quần Tây Nam",
        price: 899000,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Quần tây nam công sở, form đẹp, chất liệu cao cấp"
    },
    {
        id: 14,
        name: "Áo Len Nữ",
        price: 699000,
        image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "women",
        description: "Áo len nữ ấm áp, thiết kế thời trang"
    },
    {
        id: 15,
        name: "Quần Jogger Nam",
        price: 499000,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "men",
        description: "Quần jogger nam thể thao, thoải mái, dễ vận động"
    }
];

// Khởi tạo giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm hiển thị sản phẩm
function displayProducts(productsToShow = products) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="view-details" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${formatPrice(product.price)}</p>
                <p class="description">${product.description}</p>
            </div>
        </div>
    `).join('');
}

// Hàm hiển thị giỏ hàng
function displayCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    
    if (!cartItems || !cartSummary) return;

    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng của bạn đang trống</p>';
        cartSummary.innerHTML = '';
        return;
    }

    // Hiển thị sản phẩm trong giỏ hàng
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" 
                    onchange="updateQuantityInput(${item.id}, this.value)">
                <button class="quantity-btn plus" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Tính toán tổng tiền
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 30000 : 0;
    const total = subtotal + shipping;

    // Hiển thị tổng kết đơn hàng
    cartSummary.innerHTML = `
        <h3>Tổng Đơn Hàng</h3>
        <div class="summary-item">
            <span>Tạm Tính:</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-item">
            <span>Phí Vận Chuyển:</span>
            <span>${formatPrice(shipping)}</span>
        </div>
        <div class="summary-item total">
            <span>Tổng Cộng:</span>
            <span>${formatPrice(total)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">Tiến Hành Thanh Toán</button>
    `;
}

// Hàm thêm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    displayCart();
    showNotification('Đã thêm sản phẩm vào giỏ hàng');
}

// Hàm cập nhật số lượng
function updateQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = Math.max(1, cart[itemIndex].quantity + change);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

// Hàm cập nhật số lượng qua input
function updateQuantityInput(id, value) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = Math.max(1, parseInt(value) || 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

// Hàm xóa khỏi giỏ hàng
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
    showNotification('Sản phẩm đã được xóa khỏi giỏ hàng', 'success');
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm định dạng giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Hàm hiển thị thông báo
function showNotification(message, type = 'error') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Hàm thanh toán
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }

    // Kiểm tra đăng nhập
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để tiến hành thanh toán!', 'error');
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 1500);
        return;
    }

    // Lấy thông tin người nhận hàng đã lưu (nếu có)
    const savedShippingInfo = JSON.parse(localStorage.getItem(`shippingInfo_${currentUser.email}`)) || {};

    // Tạo form nhập thông tin thanh toán
    const checkoutForm = document.createElement('div');
    checkoutForm.className = 'checkout-form';
    checkoutForm.innerHTML = `
        <div class="checkout-modal">
            <h2>Thông Tin Thanh Toán</h2>
            <form id="paymentForm">
                <div class="form-group">
                    <label for="name">Họ và Tên Người Nhận</label>
                    <input type="text" id="name" value="${savedShippingInfo.name || currentUser.name || ''}" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" value="${currentUser.email}" readonly>
                </div>
                <div class="form-group">
                    <label for="phone">Số Điện Thoại</label>
                    <input type="tel" id="phone" value="${savedShippingInfo.phone || ''}" required>
                </div>
                <div class="form-group">
                    <label for="address">Địa Chỉ Giao Hàng</label>
                    <textarea id="address" required>${savedShippingInfo.address || ''}</textarea>
                </div>
                <div class="form-group">
                    <label for="note">Ghi Chú</label>
                    <textarea id="note">${savedShippingInfo.note || ''}</textarea>
                </div>
                <div class="form-group">
                    <label for="paymentMethod">Phương Thức Thanh Toán</label>
                    <select id="paymentMethod" required>
                        <option value="">Chọn phương thức thanh toán</option>
                        <option value="cod" ${savedShippingInfo.paymentMethod === 'cod' ? 'selected' : ''}>Thanh Toán Khi Nhận Hàng (COD)</option>
                        <option value="bank" ${savedShippingInfo.paymentMethod === 'bank' ? 'selected' : ''}>Chuyển Khoản Ngân Hàng</option>
                        <option value="momo" ${savedShippingInfo.paymentMethod === 'momo' ? 'selected' : ''}>Ví MoMo</option>
                        <option value="vnpay" ${savedShippingInfo.paymentMethod === 'vnpay' ? 'selected' : ''}>VNPay</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="deliveryMethod">Phương Thức Giao Hàng</label>
                    <select id="deliveryMethod" required>
                        <option value="">Chọn phương thức giao hàng</option>
                        <option value="standard" ${savedShippingInfo.deliveryMethod === 'standard' ? 'selected' : ''}>Giao Hàng Tiêu Chuẩn (2-3 ngày)</option>
                        <option value="express" ${savedShippingInfo.deliveryMethod === 'express' ? 'selected' : ''}>Giao Hàng Nhanh (24h)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="saveInfo" ${savedShippingInfo.saveInfo ? 'checked' : ''}>
                        Lưu thông tin cho lần đặt hàng sau
                    </label>
                </div>
                <div class="form-buttons">
                    <button type="button" class="cancel-btn" onclick="closeCheckoutForm()">Hủy</button>
                    <button type="submit" class="confirm-btn">Xác Nhận Thanh Toán</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(checkoutForm);

    // Xử lý submit form
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Lấy thông tin từ form
        const customerInfo = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            note: document.getElementById('note').value,
            paymentMethod: document.getElementById('paymentMethod').value,
            deliveryMethod: document.getElementById('deliveryMethod').value
        };

        // Lưu thông tin người nhận nếu được chọn
        if (document.getElementById('saveInfo').checked) {
            const shippingInfo = {
                name: customerInfo.name,
                phone: customerInfo.phone,
                address: customerInfo.address,
                note: customerInfo.note,
                paymentMethod: customerInfo.paymentMethod,
                deliveryMethod: customerInfo.deliveryMethod,
                saveInfo: true
            };
            localStorage.setItem(`shippingInfo_${currentUser.email}`, JSON.stringify(shippingInfo));
        } else {
            localStorage.removeItem(`shippingInfo_${currentUser.email}`);
        }

        // Tính toán phí vận chuyển
        const shippingFee = customerInfo.deliveryMethod === 'express' ? 50000 : 30000;

        // Tạo mã đơn hàng
        const orderId = 'DH' + Date.now();
        const orderDate = new Date().toLocaleString('vi-VN');

        // Tính toán tổng tiền
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const total = subtotal + shippingFee;

        // Tạo đơn hàng mới
        const order = {
            id: orderId,
            date: orderDate,
            customer: customerInfo,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            })),
            subtotal: subtotal,
            shipping: shippingFee,
            total: total,
            status: 'pending'
        };

        // Lưu đơn hàng vào danh sách đơn hàng
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Xóa giỏ hàng
        localStorage.removeItem('cart');
        cart = [];
        
        // Hiển thị thông báo thành công
        showNotification('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', 'success');
        
        // Đóng form thanh toán
        closeCheckoutForm();
        
        // Chuyển hướng đến trang lịch sử đơn hàng sau 2 giây
        setTimeout(() => {
            window.location.href = 'orders.html';
        }, 2000);
    });
}

// Hàm đóng form thanh toán
function closeCheckoutForm() {
    const checkoutForm = document.querySelector('.checkout-form');
    if (checkoutForm) {
        checkoutForm.remove();
    }
}

// Hàm hiển thị hóa đơn
function displayInvoice() {
    const order = JSON.parse(localStorage.getItem('currentOrder'));
    if (!order) {
        window.location.href = 'cart.html';
        return;
    }

    // Hiển thị thông tin đơn hàng
    document.getElementById('orderId').textContent = order.id;
    document.getElementById('orderDate').textContent = order.date;

    // Hiển thị thông tin khách hàng
    document.getElementById('customerName').textContent = order.customer.name;
    document.getElementById('customerEmail').textContent = order.customer.email;
    document.getElementById('customerPhone').textContent = order.customer.phone;
    document.getElementById('customerAddress').textContent = order.customer.address;
    document.getElementById('customerNote').textContent = order.customer.note || 'Không có';

    // Hiển thị phương thức thanh toán và giao hàng
    document.getElementById('paymentMethod').textContent = getPaymentMethodName(order.customer.paymentMethod);
    document.getElementById('deliveryMethod').textContent = getDeliveryMethodName(order.customer.deliveryMethod);

    // Hiển thị danh sách sản phẩm
    const invoiceItems = document.getElementById('invoiceItems');
    invoiceItems.innerHTML = order.items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${formatPrice(item.price)}</td>
            <td>${item.quantity}</td>
            <td>${formatPrice(item.price * item.quantity)}</td>
        </tr>
    `).join('');

    // Hiển thị tổng tiền
    document.getElementById('subtotal').textContent = formatPrice(order.subtotal);
    document.getElementById('shipping').textContent = formatPrice(order.shipping);
    document.getElementById('total').textContent = formatPrice(order.total);
}

// Hàm lấy tên phương thức thanh toán
function getPaymentMethodName(method) {
    switch(method) {
        case 'cod':
            return 'Thanh Toán Khi Nhận Hàng (COD)';
        case 'bank':
            return 'Chuyển Khoản Ngân Hàng';
        case 'momo':
            return 'Ví MoMo';
        case 'vnpay':
            return 'VNPay';
        default:
            return method;
    }
}

// Hàm lấy tên phương thức giao hàng
function getDeliveryMethodName(method) {
    switch(method) {
        case 'standard':
            return 'Giao Hàng Tiêu Chuẩn (2-3 ngày)';
        case 'express':
            return 'Giao Hàng Nhanh (24h)';
        default:
            return method;
    }
}

// Hàm tìm kiếm sản phẩm
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Hàm lọc sản phẩm
function filterProducts() {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    const priceCheckboxes = document.querySelectorAll('input[name="price"]:checked');
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    let filteredProducts = [...products];

    // Lọc theo tìm kiếm
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    // Lọc theo danh mục
    if (categoryCheckboxes.length > 0) {
        const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }

    // Lọc theo giá
    if (priceCheckboxes.length > 0) {
        const selectedPrices = Array.from(priceCheckboxes).map(cb => cb.value);
        filteredProducts = filteredProducts.filter(product => {
            return selectedPrices.some(priceRange => {
                switch(priceRange) {
                    case '0-100':
                        return product.price < 100000;
                    case '100-500':
                        return product.price >= 100000 && product.price <= 500000;
                    case '500-1000':
                        return product.price > 500000 && product.price <= 1000000;
                    case '1000-5000':
                        return product.price > 1000000 && product.price <= 5000000;
                    case '5000+':
                        return product.price > 5000000;
                }
            });
        });
    }

    displayProducts(filteredProducts);
}

// Hàm hiển thị chi tiết sản phẩm
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <p class="price">${formatPrice(product.price)}</p>
                    <p class="description">${product.description}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Xử lý đóng modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.remove();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.remove();
        }
    }
}

// Xử lý form liên hệ
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy dữ liệu từ form
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Hiển thị thông báo thành công
            showNotification('Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất có thể!', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCart();

    // Thêm sự kiện cho nút áp dụng bộ lọc
    const applyFiltersBtn = document.querySelector('.apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', filterProducts);
    }

    // Thêm sự kiện cho ô tìm kiếm
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }

    // Kiểm tra nếu đang ở trang hóa đơn
    if (window.location.pathname.includes('invoice.html')) {
        displayInvoice();
    }
});

// Chức năng đăng ký và đăng nhập
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem có đang ở trang auth không
    if (document.querySelector('.auth-section')) {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');

        // Chuyển đổi tab đăng nhập/đăng ký
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetForm = this.dataset.tab;
                
                // Cập nhật trạng thái active của tab
                authTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Hiển thị form tương ứng
                authForms.forEach(form => {
                    form.classList.remove('active');
                    if (form.id === `${targetForm}Form`) {
                        form.classList.add('active');
                    }
                });
            });
        });

        // Xử lý đăng ký
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const phone = document.getElementById('registerPhone').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Kiểm tra mật khẩu
            if (password !== confirmPassword) {
                showNotification('Mật khẩu xác nhận không khớp!', 'error');
                return;
            }
            
            // Kiểm tra email đã tồn tại chưa
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.some(user => user.email === email)) {
                showNotification('Email đã được sử dụng!', 'error');
                return;
            }
            
            // Lưu thông tin người dùng
            users.push({
                name,
                email,
                phone,
                password // Trong thực tế nên mã hóa mật khẩu
            });
            localStorage.setItem('users', JSON.stringify(users));
            
            showNotification('Đăng ký thành công!', 'success');
            
            // Chuyển sang form đăng nhập
            setTimeout(() => {
                document.querySelector('[data-tab="login"]').click();
                loginForm.reset();
            }, 1500);
        });

        // Xử lý đăng nhập
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Kiểm tra thông tin đăng nhập
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Lưu thông tin đăng nhập nếu được chọn
                if (rememberMe) {
                    localStorage.setItem('currentUser', JSON.stringify({
                        name: user.name,
                        email: user.email
                    }));
                } else {
                    sessionStorage.setItem('currentUser', JSON.stringify({
                        name: user.name,
                        email: user.email
                    }));
                }
                
                showNotification('Đăng nhập thành công!', 'success');
                
                // Chuyển hướng về trang chủ sau 1.5 giây
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showNotification('Email hoặc mật khẩu không chính xác!', 'error');
            }
        });

        // Xử lý đăng nhập mạng xã hội
        const socialButtons = document.querySelectorAll('.social-btn');
        socialButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.classList.contains('facebook') ? 'Facebook' : 'Google';
                showNotification(`Đăng nhập bằng ${platform} đang được phát triển!`, 'info');
            });
        });
    }
});

// Xử lý trạng thái đăng nhập
function updateAuthStatus() {
    const authLink = document.querySelector('.auth-link');
    if (!authLink) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser') || 'null');
    
    if (currentUser) {
        // Thay thế link đăng nhập bằng menu người dùng
        const userMenu = document.createElement('li');
        userMenu.className = 'user-menu';
        userMenu.innerHTML = `
            <span class="user-name">${currentUser.name}</span>
            <div class="dropdown-menu">
                <a href="profile.html"><i class="fas fa-user"></i> Tài Khoản</a>
                <a href="orders.html"><i class="fas fa-shopping-bag"></i> Đơn Hàng</a>
                <div class="divider"></div>
                <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Đăng Xuất</a>
            </div>
        `;
        authLink.parentNode.replaceChild(userMenu, authLink);

        // Xử lý đăng xuất
        document.getElementById('logoutBtn').addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            sessionStorage.removeItem('currentUser');
            window.location.reload();
        });
    }
}

// Gọi hàm cập nhật trạng thái đăng nhập khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    updateAuthStatus();
});

// Orders Page Functions
function displayOrders() {
    const ordersList = document.querySelector('.orders-list');
    if (!ordersList) {
        console.log('Không tìm thấy phần tử .orders-list');
        return;
    }

    // Lấy thông tin người dùng hiện tại
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        console.log('Người dùng chưa đăng nhập');
        window.location.href = 'auth.html';
        return;
    }

    // Lấy danh sách đơn hàng từ localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log('Tất cả đơn hàng:', orders);

    // Lọc đơn hàng của người dùng hiện tại
    const userOrders = orders.filter(order => {
        console.log('So sánh email:', order.customer.email, currentUser.email);
        return order.customer.email === currentUser.email;
    });
    console.log('Đơn hàng của người dùng:', userOrders);

    if (userOrders.length === 0) {
        console.log('Không có đơn hàng nào');
        ordersList.innerHTML = '<p class="no-orders">Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    // Sắp xếp đơn hàng theo thời gian (mới nhất lên đầu)
    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Hiển thị danh sách đơn hàng
    try {
        ordersList.innerHTML = userOrders.map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div class="order-info">
                        <span class="order-id">Đơn hàng #${order.id}</span>
                        <span class="order-date">${formatDate(order.date)}</span>
                    </div>
                    <span class="order-status status-${order.status || 'pending'}">${getOrderStatus(order.status || 'pending')}</span>
                </div>
                <div class="order-content">
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item">
                                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                                <div class="order-item-details">
                                    <h3>${item.name}</h3>
                                    <span class="order-item-price">${formatPrice(item.price)}</span>
                                    <span class="order-item-quantity">Số lượng: ${item.quantity}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-summary">
                        <span class="order-total">Tổng cộng: ${formatPrice(order.total)}</span>
                        <button class="view-details-btn" onclick="showOrderDetails('${order.id}')">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        console.log('Đã hiển thị đơn hàng thành công');
    } catch (error) {
        console.error('Lỗi khi hiển thị đơn hàng:', error);
        ordersList.innerHTML = '<p class="error">Có lỗi xảy ra khi hiển thị đơn hàng. Vui lòng thử lại sau.</p>';
    }
}

function showOrderDetails(orderId) {
    // Lấy thông tin đơn hàng từ localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        showNotification('Không tìm thấy thông tin đơn hàng!', 'error');
        return;
    }

    // Tạo modal hiển thị chi tiết
    const modalHTML = `
        <div class="order-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Chi tiết đơn hàng #${order.id}</h2>
                    <button class="close-modal" onclick="closeOrderModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-section">
                        <h3>Thông tin đơn hàng</h3>
                        <div class="modal-info-grid">
                            <div class="modal-info-item">
                                <label>Ngày đặt</label>
                                <span>${formatDate(order.date)}</span>
                            </div>
                            <div class="modal-info-item">
                                <label>Trạng thái</label>
                                <span class="status-${order.status || 'pending'}">${getOrderStatus(order.status || 'pending')}</span>
                            </div>
                            <div class="modal-info-item">
                                <label>Phương thức thanh toán</label>
                                <span>${getPaymentMethodText(order.customer.paymentMethod)}</span>
                            </div>
                            <div class="modal-info-item">
                                <label>Phương thức vận chuyển</label>
                                <span>${getDeliveryMethodText(order.customer.deliveryMethod)}</span>
                            </div>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Thông tin khách hàng</h3>
                        <div class="modal-info-grid">
                            <div class="modal-info-item">
                                <label>Họ tên</label>
                                <span>${order.customer.name}</span>
                            </div>
                            <div class="modal-info-item">
                                <label>Email</label>
                                <span>${order.customer.email}</span>
                            </div>
                            <div class="modal-info-item">
                                <label>Số điện thoại</label>
                                <span>${order.customer.phone}</span>
                            </div>
                            <div class="modal-info-item">
                                <label>Địa chỉ</label>
                                <span>${order.customer.address}</span>
                            </div>
                            ${order.customer.note ? `
                                <div class="modal-info-item">
                                    <label>Ghi chú</label>
                                    <span>${order.customer.note}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Danh sách sản phẩm</h3>
                        <table class="modal-items">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${order.items.map(item => `
                                    <tr>
                                        <td>${item.name}</td>
                                        <td>${formatPrice(item.price)}</td>
                                        <td>${item.quantity}</td>
                                        <td>${formatPrice(item.price * item.quantity)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="modal-section">
                        <div class="modal-summary">
                            <div class="modal-summary-item">
                                <span>Tạm tính</span>
                                <span>${formatPrice(order.subtotal)}</span>
                            </div>
                            <div class="modal-summary-item">
                                <span>Phí vận chuyển</span>
                                <span>${formatPrice(order.shipping)}</span>
                            </div>
                            <div class="modal-summary-item total">
                                <span>Tổng cộng</span>
                                <span>${formatPrice(order.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Thêm modal vào body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Thêm sự kiện click bên ngoài modal để đóng
    const modal = document.querySelector('.order-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeOrderModal();
        }
    });
}

function closeOrderModal() {
    const modal = document.querySelector('.order-modal');
    if (modal) {
        modal.remove();
    }
}

function getOrderStatus(status) {
    const statusMap = {
        'pending': 'Chờ xử lý',
        'processing': 'Đang xử lý',
        'shipping': 'Đang giao hàng',
        'delivered': 'Đã giao hàng',
        'cancelled': 'Đã hủy'
    };
    return statusMap[status] || 'Chờ xử lý';
}

function getPaymentMethodText(method) {
    const methodMap = {
        'cod': 'Thanh toán khi nhận hàng (COD)',
        'bank': 'Chuyển khoản ngân hàng',
        'momo': 'Ví MoMo',
        'vnpay': 'VNPay'
    };
    return methodMap[method] || method;
}

function getDeliveryMethodText(method) {
    const methodMap = {
        'standard': 'Giao hàng tiêu chuẩn (2-3 ngày)',
        'express': 'Giao hàng nhanh (24h)'
    };
    return methodMap[method] || method;
}

function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleString('vi-VN', options);
}

// Initialize orders page
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.orders-section')) {
        displayOrders();
    }
});

// Xử lý trang profile
document.addEventListener('DOMContentLoaded', function() {
    const profilePage = document.querySelector('.profile-section');
    if (!profilePage) return;

    // Kiểm tra đăng nhập
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        window.location.href = 'auth.html';
        return;
    }

    // Xử lý chuyển tab
    const menuItems = document.querySelectorAll('.profile-menu-item');
    const tabs = document.querySelectorAll('.profile-tab');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            
            // Xóa active class
            menuItems.forEach(i => i.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));
            
            // Thêm active class cho tab được chọn
            item.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Load thông tin người dùng
    loadUserProfile();

    // Load đơn hàng
    loadUserOrders();

    // Load địa chỉ
    loadUserAddresses();

    // Xử lý form thông tin cá nhân
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updateUserProfile();
        });
    }

    // Xử lý form bảo mật
    const securityForm = document.getElementById('securityForm');
    if (securityForm) {
        securityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updatePassword();
        });
    }

    // Xử lý thay đổi ảnh đại diện
    const changeAvatarBtn = document.querySelector('.change-avatar-btn');
    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const avatar = document.getElementById('userAvatar');
                        avatar.src = e.target.result;
                        
                        // Lưu ảnh đại diện mới
                        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                                         JSON.parse(sessionStorage.getItem('currentUser'));
                        if (currentUser) {
                            currentUser.avatar = e.target.result;
                            localStorage.setItem('currentUser', JSON.stringify(currentUser));
                            if (sessionStorage.getItem('currentUser')) {
                                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                            }
                            showNotification('Cập nhật ảnh đại diện thành công!', 'success');
                        }
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
    }
});

// Load thông tin người dùng
function loadUserProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        document.getElementById('fullName').value = currentUser.name || '';
        document.getElementById('email').value = currentUser.email || '';
        document.getElementById('phone').value = currentUser.phone || '';
        document.getElementById('birthday').value = currentUser.birthday || '';
        document.getElementById('gender').value = currentUser.gender || '';

        // Load avatar nếu có
        if (currentUser.avatar) {
            document.getElementById('userAvatar').src = currentUser.avatar;
        }
    }
}

// Cập nhật thông tin người dùng
function updateUserProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) return;

    // Lấy thông tin từ form
    const updatedUser = {
        ...currentUser,
        name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        birthday: document.getElementById('birthday').value,
        gender: document.getElementById('gender').value
    };

    // Cập nhật trong localStorage và sessionStorage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    if (sessionStorage.getItem('currentUser')) {
        sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }

    // Cập nhật trong danh sách users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = {
            ...users[userIndex],
            name: updatedUser.name,
            phone: updatedUser.phone,
            birthday: updatedUser.birthday,
            gender: updatedUser.gender
        };
        localStorage.setItem('users', JSON.stringify(users));
    }

    showNotification('Cập nhật thông tin thành công!', 'success');
}

// Cập nhật mật khẩu
function updatePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Kiểm tra mật khẩu hiện tại
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    const user = users.find(u => u.email === currentUser.email);
    
    if (!user || user.password !== currentPassword) {
        showNotification('Mật khẩu hiện tại không đúng!', 'error');
        return;
    }

    // Kiểm tra mật khẩu mới
    if (newPassword !== confirmPassword) {
        showNotification('Mật khẩu mới không khớp!', 'error');
        return;
    }

    // Cập nhật mật khẩu trong danh sách users
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Reset form
    document.getElementById('securityForm').reset();
    showNotification('Đổi mật khẩu thành công!', 'success');
}

// Load đơn hàng của người dùng
function loadUserOrders() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) return;

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(order => order.customer.email === currentUser.email);
    const ordersList = document.getElementById('userOrders');

    if (!ordersList) return;

    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p class="no-orders">Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    // Sắp xếp đơn hàng theo thời gian (mới nhất lên đầu)
    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    ordersList.innerHTML = userOrders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div class="order-info">
                    <span class="order-id">Đơn hàng #${order.id}</span>
                    <span class="order-date">${formatDate(order.date)}</span>
                </div>
                <span class="order-status status-${order.status || 'pending'}">${getOrderStatus(order.status || 'pending')}</span>
            </div>
            <div class="order-content">
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <img src="${item.image}" alt="${item.name}" class="order-item-image">
                            <div class="order-item-details">
                                <h3>${item.name}</h3>
                                <span class="order-item-price">${formatPrice(item.price)}</span>
                                <span class="order-item-quantity">x${item.quantity}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-summary">
                    <span class="order-total">Tổng tiền: ${formatPrice(order.total)}</span>
                    <button class="view-details-btn" onclick="showOrderDetails('${order.id}')">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load địa chỉ của người dùng
function loadUserAddresses() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) return;

    const addresses = JSON.parse(localStorage.getItem(`addresses_${currentUser.email}`)) || [];
    const addressList = document.getElementById('addressList');

    if (!addressList) return;

    if (addresses.length === 0) {
        addressList.innerHTML = '<p class="no-address">Bạn chưa có địa chỉ nào.</p>';
        return;
    }

    addressList.innerHTML = addresses.map((address, index) => `
        <div class="address-card">
            <h4>${address.name}</h4>
            <p>${address.phone}</p>
            <p>${address.address}</p>
            <div class="address-actions">
                <button onclick="editAddress(${index})">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteAddress(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Thêm địa chỉ mới
function showAddAddressForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Thêm địa chỉ mới</h3>
            <form id="addressForm" class="profile-form">
                <div class="form-group">
                    <label for="addressName">Họ và tên</label>
                    <input type="text" id="addressName" required>
                </div>
                <div class="form-group">
                    <label for="addressPhone">Số điện thoại</label>
                    <input type="tel" id="addressPhone" required>
                </div>
                <div class="form-group">
                    <label for="addressDetail">Địa chỉ chi tiết</label>
                    <textarea id="addressDetail" required></textarea>
                </div>
                <div class="form-buttons">
                    <button type="button" class="cancel-btn" onclick="closeModal()">Hủy</button>
                    <button type="submit" class="save-btn">Lưu địa chỉ</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Xử lý submit form
    document.getElementById('addressForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveNewAddress();
    });
}

// Lưu địa chỉ mới
function saveNewAddress() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) return;

    const name = document.getElementById('addressName').value;
    const phone = document.getElementById('addressPhone').value;
    const address = document.getElementById('addressDetail').value;

    const addresses = JSON.parse(localStorage.getItem(`addresses_${currentUser.email}`)) || [];
    addresses.push({ name, phone, address });
    localStorage.setItem(`addresses_${currentUser.email}`, JSON.stringify(addresses));

    closeModal();
    loadUserAddresses();
    showNotification('Thêm địa chỉ thành công!', 'success');
}

// Xóa địa chỉ
function deleteAddress(index) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || 
                       JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) return;

    const addresses = JSON.parse(localStorage.getItem(`addresses_${currentUser.email}`)) || [];
    addresses.splice(index, 1);
    localStorage.setItem(`addresses_${currentUser.email}`, JSON.stringify(addresses));

    loadUserAddresses();
    showNotification('Xóa địa chỉ thành công!', 'success');
}

// Đóng modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
} 