const ACCESS_TOKEN = "ACCESS_TOKEN";

export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token); //ลดผิดพลาดของการพิมพ์ผิด
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN); //link ไปตัวแปร token เดียวกัน
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
