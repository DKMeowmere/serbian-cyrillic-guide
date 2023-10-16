import { Letters } from "../letters/Index"
import { Words } from "../words/Index"
import { Container } from "./styles"

export function Home() {
	return (
		<Container>
			<h1>Cyrylica Serbska - poradnik</h1>
			<Letters />
			<Words />
		</Container>
	)
}
