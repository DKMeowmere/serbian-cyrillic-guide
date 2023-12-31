import styled from "styled-components"

export const LettersContainer = styled.section`
	margin: 50px auto;
	h2 {
		font-size: 2rem;
	}
	.icon-container {
		margin: 10px auto;
		width: 50px;
		height: 50px;
		cursor: pointer;
		svg {
			width: 100%;
			height: 100%;
			fill: #000;
		}
	}
	table {
		width: 90%;
		margin: 50px auto 0;
		max-width: 700px;
		border-collapse: collapse;
		thead {
			tr {
				th {
					width: 33.3%;
					.flag {
						width: 60%;
						aspect-ratio: 16 / 9;
						object-fit: cover;
					}
				}
			}
		}
		tbody {
			.eye-icon {
				cursor: pointer;
				svg {
					width: 50px;
					height: 50px;
					vertical-align: middle;
					margin: auto;
				}
			}
			td {
				border: 1px #fff solid;
				font-size: 4rem;
			}
			.invisible {
				color: transparent;
				user-select: none;
				&:hover {
					color: #fff;
				}
			}
		}
	}
`
