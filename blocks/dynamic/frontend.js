/**
 * External dependencies
 */
//  import { useEffect, useState } from '@wordpress/element';
//  import { useSelect, useDispatch } from '@wordpress/data';
import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import { TabbedComponent } from './assets/TabbedComponent';

const App = () => <div>New React!</div>

const varOne = 25;
const varTwo = 100;
const ProgressBar = ({ value, maxValue }) => {
	const progress = Math.floor((value / maxValue) * 100);

	return (
		<><div
			style={{
				position: 'relative',
				height: '20px',
				border: '1px solid #000',
				borderRadius: '5px',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: `${progress}%`,
					backgroundColor: 'green',
					transition: 'width 0.5s ease',
				}} />
			<div
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					height: '100%',
					width: `${100 - progress}%`,
					backgroundColor: '#fff',
				}} />
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '100%',
					borderRight: '1px solid #000',
					boxSizing: 'border-box',
				}} />
			<div
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					height: '100%',
					width: '100%',
					borderLeft: '1px solid #000',
					boxSizing: 'border-box',
				}} />
			<div
				style={{
					position: 'absolute',
					bottom: '-20px',
					left: '50%',
					transform: 'translateX(-50%)',
					fontSize: '14px',
					fontWeight: 'bold',
				}}
			>
				<h4>{progress}%
				</h4>
			</div>
		</div>



		</>

	);
};





domReady(function () {
	const container = document.querySelector("#render-here");
	render(

	<><ProgressBar value={varOne} maxValue={varTwo} /><TabbedComponent /></>

		, container);
}
)




// import { Button } from '@wordpress/components';


