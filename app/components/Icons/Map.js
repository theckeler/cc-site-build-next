export default function Map({ className = null, fillColor = "fill-black" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 96 960 960"
			className={className}>
			<path
				d="m612 936-263-93-179 71q-17 9-33.5-1T120 883V325q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840 268v565q0 11-7.5 19T814 864l-202 72Zm-34-75V356l-196-66v505l196 66Z"
				className={fillColor}
			/>
		</svg>
	);
}
