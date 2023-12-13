export const shortenAddress = (address: string) => {
	if (address.length <= 10) {
		return address; // Trả về nguyên địa chỉ nếu nó ngắn hơn hoặc bằng 10 ký tự
	}
	return (
		address.substring(0, 5) + "..." + address.substring(address.length - 5)
	);
};
