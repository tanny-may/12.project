import { useState, useEffect } from 'react';
import { downloadOFZ } from '../../domain/downloadOFZ';
import s from './Table.module.css';

type Data = {
    name: string,
    repayment: string,
    yearsUntilRepayment: number,
    profitability: number,
}

export function Table() {
	const [data, setData] = useState<Data[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		downloadOFZ()
			.then((result) => {
				setData(result);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Ошибка загрузки данных:', error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Загрузка данных...</p>;
	}

	return (
        <div className={s.wrapper}>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Погашение</th>
                        <th>Лет до погаш.</th>
                        <th>Доходность</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data.map((ofz, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ofz.name}</td>
                            <td>{ofz.repayment}</td>
                            <td>{ofz.yearsUntilRepayment}</td>
                            <td>{ofz.profitability}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
	);
}
