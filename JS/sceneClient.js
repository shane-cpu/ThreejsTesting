
class Scene {
	constructor()
	{
		// Set up scene basic attrobutes
		this.scene = new THREE.Scene(); // the scene itself
		this.scene.background = new THREE.Color('cyan');
		this.renderer = new THREE.WebGLRenderer(); // selecting the WebGLRenderer to render the 3D objects
		this.renderer.setSize(800, 600); // setting the size of the rendered window
		document.body.appendChild(this.renderer.domElement); // put the window in the html document

		this.camera = new Camera(new Vector3(50, 0, 50), new Vector3(0, 0, 0), this);
	}
	addToScene(Thing) {
		this.scene.add(Thing);
	}
	tick() {
		this.camera.tick(new Vector3(50, 0, 50));
	}
	render() {
		// Render changes in scene
		this.renderer.render(this.scene, this.camera.actualCamera);
	}
}

function randomRange(min, max) {
	return (Math.random() * (max - min)) + min;
}