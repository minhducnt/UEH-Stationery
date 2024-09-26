//* Gán data vào local storage
export const setLocalStorage = (name, items) => {
    localStorage.setItem(name, JSON.stringify(items));
};

//* Lấy data từ local storage
export const getLocalStorage = name => {
    const data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    } else {
        localStorage.setItem(name, JSON.stringify([]));
        return [];
    }
};

//* Xóa data từ local storage
export const removeLocalStorage = name => {
    localStorage.removeItem(name);
};