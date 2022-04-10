/**
 * This source is accorded from below URL
 * https://www.youtube.com/watch?v=vM8M4QloVL0
 */
import * as THREE from 'three';
import { OrbitControls } from '@/node_modules/three/examples/jsm/controls/OrbitControls';
import { InteractionManager } from './three.interactive';
import TextSprite from '@seregpie/three.text-sprite';

import Earth from './earth';
import StarField from './star';

interface HomePageScreenProps {
	event: {
		earth: {
			onClick?: () => void;
		};
	};
}

/**
 * This function can execute in client side.
 */
const HomePageScreen = (props: HomePageScreenProps) => {
	const scene = new THREE.Scene(),
		camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000),
		renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#webgl-canvas') }),
		controls = new OrbitControls(camera, renderer.domElement),
		interactionManager = new InteractionManager(renderer, camera, renderer.domElement, false),
		pointer = new THREE.Vector2();

	camera.position.z = 15;
	const { object: earth, animate: earthAnimate } = Earth();
	scene.add(earth);
	scene.add(StarField());

	const text = new TextSprite({
		fontSize: 0.6,
		fontStyle: 'italic',
		text: [
			'Make people happy and absorb the happiness.',
			'Then make people bigger happiness.',
			'Leave structures which can circulate that.'
		].join('\n')
	});
	text.position.set(0, 0, 10);
	scene.add(text);

	// const bookmarkPlanet = createEarth()
	// bookmarkPlanet.position.set(-10, -10, 20)
	// scene.add(bookmarkPlanet)

	/** This is render logics */
	function render() {
		earthAnimate();
		controls.update();

		requestAnimationFrame(render);
		renderer.render(scene, camera);
		interactionManager.update();
	}
	render();

	/** This is logics */
	camera.position.setZ(300);
	let isZoomed = false;
	zoomAnimate();
	setTimeout(() => (isZoomed = true), 1 * 1000);
	function zoomAnimate() {
		if (camera.position.z > 20 && !isZoomed) {
			camera.position.z -= 10;
		}
		requestAnimationFrame(zoomAnimate);
	}

	function onPointerMove(event: MouseEvent) {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
	}

	const resize = () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	};
	resize();

	addEventListener('resize', resize);
	window.addEventListener('pointermove', onPointerMove, false);
	interactionManager.add(earth);
	earth.addEventListener('click', props.event.earth.onClick);
};

export default HomePageScreen;
