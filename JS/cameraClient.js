
class Camera {
	constructor(Loc, Rot, scene) {
		this.Pos = Loc;
		this.Rot = Rot;
		this.dir = 0;

		this.actualCamera = new THREE.PerspectiveCamera(75, (window.innerWidth * 0.8)/(window.innerHeight * 0.8), 0.1, 1000); // creating the camera in 3D space
		scene.addToScene(this.actualCamera);

		this.actualCamera.position.x = this.Pos.x;
		this.actualCamera.position.y = this.Pos.y;
		this.actualCamera.position.z = this.Pos.z;

		this.actualCamera.lookAt(Rot.x, Rot.y, Rot.z);
	}
	tick(newPosition) {
		this.Pos = newPosition.clone();

		this.actualCamera.position.x = newPosition.x;
		this.actualCamera.position.y = newPosition.y;
		this.actualCamera.position.z = newPosition.z;

		this.actualCamera.lookAt(this.Rot.x, this.Rot.y, this.Rot.z);
	}
	updateVeiwport()
	{
		this.actualCamera.fov = (window.innerHeight * 0.8) / (window.screen.height * 0.8);
	    this.actualCamera.aspect = (window.innerWidth * 0.8) / (window.innerHeight * 0.8);
		this.actualCamera.updateProjectionMatrix();
	}
}