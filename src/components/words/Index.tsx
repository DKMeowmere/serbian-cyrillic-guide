import { useState, useMemo } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { WordType, words } from "../../data/words"
import { WordsContainer } from "./styles"

function shuffle(arr: WordType[]): WordType[] {
	for (let i = 0; i < arr.length; i++) {
		const randomIndex: number = Math.floor(Math.random() * arr.length)

		;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
	}

	return arr
}

export function Words() {
	const [isVisible, setIsVisible] = useState({
		srCy: true,
		srLa: true,
		pl: true,
	})
	const shuffledWords = useMemo<WordType[]>(() => shuffle(words), [])

	function changeVisibility(key: keyof typeof isVisible) {
		const newIsVisible = { ...isVisible }
		newIsVisible[key] = !isVisible[key]
		setIsVisible(newIsVisible)
	}

	return (
		<WordsContainer>
			<h2>Przykładowe słowa</h2>
			<table>
				<thead>
					<tr>
						<th>
							<img
								src="/serbianFlag.png"
								className="flag"
								alt="flag of Serbia"
							/>
						</th>
						<th>
							<img
								src="/rsFlag.png"
								className="flag"
								alt="flag of Republic of Srpska"
							/>
						</th>
						<th>
							<img
								src="/polishFlag.png"
								className="flag"
								alt="flag of Poland"
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="eye-icon" onClick={() => changeVisibility("srCy")}>
							{isVisible.srCy && <AiFillEye />}
							{!isVisible.srCy && <AiFillEyeInvisible />}
						</td>
						<td className="eye-icon" onClick={() => changeVisibility("srLa")}>
							{isVisible.srLa && <AiFillEye />}
							{!isVisible.srLa && <AiFillEyeInvisible />}
						</td>
						<td className="eye-icon" onClick={() => changeVisibility("pl")}>
							{isVisible.pl && <AiFillEye />}
							{!isVisible.pl && <AiFillEyeInvisible />}
						</td>
					</tr>
					{shuffledWords.map(word => (
						<tr key={word.id}>
							<td className={`${!isVisible.srCy ? "invisible" : ""}`}>
								{word.srCy}
							</td>
							<td className={`${!isVisible.srLa ? "invisible" : ""}`}>
								{word.srLa}
							</td>
							<td className={`${!isVisible.pl ? "invisible" : ""}`}>
								{word.pl}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</WordsContainer>
	)
}
