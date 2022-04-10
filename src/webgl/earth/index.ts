/**
 * This source is accorded from below URL
 * https://www.youtube.com/watch?v=vM8M4QloVL0
 */
import * as THREE from 'three';

/** Below things are material */
// @ts-ignore
import vertexShader from './shaders/vertex.glsl';
// @ts-ignore
import fragmentShader from './shaders/fragment.glsl';
//@ts-ignore
import atomsphereVertexShader from './shaders/atomsphereVertex.glsl';
//@ts-ignore
import atomsphereFragmentShader from './shaders/atomsphereFragment.glsl';

function Earth() {
	const group = new THREE.Group(),
		sphere = new THREE.Mesh(
			new THREE.SphereGeometry(5, 50, 50),
			new THREE.ShaderMaterial({
				vertexShader,
				fragmentShader,
				uniforms: {
					planetTexture: { value: new THREE.TextureLoader().load('/planet-uv.jpg') }
				}
			})
		),
		atomsphere = new THREE.Mesh(
			new THREE.SphereGeometry(5, 50, 50),
			new THREE.ShaderMaterial({
				vertexShader: atomsphereVertexShader,
				fragmentShader: atomsphereFragmentShader,
				blending: THREE.AdditiveBlending,
				side: THREE.BackSide
			})
		);
	// text = new TextSprite({
	//     text: [
	//         'Make be given'
	//     ].join('\n')
	// })
	// text.position.set(10, 10, 10)
	atomsphere.scale.set(1.3, 1.3, 1.3);

	group.add(sphere);
	group.add(atomsphere);
	// group.add(text)

	return {
		object: group,
		animate: () => {
			sphere.rotation.x += 0.005;
			sphere.rotation.y += 0.005;
		}
	};
}

export default Earth;
