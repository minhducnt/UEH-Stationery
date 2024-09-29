//* Kiểm tra xem token JWT có hết hạn không
const isTokenExpired = expiryTime => {
    if (expiryTime) {
        const expiryDate = new Date(expiryTime.ExpiresAt);
        const currentTime = new Date();
        return currentTime > expiryDate;
    }
    return true;
};

//* Viết hoa chữ cái đầu tiên của một chuỗi
function toSentenceCase(string) {
    if (string == null) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//* Viết hoa chữ cái đầu tiên của mỗi từ trong một chuỗi
function toTitleCase(string) {
    if (string == null) return '';
    return string.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//* Định dạng tiền tệ
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

export const Helper = {
    isTokenExpired,
    toSentenceCase,
    toTitleCase,
    formatCurrency
};