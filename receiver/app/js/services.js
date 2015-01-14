angular.module('math-cast')
	.constant('QuestionsData', [
		{
			possibleValues:[100,94,46,98],
			solutionIndex:1
		},
		{
			//Quanti Cerchi nella foto
			possibleValues:[9,8,10,7],
			solutionIndex:2
		},
		{
			/*Quale di queste due operazioni ha il risultato maggiore?*/
			possibleValues:[
				'Il risultato è lo stesso',
				'36 / 9',
				'50 / 10'
			],
			solutionIndex:2
		},
		{
			/*
			Qual è il valore della x nella seguente equazione?
			x + 15 + 18 – 3= 42*/
			possibleValues:[45,72,12,18],
			solutionIndex:2
		},
		{
			/*Quale delle due pile è più grande?*/
			possibleValues:[
				'una pila di 100 libri',
				'5 pile di 25 libri l\'una',
				'sono uguali'
			],
			solutionIndex:1
		},
		{
			/*
			Quale numero completa la serie?
			4 – 8 – 12 –   – 20 – 24*/
			possibleValues:[22,16,18,14],
			solutionIndex:1
		},
		{
			/*
			Che numero manca?*/
			possibleValues:[13,3,33,14],
			solutionIndex:3
		}
	]);