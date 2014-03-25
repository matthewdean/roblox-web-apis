var request = require('request');
var async = require('async');

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

var apis = [{
	name: "/Game/Tools/ThumbnailAsset.ashx",
	url: "http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?aid=1818&fmt=png",
	width_param: "wd",
	height_param: "ht"
}, {
	name: "/Thumbs/Pixelated.ashx",
	url: "http://www.roblox.com/Thumbs/Pixelated.ashx?id=1818&format=Png&tfid=114",
	width_param: "x",
	height_param: "y"
}, {
	name: "/Asset-Thumbnail/Json",
	url: "http://www.roblox.com/Asset-Thumbnail/Json?assetId=1818&format=jpeg",
	width_param: "width",
	height_param: "height"
}, {
	name: "/Outfit-Thumbnail/Json",
	url: "http://www.roblox.com/Outfit-Thumbnail/Json?userOutfitId=2&format=png",
	width_param: "width",
	height_param: "height"
}, {
	name: "/Thumbs/Asset.ashx",
	url: "http://www.roblox.com/Thumbs/Asset.ashx?AssetID=1818",
	width_param: "width",
	height_param: "height"
}, {
	name: "/Thumbs/RawAsset.ashx",
	url: "http://www.roblox.com/Thumbs/Asset.ashx?assetId=1818&imageFormat=png",
	width_param: "width",
	height_param: "height"
}, {
		name: "Avatar.ashx",
		url: "http://www.roblox.com/Thumbs/Avatar.ashx?username=Shedletsky&format=png",
		width_param: "x",
		height_param: "y"
}];

var q = async.queue(function (task, callback) {
	var qs = {};
	qs[task.width_param] = task.width;
	qs[task.height_param] = task.height;

	var width = task.width;
	var height = task.height;
	request.get(task.url, { qs: qs }, function(err, res) {
		if (res.statusCode == 200) {
				console.log(task.name, width + 'x' +  height);
		}
		callback();
	});
}, 2);

apis.forEach(function(api) {
	sizes.forEach(function(size) {
		var task = {};
		task.name = api.name;
		task.url = api.url;
		task.width = size.width;
		task.height = size.height;
		task.width_param = api.width_param;
		task.height_param = api.height_param;
		q.push(task);
	});
});
