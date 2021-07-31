
class Client {
	constructor(scene)
	{
		this.scene = scene;

		this.time = {
			dt:0,
			prev:0,
			now:0,
			calcdt(now) { // handles deltaTime calculations
				this.dt = (now - this.prev)/1000;
				this.now = this.prev = now;
			}
		};
	}
	tick(now) {

		this.time.calcdt(now);
		// next frame of animation
		requestAnimationFrame((time) => {
			this.tick(time);
		});
		// the next scene tick
		this.scene.tick();
		// rendering the scene
		this.scene.render();
	}
	sceneChange(scene) {
		this.scene = scene;
	}
}
// new instance of the sim
const client = new Client(new Scene());
// the first tick of the sim
client.tick();