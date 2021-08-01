
class avatarHandler
{
	constructor()
	{
		this.avatars = [];
	}
	createAvatar(loc, player)
	{
		let geometry = new THREE.BufferGeometry();

		// Every Three Is A Triangle
		let verticesOfAvatar = new Float32Array ([
		    -1.0, -1.0,  1.0,
			 1.0, -1.0,  1.0,
			 1.0,  1.0,  1.0,

			 1.0,  1.0,  1.0,
			-1.0,  1.0,  1.0,
			-1.0, -1.0,  1.0,

			 1.0, -1.0,  1.0,
			 1.0, -1.0, -1.0,
			 1.0,  1.0, -1.0,

			 1.0,  1.0, -1.0,
			 1.0,  1.0,  1.0,
			 1.0, -1.0,  1.0,

			 1.0, -1.0, -1.0,
			-1.0, -1.0, -1.0,
			-1.0,  1.0, -1.0,

			-1.0,  1.0, -1.0,
			 1.0,  1.0, -1.0,
			 1.0, -1.0, -1.0,

			-1.0, -1.0, -1.0,
			-1.0, -1.0,  1.0,
			-1.0,  1.0,  1.0,

			-1.0,  1.0,  1.0,
			-1.0,  1.0, -1.0,
			-1.0, -1.0, -1.0,

			-1.0,  1.0,  1.0,
			 1.0,  1.0,  1.0,
			 1.0,  1.0, -1.0,

			 1.0,  1.0, -1.0,
			-1.0,  1.0, -1.0,
			-1.0,  1.0,  1.0,

			 1.0,  -1.0, -1.0,
			 1.0,  -1.0,  1.0,
			-1.0,  -1.0,  1.0,

			-1.0,  -1.0,  1.0,
			-1.0,  -1.0, -1.0,
			 1.0,  -1.0, -1.0,
		]);

		geometry.setAttribute( 'position', new THREE.BufferAttribute( verticesOfAvatar, 3 ) );


		let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

		let mesh = new THREE.Mesh( geometry, material );

		let avatar = {
			position : loc.clone(),
			mesh : mesh,
			player : player
		};

		this.avatars.push(avatar);

		return avatar;
	}
	updateAvatars()
	{

	}
}