import { proxy } from 'valtio';

const state = proxy({
	intro: true,
	color: '#3498DB',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './threejs.png',
	fullDecal: './threejs.png',
});

export default state;
