/**
 * Tính giá bán của một giá trị với chiết khấu nhất định.
 * Giá bán được định dạng là vnd.
 *
 * @param {number} input Giá tiền ban đầu.
 * @param {number} discount Áp dụng giảm giá, chiết khấu, ví dụ .5 hoặc 50%.
 * @return Thành tiền sau khi đã giảm giá định dạng VND.
 * @customfunction
 */
function salePrice(input, discount) {
  let price = input - (input * discount); // Tính thành tiên sau khi đã có chiết khấu
  // Điều chỉnh định dạng cho giá trị tiền.
  let vndVN = Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
});
  return vndVN.format(price);
}