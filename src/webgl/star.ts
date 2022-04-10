/**
 * This source is accorded from below URL
 * https://www.youtube.com/watch?v=vM8M4QloVL0
 */
import * as THREE from 'three';

function StarField() {
	const startVertex = [];
	for (let i = 0; i < 500; i++) {
		const x = (Math.random() - 0.5) * 2000;
		const y = (Math.random() - 0.5) * 2000;
		const z = (Math.random() - 0.5) * 2000;
		startVertex.push(x, y, z);
	}
	const starGemetory = new THREE.BufferGeometry();
	starGemetory.setAttribute('position', new THREE.Float32BufferAttribute(startVertex, 3));
	const starMaterial = new THREE.PointsMaterial({
		color: 0xffffff,
		size: 2
	});
	const stars = new THREE.Points(starGemetory, starMaterial);

	return stars;
}

export default StarField;
