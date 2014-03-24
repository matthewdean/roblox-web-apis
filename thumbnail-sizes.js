var request = require('request');

var sizes = [
  { width: 1, height: 1 }, // intentionally invalid
  { width: 48, height: 48 },
  {width: 60, height: 62 },
  { width: 75, height: 75 },
  { width: 100, height: 100 },
  { width: 110, height: 110 },
  { width: 160, height: 100 },
  { width: 250, height: 250 },
  { width: 352, height: 352 },
  { width: 420, height: 230 },
  { width: 420, height: 420 }
];

var apis = [
  {
		name: "/Game/Tools/ThumbnailAsset.ashx",
		url: "http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?aid=1818&fmt=png",
		width_param: "wd",
		height_param: "ht"
	},
	{
		name: "/Thumbs/Pixelated.ashx",
		url: "http://www.roblox.com/Thumbs/Pixelated.ashx?id=1818&format=Png&tfid=114",
		width_param: "x",
		height_param: "y"
	},
	{
		name: "/Asset-Thumbnail/Json",
		url: "http://www.roblox.com/Asset-Thumbnail/Json?assetId=1818&format=jpeg",
		width_param: "width",
		height_param: "height"
	}
];

sizes.forEach(function(size) {
	apis.forEach(function(api) {
		var qs = {};
		qs[api.width_param] = size.width;
		qs[api.height_param] = size.height;
		request.get(api.url, { qs: qs }, function(err, res) {
			console.log(res.statusCode, api.name, size.width + 'x' +  size.height);
		});
	});
});
