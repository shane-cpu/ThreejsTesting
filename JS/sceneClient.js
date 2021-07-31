
class Scene {
	constructor()
	{
		// Set up scene basic attrobutes
		this.scene = new THREE.Scene(); // the scene itself
		this.scene.background = new THREE.Color('cyan');
		this.renderer = new THREE.WebGLRenderer(); // selecting the WebGLRenderer to render the 3D objects
		this.renderer.setSize(window.innerWidth, window.innerHeight); // setting the size of the rendered window
		document.body.appendChild(this.renderer.domElement); // put the window in the html document
		
		this.canvas = this.renderer.domElement;
		this.canvas.style.position = 'absolute';
		this.canvas.style.left = '50%';
		this.canvas.style.top = '50%';
		this.canvas.style.transform = 'translate(-50%, -50%)';
		this.canvas.style.borderRadius = '20px';

		this.camera = new Camera(new Vector3(200, 100, 200), new Vector3(0, 0, 0), this);

		this.xPos = document.getElementById('xLoc');
		this.yPos = document.getElementById('yLoc');
		this.zPos = document.getElementById('zLoc');

		// this.handler = new avatarHandler();

		this.testActor = this.createAvatar(new Vector3(0, 0, 0));
	}
	createAvatar(location)
	{
		let geometry = new THREE.BoxGeometry( location.x, location.y, location.z );
		let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

		let box = new THREE.Mesh( geometry, material );

		// let avatar = this.handler.createAvatar(new Vector3(0, 0, 0));
		
		this.addToScene(box);

		return box;
	}
	addToScene(Thing) {
		this.scene.add(Thing);
	}
	tick() {
		this.updatePosTracker();
	}
	render() {
		// Render changes in scene
		this.camera.tick(this.camera.Pos);
		this.renderer.setViewport(0, 0, (window.innerWidth * 0.8), (window.innerHeight * 0.8));
	   	this.camera.updateVeiwport();
	   	this.renderer.setSize((window.innerWidth * 0.8), (window.innerHeight * 0.9));
		this.renderer.render(this.scene, this.camera.actualCamera);
	}
	updatePosTracker()
	{
		let baseHeight = (window.innerHeight * 0.2);

		this.xPos.innerHTML = "x : " + this.testActor.position.x;
		this.xPos.style.left = (window.innerWidth * 0.9) + 'px';
		this.xPos.style.top = baseHeight + 'px';

		this.yPos.innerHTML = "y : " + this.testActor.position.y;
		this.yPos.style.left = (window.innerWidth * 0.9) + 'px';
		this.yPos.style.top = (baseHeight + 40) + 'px';

		this.zPos.innerHTML = "z : " + this.testActor.position.z;
		this.zPos.style.left = (window.innerWidth * 0.9) + 'px';
		this.zPos.style.top = (baseHeight + 80) + 'px';
	}
}

function randomRange(min, max) {
	return (Math.random() * (max - min)) + min;
}