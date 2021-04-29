String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
}
String.prototype.hasText = function() {
	return this && this.length > 0;
}