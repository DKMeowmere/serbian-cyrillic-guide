import { useState } from "react"
import { RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { letters } from "../../data/letters"
import { LettersContainer } from "./styles"

export function Letters() {
	const [upperCaseModeOn, setUpperCaseModeOn] = useState(false)
	const [isVisible, setIsVisible] = useState({
		srCy: true,
		srLa: true,
		pl: true,
	})

	function changeVisibility(key: keyof typeof isVisible) {
		const newIsVisible = { ...isVisible }
		newIsVisible[key] = !isVisible[key]
		setIsVisible(newIsVisible)
	}

	return (
		<LettersContainer>
			<h2>Alfabet</h2>
			<div
				className="icon-container"
				onClick={() => setUpperCaseModeOn(!upperCaseModeOn)}
			>
				{upperCaseModeOn && <RxLetterCaseUppercase />}
				{!upperCaseModeOn && <RxLetterCaseLowercase />}
			</div>
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
					{letters.map(letter => (
						<tr key={letter.id}>
							<td className={`${!isVisible.srCy ? "invisible" : ""}`}>
								{upperCaseModeOn ? letter.srCy.toUpperCase() : letter.srCy}
							</td>
							<td className={`${!isVisible.srLa ? "invisible" : ""}`}>
								{upperCaseModeOn ? letter.srLa.toUpperCase() : letter.srLa}
							</td>
							<td className={`${!isVisible.pl ? "invisible" : ""}`}>
								{upperCaseModeOn ? letter.pl.toUpperCase() : letter.pl}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</LettersContainer>
	)
}
