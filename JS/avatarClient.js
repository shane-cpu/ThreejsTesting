
class avatarHandler
{
	constructor()
	{
		this.avatars = [];
	}
	createAvatar(loc, player)
	{
		let verticesOfAvatar = [
		    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
		    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
		];

		let indicesOfFaces = [
		    2,1,0,    0,3,2,
		    0,4,7,    7,3,0,
		    0,1,5,    5,4,0,
		    1,2,6,    6,5,1,
		    2,3,7,    7,6,2,
		    4,5,6,    6,7,4
		];

		let geometry = new THREE.PolyhedronGeometry( verticesOfAvatar, indicesOfFaces, 1, 1 );

		let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

		let mesh = new THREE.Mesh( geometry, material );

		let avatar = {
			position : loc.clone(),
			mesh : mesh,
			player : player
		};

		this.avatars.push(avatar);

		return  avatar;
	}
	updateAvatars()
	{

	}
}