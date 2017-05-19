function truncate(str, num) {
	var truncd = '';
	if (str.length > num) {
		truncd = str.slice(0,num-3) + '...';
		return truncd;
	}
	return str;
}
