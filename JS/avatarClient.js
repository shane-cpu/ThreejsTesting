
class avatarHandler
{
	constructor()
	{
		this.avatars = [];
	}
	createAvatar(loc, scale, player)
	{
		let geometry = new THREE.BufferGeometry();

		let vertexes = [];

		vertexes[0] = new Vector3(loc.x + scale.x/2, loc.y + scale.y/2, loc.z + scale.z/2);
		vertexes[1] = new Vector3(loc.x - scale.x/2, loc.y + scale.y/2, loc.z + scale.z/2);
		vertexes[2] = new Vector3(loc.x + scale.x/2, loc.y - scale.y/2, loc.z + scale.z/2);
		vertexes[3] = new Vector3(loc.x + scale.x/2, loc.y + scale.y/2, loc.z - scale.z/2);
		vertexes[4] = new Vector3(loc.x + scale.x/2, loc.y - scale.y/2, loc.z - scale.z/2);
		vertexes[5] = new Vector3(loc.x - scale.x/2, loc.y + scale.y/2, loc.z - scale.z/2);
		vertexes[6] = new Vector3(loc.x - scale.x/2, loc.y - scale.y/2, loc.z + scale.z/2);
		vertexes[7] = new Vector3(loc.x - scale.x/2, loc.y - scale.y/2, loc.z - scale.z/2);
		

		// Every Three Is A Triangle
		let verticesOfAvatar = new Float32Array ([
		     vertexes[6].x,  vertexes[6].y,  vertexes[6].z, /// side Z+
			 vertexes[2].x,  vertexes[2].y,  vertexes[2].z,
			 vertexes[0].x,  vertexes[0].y,  vertexes[0].z,

			 vertexes[0].x,  vertexes[0].y,  vertexes[0].z,
			 vertexes[1].x,  vertexes[1].y,  vertexes[1].z,
			 vertexes[6].x,  vertexes[6].y,  vertexes[6].z,

			 vertexes[2].x,  vertexes[2].y,  vertexes[2].z, /// side X+
			 vertexes[4].x,  vertexes[4].y,  vertexes[4].z,
			 vertexes[3].x,  vertexes[3].y,  vertexes[3].z,

			 vertexes[3].x,  vertexes[3].y,  vertexes[3].z,
			 vertexes[0].x,  vertexes[0].y,  vertexes[0].z,
			 vertexes[2].x,  vertexes[2].y,  vertexes[2].z,

			 vertexes[4].x,  vertexes[4].y,  vertexes[4].z, /// side Z-
			 vertexes[7].x,  vertexes[7].y,  vertexes[7].z,
			 vertexes[5].x,  vertexes[5].y,  vertexes[5].z,

			 vertexes[5].x,  vertexes[5].y,  vertexes[5].z,
			 vertexes[3].x,  vertexes[3].y,  vertexes[3].z,
			 vertexes[4].x,  vertexes[4].y,  vertexes[4].z,

			 vertexes[7].x,  vertexes[7].y,  vertexes[7].z, /// side X-
			 vertexes[6].x,  vertexes[6].y,  vertexes[6].z,
			 vertexes[1].x,  vertexes[1].y,  vertexes[1].z,

			 vertexes[1].x,  vertexes[1].y,  vertexes[1].z,
			 vertexes[5].x,  vertexes[5].y,  vertexes[5].z,
			 vertexes[7].x,  vertexes[7].y,  vertexes[7].z,

			 vertexes[1].x,  vertexes[1].y,  vertexes[1].z, /// side Y+
			 vertexes[0].x,  vertexes[0].y,  vertexes[0].z,
			 vertexes[3].x,  vertexes[3].y,  vertexes[3].z,

			 vertexes[3].x,  vertexes[3].y,  vertexes[3].z,
			 vertexes[5].x,  vertexes[5].y,  vertexes[5].z,
			 vertexes[1].x,  vertexes[1].y,  vertexes[1].z,

			 vertexes[4].x,  vertexes[4].y,  vertexes[4].z, /// side Y-
			 vertexes[2].x,  vertexes[2].y,  vertexes[2].z,
			 vertexes[6].x,  vertexes[6].y,  vertexes[6].z,

			 vertexes[6].x,  vertexes[6].y,  vertexes[6].z,
			 vertexes[7].x,  vertexes[7].y,  vertexes[7].z,
			 vertexes[4].x,  vertexes[4].y,  vertexes[4].z,
		]);

		geometry.setAttribute( 'position', new THREE.BufferAttribute( verticesOfAvatar, 3 ) );


		let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

		let mesh = new THREE.Mesh( geometry, material );

		let avatar = {
			mesh : mesh,
			player : player,
			position : loc.clone(),
			scale : scale.clone(),
			vertexes : vertexes.slice()
		};

		this.avatars.push(avatar);

		return avatar;
	}
	updateAvatars()
	{

	}
}