import { getYearsUntil } from './getYearsUntil';

export function downloadOFZ() {
	return fetch('https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQOB/securities.json')
		.then((response) => response.json())
		.then((data) =>
			data.securities.data.map((ofzInfo: (string | number | null)[]) => {
				return {
					name: ofzInfo[2],
					repayment: ofzInfo[6].split('-').reverse().join('.'),
					yearsUntilRepayment: getYearsUntil(ofzInfo[6]),
					profitability: ofzInfo[4] as number,
				};
			})
		);
}