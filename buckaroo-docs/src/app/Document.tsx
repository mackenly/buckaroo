import styles from "./styles.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Buckaroo - Rust Framework for Cloudflare</title>
			<link rel="stylesheet" href={styles} />
			<link rel="icon" href="https://fav.farm/🤠" />
		</head>
		<body>
			<div id="root">{children}</div>
			<script>import("/src/client.tsx")</script>
		</body>
	</html>
);
