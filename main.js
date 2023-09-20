import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.x = -10;
scene.add( cube );

//lets add a torus
const tor_geometry = new THREE.TorusGeometry( 4, 3, 4, 50 ); 
const tor_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const torus = new THREE.Mesh( tor_geometry, tor_material ); 
torus.position.x = 5;
scene.add( torus );


camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );
    torus.rotation.y +=0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();