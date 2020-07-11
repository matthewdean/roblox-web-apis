Roblox API Sites
================
| Site | Description |
| -: | :- |
| [accountsettings.roblox.com](https://accountsettings.roblox.com/docs) | All endpoints for account/user settings |
| [ads.roblox.com](https://ads.roblox.com/docs) | Ads configuration endpoints |
| [api.roblox.com](https://api.roblox.com/docs) | Miscellaneous endpoints |
| [assetdelivery.roblox.com](https://assetdelivery.roblox.com/docs) | Serves asset content |
| [auth.roblox.com](https://auth.roblox.com/docs) | All endpoints that tamper with authentication sessions |
| [avatar.roblox.com](https://avatar.roblox.com/docs) | Endpoints relating to the customization of player avatars |
| [badges.roblox.com](https://badges.roblox.com/docs) | Endpoints for badges and badge awards management |
| [billing.roblox.com](https://billing.roblox.com/docs) | Real money transactions and interaction |
| [catalog.roblox.com](https://catalog.roblox.com/docs) | Catalog items browsing and searching. Content and user based catalog items recommendations |
| [chat.roblox.com](https://chat.roblox.com/docs) | All chat and party related endpoints |
| [clientsettings.roblox.com](https://clientsettings.roblox.com/docs) | Used by various Roblox clients to retrieve configuration information |
| [develop.roblox.com](https://develop.roblox.com/docs) | Game development configuration endpoints |
| [followings.roblox.com](https://followings.roblox.com/docs) | Establishes follow relationship between subscriber entities (users, groups, etc) and source entities (games, groups, assets, etc.) |
| [friends.roblox.com](https://friends.roblox.com/docs) | Friends, followers, and contacts management |
| [gameinternationalization.roblox.com](https://gameinternationalization.roblox.com/docs) | Manages internationalization of games such as translating in game content. |
| [gamejoin.roblox.com](https://gamejoin.roblox.com/docs) | All endpoints around launching a game |
| [games.roblox.com](https://games.roblox.com/docs) | All endpoints for game discovery, and details |
| [gamepersistence.roblox.com](https://gamepersistence.roblox.com/docs) | Endpoints for the in-game datastore system for storing data for games |
| [groups.roblox.com](https://groups.roblox.com/docs) | Groups and clans management |
| [inventory.roblox.com](https://inventory.roblox.com/docs) | All endpoints for viewing (but not granting) ownership of items |
| [locale.roblox.com](https://locale.roblox.com/docs) | User locale management |
| [notifications.roblox.com](https://notifications.roblox.com/docs) | All notification stream endpoints |
| [points.roblox.com](https://points.roblox.com/docs) | The web Api for the in-game PointsService |
| [presence.roblox.com](https://presence.roblox.com/docs) | All endpoints for managing presence |
| [publish.roblox.com](https://publish.roblox.com/docs) | All endpoints handling file uploads |
| [textfilter.roblox.com](https://textfilter.roblox.com/docs) | High volume text filtering |
| [thumbnails.roblox.com](https://thumbnails.roblox.com/docs) | Endpoints for requesting thumbnails |
| [translations.roblox.com](https://translations.roblox.com/docs) | None |
| [voice.roblox.com](https://voice.roblox.com/docs) | APIs for Voice calls |

Deprecated APIs
===============
* [Thumbnail APIs](#thumbnail-apis)
* [Set APIs](#set-apis)
* [Group APIs](#group-apis)
* [Friend APIs](#friend-apis)
* [User APIs](#user-apis)
* [Asset APIs](#user-apis)

Search APIs
-----------
http://www.roblox.com/games/list-json?sortFilter=1&MaxRows=5

#### Search for an audio asset with the search term "pendulum fasten"
https://search.roblox.com/catalog/json?Category=9&Keyword=pendulum%20fasten

Place APIs
----------
#### Get a place's game instances
startIndex must be a multiple of 10
* https://www.roblox.com/games/getgameinstancesjson?placeId=1818&startindex=0

Thumbnail APIs
--------------

#### Asset Thumbnails
* https://www.roblox.com/Thumbs/RawAsset.ashx?assetId=1818&imageFormat=png&width=60&height=62
  * Returns either `PENDING` or the URL. Also accepts `assetVersionId`

* https://www.roblox.com/headshot-thumbnail/json?userId=1&width=180&height=180
  * Returns `{"Url":"http://t4.rbxcdn.com/61b0fbd421e702bcd04781ce867abef1","Final":true}`

* https://assetgame.roblox.com/Thumbs/Asset.ashx?width=110&height=110&assetId=1818
  * Redirects to the URL. Also accepts `userAssetId`

* https://assetgame.roblox.com/Thumbs/Asset.asmx/RequestThumbnail_v2?assetId=1818&assetVersionId=0&width=null&height=null&imageFormat=%22Png%22&thumbnailFormatId=296&overrideModeration=false
  * Returns `{"d":{"final":true,"url":"http://t2.rbxcdn.com/e55dc80c4015e7dd5f4373dc85d50195"}}`

* https://www.roblox.com/Thumbs/Pixelated.ashx?id=1818&x=250&y=250&format=png&tfid=114
  * Returns the image, but with the Content-Type: text/html so it won't render in browser
* https://assetgame.roblox.com/Game/Tools/ThumbnailAsset.ashx?aid=1818&fmt=png&wd=420&ht=420
* https://assetgame.roblox.com/Game/Tools/ThumbnailAsset.ashx?assetVersionId=1&fmt=png&wd=420&ht=420
  * Redirects to the URL
  
* http://www.roblox.com/bust-thumbnail/json?userId=2025110&height=180&width=180
  * Returns `{"Url":"https://tr.rbxcdn.com/054944f31d79876fa7aa2f2026c5cded/180/180/AvatarBust/Png","Final":true}`

* https://www.roblox.com/headshot-thumbnail/json?userId=1390724&width=420&height=420
  * Returns `{"Url":"https://tr.rbxcdn.com/170f106b72ec9e3aba781c795ed4a476/420/420/AvatarHeadshot/Png","Final":true}`

* https://www.roblox.com/place-thumbnails?params=[{placeId:1818}]
  ```javascript
  [{
    id: 1818,
    name: "Crossroads",
    url: "/Crossroads-place?id=1818",
    thumbnailFinal: true,
    thumbnailUrl: "http://t6.rbxcdn.com/5ae19af22b91ff36949a296d20b67aea",
    bcOverlayUrl: null,
    megaOverlayUrl: null,
    personalServerOverlayUrl: null
  }]
  ```

* https://www.roblox.com/item-thumbnails?params=[{assetId:1818}]
  ```javascript
  [{
    id: 1818,
    name: "Crossroads",
    url: "/Crossroads-place?id=1818",
    thumbnailFinal true,
    thumbnailUrl: "http://t3.rbxcdn.com/1e2476473494bfb202592501a5f86655",
    bcOverlayUrl: null,
    limitedOverlayUrl: null,
    deadlineOverlayUrl: null,
    limitedAltText: null,
    newOverlayUrl: null,
    imageSize: "large",
    saleOverlayUrl: null,
    iosOverlayUrl: null,
    transparentBackground: false
  }]
  ```

  You can specify the small image size (110x110) with params=[{assetId:1818,imageSize:small}]. Otherwise it will default to `large` (420x420)

  Both of these APIs support JSONP, so this code can be embedded in any web page:
  ```javascript
  $.getJSON('https://www.roblox.com/item-thumbnails?params=[{assetId:1818}]&jsoncallback=?', function(json) {
      alert(json[0].name);
  });
  ```

* https://assetgame.roblox.com/asset-thumbnail/json?assetId=1818&width=160&height=100&format=jpeg
  ```json
  {
    "Url": "https://t2.rbxcdn.com/622729f930283b57f6172be41b8fe2fa",
    "Final": true
  }
  ```

#### Outfit Thumbnails

* https://www.roblox.com/outfit-thumbnail/json?userOutfitId=2&width=352&height=352&format=png

  ```json
  {
      "Url": "https://t7.rbxcdn.com/56abbdd66ad9847c7d801fa57dd7a249",
      "Final": true
  }
  ```
  
* http://www.roblox.com/Outfits/Fetch?displayedUserId=261&pageNum=1

#### Avatar Thumbnails
* https://assetgame.roblox.com/Thumbs/Avatar.ashx?username=Shedletsky
  * Redirects to the URL. Also accepts `userId`, and all other parameters can be omitted. If `userId` and `username` are both omitted, will return a ?

* https://www.roblox.com/avatar-thumbnails?params=[{userId:261}]
  * Returns JSON
  ```javascript
  [{
      "id": 261,
      "name": "Shedletsky",
      "url": "https://www.roblox.com/users/261/profile",
      "thumbnailFinal": true,
      "thumbnailUrl": "https://t2.rbxcdn.com/897dc32162c65b38f6565ea9ef4ef02d",
      "bcOverlayUrl": "https://images.rbxcdn.com/57ede1145c87db28cf51e2355909ee49.png",
      "substitutionType": 0
  }]
  ```

#### Valid Thumbnail Sizes
|                                 | 48x48 | 60x62 | 75x75 | 100x100 | 110x110 | 160x100 | 250x250 | 352x352 | 420x230 | 420x420 |
| ------------------------------- | :---: | :---: | :---: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| /Game/Tools/ThumbnailAsset.ashx |       |       | x     |         | x       |         | x       |         |         | x       |
| /Thumbs/Pixelated.ashx          |       |       |       |         |         |         | x       |         |         |         |
| /Asset-Thumbnail/Json           | x     | x     | x     | x       | x       | x       | x       | x       | x       | x       |
| /Outfit-Thumbnail/Json          | x     | x     | x     | x       | x       | x       | x       | x       | x       | x       |
| /Thumbs/Asset.ashx              | x     | x     | x     | x       | x       | x       | x       | x       | x       | x       |
| /Thumbs/Avatar.ashx             | x     | x     | x     | x       | x       | x       | x       | x       | x       | x       |
| /Thumbs/RawAsset.ashx           | x     | x     | x     | x       | x       | x       | x       | x       | x       | x       |

Group APIs
----

#### Get a group's games
 * https://www.roblox.com/groups/2/games/1

#### Get a group's emblem asset id
 * https://api.roblox.com/clans/get-by-user?userId=261

#### Get a thumbnail for a group
 * https://www.roblox.com/group-thumbnails?params=[{groupId:1}]

#### Check a user's role in a group
 * https://groups.roblox.com/v1/users/261/groups/roles

#### Get a group's ranks
* https://groups.roblox.com/docs#!/Membership/get_v1_groups_groupId_roles'

#### Get a user's primary group
 * https://groups.roblox.com/docs#!/PrimaryGroup/get_v1_users_userId_groups_primary_role

Friend APIs
----
#### Check if two users are friends
 * https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId=261&userId=156

    ```xml
    <Value Type="boolean">true</Value>
    ```
    
Product APIs
----

#### Get information about a developer product
 * https://api.roblox.com/Marketplace/ProductDetails?productId=18026036

    ```json
    {
        "AssetId": 0,
        "ProductId": 18026036,
        "Name": "85 Candies Pack",
        "Description": null,
        "AssetTypeId": 0,
        "Creator": {
            "Id": 0,
            "Name": null
        },
        "IconImageAssetId": 0,
        "Created": "2013-10-16T00:37:38.517Z",
        "Updated": "2013-10-16T00:37:38.517Z",
        "PriceInRobux": 50,
        "PriceInTickets": 625,
        "Sales": 0,
        "IsNew": false,
        "IsForSale": true,
        "IsPublicDomain": false,
        "IsLimited": false,
        "IsLimitedUnique": false,
        "Remaining": null,
        "MinimumMembershipLevel": 0,
        "ContentRatingTypeId": 0
    }
    ```

User APIs
----
#### Get username from ID
* https://api.roblox.com/users/261

  ```json
  {
      "Id": 261,
      "Username": "Shedletsky"
  }
  ```

#### Get ID from username
* https://api.roblox.com/users/get-by-username?username=ROBLOX

  ```json
  {
      "Id": 1,
      "Username": "ROBLOX"
  }
  ```

#### Get a list of places created by a user
* https://www.roblox.com/users/profile/playergames-json?userId=261

    ```json
    {
        "Title": "Games",
        "Games": [{
            "CreatorID": 0,
            "CreatorName": "Shedletsky",
            "CreatorAbsoluteUrl": "https://www.roblox.com/users/261/profile",
            "Plays": 65437,
            "Price": 0,
            "ProductID": 0,
            "IsOwned": false,
            "IsVotingEnabled": true,
            "TotalUpVotes": 79,
            "TotalDownVotes": 34,
            "TotalBought": 0,
            "UniverseID": 150387,
            "HasErrorOcurred": false,
            "Favorites": 1728,
            "Description": "In a dystopian future, Robloxia is overrun by killbots.",
            "GameDetailReferralUrl": "http://www.roblox.com/games/48891/Timmy-and-the-Killbots",
            "Thumbnail": {
                "Final": true,
                "Url": "http://t7.rbxcdn.com/db35c88f3bfe3e45898cf9a65b370dd9",
                "RetryUrl": null
            },
            "UseDataSrc": false,
            "Name": "Timmy and the Killbots",
            "PlaceID": 48891,
            "PlayerCount": 0,
            "ImageId": 0
        }]
    }
    ```

Asset APIs
----------

#### Get parts of a package
 * https://inventory.roblox.com/v1/packages/27133145/assets

#### Check if a user owns an asset
 * http://api.roblox.com/Ownership/HasAsset?userId=261&assetId=1818

    ```json
    false
    ```

##### Get information about an asset
 * http://api.roblox.com/Marketplace/ProductInfo?assetId=1818

    ```json
    {
        "AssetId": 1818,
        "ProductId": 1305046,
        "Name": "Crossroads",
        "Description": "The classic ROBLOX level is back!",
        "AssetTypeId": 9,
        "Creator": {
            "Id": 1,
            "Name": "ROBLOX"
        },
        "IconImageAssetId": 0,
        "Created": "2007-05-01T01:07:04.78Z",
        "Updated": "2013-07-01T16:40:24.527Z",
        "PriceInRobux": null,
        "PriceInTickets": null,
        "Sales": 0,
        "IsNew": false,
        "IsForSale": false,
        "IsPublicDomain": false,
        "IsLimited": false,
        "IsLimitedUnique": false,
        "Remaining": null,
        "MinimumMembershipLevel": 0,
        "ContentRatingTypeId": 0
    }
    ```

#### Get an asset's latest VersionId
* http://www.roblox.com/studio/plugins/info?assetId=1818

#### Get serial number of a collectible asset
* https://www.roblox.com/Trade/InventoryHandler.ashx?userId=%d&assetTypeId=%d&ItemsPerPage=25&page=%d"
   
    ```json
	{
		"sl_translate":"message",
		"success":true,
		"msg":"Inventory retreived!",
		"data":{
			"agentID":90115385,
			"totalNumber":3,
			"InventoryItems":[{
				"Name":"Noob Attack: Artemis Annhilation",
				"ImageLink":"https://t2.rbxcdn.com/b8807e8da2b996cff306a3da3c5b2f7c",
				"ItemLink":"https://www.roblox.com/Noob-Attack-Artemis-Annhilation-item?id=553718984",
				"SerialNumber":"1742",
				"SerialNumberTotal":"5000",
				"AveragePrice":"312",
				"OriginalPrice":"75",
				"UserAssetID":"646564564",
				"MembershipLevel":null
			}]
		}
	}
   ```

##### Download various versions of an asset
* https://assetgame.roblox.com/Asset/?id=1818
* https://assetgame.roblox.com/Asset/?id=1818&version=1
* https://assetgame.roblox.com/Asset/?versionId=1
* https://assetgame.roblox.com/Asset/?hash=b3c6b23ff18f48557b823ef5b72a0508

##### Upload an asset
```http
POST /Data/Upload.ashx?assetid=1818 HTTP/1.1
Host: data.roblox.com
Cookie: .ROBLOSECURITY=*
Content-Type: application/xml; charset=utf-8
Content-Length: 17

<roblox></roblox>
```

Returns an assetVersionId

##### Log in
```http
POST https://www.roblox.com/NewLogin HTTP/1.1
Host: www.roblox.com
Content-Length: 29
Content-Type: application/json

{"username":"Shedletsky","password":"hunter2"}
```

* User-Agent: ROBLOX iOS

Useful Hacks
------------

#### Get the assetId of an assetVersionId:
```
$ curl -i http://www.roblox.com/--item?avid=1

HTTP/1.1 302 Found
Location: /ArrowCursor-png-item?id=1000000
```

#### Get the creator of an assetId, or see how many assetVersions it has
* https://assetgame.roblox.com/Game/LoadPlaceInfo.ashx?placeId=150381051

####Current User APIs
 * [/Game/GetAuthTicket](https://assetgame.roblox.com/Game/GetAuthTicket)
 * [/Game/GetCurrentUser.ashx](https://assetgame.roblox.com/Game/GetCurrentUser.ashx)
 * [/MobileAPI/UserInfo](https://www.roblox.com/mobileapi/userinfo)

Login APIs
----------

```http
POST https://www.roblox.com/MobileAPI/Signup HTTP/1.1
Host: www.roblox.com
Content-Type: application/json
Content-Length: 72

{"username":"Shedletsky","password":"hunter2","gender":"Male","dateOfBirth":"6/18/87"}
 ```
 ```http
HTTP/1.1 200 OK
Set-Cookie: .ROBLOSECURITY=*
Content-Length: 210
Content-Type: application/json

{"Status":"OK","UserInfo":{"UserID":261,"UserName":"Shedletsky","RobuxBalance":0,"TicketsBalance":0,"ThumbnailUrl":"http://t3.rbxcdn.com/1768c4f3c0d7c30d978c9dce68aa786c","IsAnyBuildersClubMember":false}}
 ```
 
 ```http
POST https://www.roblox.com/MobileAPI/Login HTTP/1.1
Host: www.roblox.com
Content-Length: 29
Content-Type: application/json

{"username":"","password":""}
 ```
 ```http
POST https://www.roblox.com/Services/Secure/LoginService.asmx/ValidateLogin HTTP/1.1
Host: www.roblox.com
Content-Length: 85
Content-Type: application/json

{"userName":"","password":"","isCaptchaOn":false,"challenge":"","captchaResponse":""}
 ```
 
 This page clears the browser's cookies. It doesn't invalidate the session:
 ```http
POST https://www.roblox.com/MobileAPI/Logout HTTP/1.1
Host: www.roblox.com
Cookie: .ROBLOSECURITY=*
Content-Length: 0
 ```

The equivalent on the website is https://www.roblox.com/Item.aspx?avid=1

There's another parameter, serverPlaceId, which will deny the request if the owner of that place doesn't own it and it's not owned by roblox.


####Main Site
* [www.roblox.com](http://www.roblox.com)
 * [/Game/BuildActionPermissionCheck.ashx?assetId=1818&userId=261&isSolo=true](http://assetgame.roblox.com/Game/BuildActionPermissionCheck.ashx?assetId=1818&userId=261&isSolo=true)
 * [/Game/KeepAlivePinger.ashx](http://assetgame.roblox.com/Game/KeepAlivePinger.ashx)
 * [/Game/Logout.aspx](http://assetgame.roblox.com/Game/Logout.aspx)
 * [/Game/PlaceLauncher.ashx?request=RequestGame&placeId=1818](http://assetgame.roblox.com/Game/PlaceLauncher.ashx?request=RequestGame&placeId=1818)
 * http://assetgame.roblox.com/Game/GetUserBuildToolSet.ashx?assetId=1818&userId=261&isSolo=true
 * [/Game/Tools/InsertAsset.ashx?nsets=10&type=base](http://assetgame.roblox.com/Game/Tools/InsertAsset.ashx?nsets=10&type=base)
 * [/Game/Tools/InsertAsset.ashx?type=user&userId=261&nsets=20](http://assetgame.roblox.com/Game/Tools/InsertAsset.ashx?nsets=20&type=user&userid=1)
 * [/Install/Service.asmx](http://www.roblox.com/Install/Service.asmx)
 * [/Login/Negotiate.ashx?suggest=%s](http://www.roblox.com/Login/Negotiate.ashx?suggest=)
 * [/MobileAPI/Check-App-Version?appVersion=AppiOSV2.112.35972](http://www.roblox.com/mobileapi/check-app-version?appVersion=AppiOSV2.112.35972)
 * [/Roblox.xsd](http://www.roblox.com/roblox.xsd)
 * [/UserCheck/CheckIfInvalidUsernameForSignup?username=Shedletsky](http://www.roblox.com/UserCheck/CheckIfInvalidUsernameForSignup?username=Shedletsky)
 * [/UserCheck/GetRecommendedUsername?usernameToTry=Shedletsky](http://www.roblox.com/UserCheck/GetRecommendedUsername?usernameToTry=Shedletsky)

* [setup.roblox.com](http://setup.roblox.com)
  * [/Roblox.exe](http://setup.roblox.com/Roblox.exe)
  * [/RobloxStudioLauncher.exe](http://setup.roblox.com/RobloxStudioLauncher.exe)
  * [/RobloxStudioLauncherBeta.exe](http://setup.roblox.com/RobloxStudioLauncherBeta.exe)
  * [/cdn.txt](http://setup.roblox.com/cdn.txt)
  *	[/version(.txt)](http://setup.roblox.com/version)
  *	[/versionStudio(.txt)](http://setup.roblox.com/versionStudio)
  *	[/versionQTStudio](http://setup.roblox.com/versionQTStudio)
  *	[/mac/version](http://setup.roblox.com/mac/version)
  *	[/mac/versionStudio](http://setup.roblox.com/mac/versionStudio)
  *	[/mac/RobloxStudio.dmg](http://setup.roblox.com/mac/RobloxStudio.dmg)

* [api.roblox.com](https://api.roblox.com/docs)
 * [/Auth/Invalidate](https://api.roblox.com/Auth/Invalidate)
 * [/Auth/Negotiate?suggest=](https://api.roblox.com/Auth/Negotiate?suggest=)
 * [/Auth/Renew](https://api.roblox.com/Auth/Renew)
 * [/Game/GetAllowedExperimentalFeatures?placeId=1818](https://api.roblox.com/Game/GetAllowedExperimentalFeatures?placeId=1818)
* [ephemeralcounters.api.roblox.com](http://ephemeralcounters.api.roblox.com)
* [clientsettings.api.roblox.com](http://clientsettings.api.roblox.com)
 * [/Setting/QuietGet/ClientAppSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/ClientAppSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/ClientSharedSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/ClientSharedSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/iOSAppSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/iOSAppSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/WindowsAppSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/WindowsAppSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/WindowsBootstrapperSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/WindowsBootstrapperSettings?apiKey=76E5A40C-3AE1-4028-9F10-7C62520BD94F)
 * [/Setting/QuietGet/WindowsStudioBootstrapperSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/WindowsStudioBootstrapperSettings?apiKey=76E5A40C-3AE1-4028-9F10-7C62520BD94F)
* [/Game/ClientVersion.ashx](http://assetgame.roblox.com/Game/ClientVersion.ashx)

```http

POST http://www.roblox.com/Services/GroupService.asmx/GetRoleSetsForGroup HTTP/1.1
Content-Type: application/json

{ "groupId": 1 }
``1
