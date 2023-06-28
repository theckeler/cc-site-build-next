export default function IconText({ title, className, Icon, onClick }) {
	return (
		<button
			className={`p-2 flex items-center justify-center uppercase min-h-full ${className}`}
			onClick={onClick}>
			<Icon />
			{title}
		</button>
	);
}
