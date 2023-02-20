export function c(classes: (string | false | undefined)[]): string {
	return classes.filter(Boolean).join(' ');
}
