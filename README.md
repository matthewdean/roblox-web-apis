ROBLOX Web APIs
===============
* [Thumbnail APIs](#thumbnail-apis)
* [Set APIs](#set-apis)
* [Group APIs](#group-apis)
* [Economy APIs](#economy-apis)
* [Friend APIs](#friend-apis)
* [User APIs](#user-apis)
* [Asset APIs](#user-apis)

Search APIs
-----------
http://www.roblox.com/games/list-json?sortFilter=1&MaxRows=5

####Search for an audio asset with the search term "pendulum fasten"
http://www.roblox.com/catalog/json?Category=9&Keyword=pendulum%20fasten

Place APIs
----------
####Get game passes for a place
* http://www.roblox.com/PlaceItem/GetGamePassesPaged?placeId=21916786&startIndex=1&maxRows=3

Set APIs
--------
#### Get assets in a set
* http://www.roblox.com/Game/Tools/InsertAsset.ashx?sid=2

  ```xml
  <List>
      <Value>
          <Table>
              <Entry>
                  <Key>Name</Key>
                  <Value>Universal Connector</Value>
              </Entry>
              <Entry>
                  <Key>AssetId</Key>
                  <Value>10100443</Value>
              </Entry>
              <Entry>
                  <Key>AssetSetId</Key>
                  <Value>2</Value>
              </Entry>
              <Entry>
                  <Key>AssetVersionId</Key>
                  <Value>25509660</Value>
              </Entry>
              <Entry>
                  <Key>CreatorName</Key>
                  <Value>ROBLOX</Value>
              </Entry>
              <Entry>
                  <Key>IsTrusted</Key>
                  <Value>True</Value>
              </Entry>
          </Table>
      </Value>
  </List>
  ```

Economy APIs
------------

####Get the currency exchange rates
 * http://www.roblox.com/Marketplace/EconomyServices.asmx

  ```php
  // PHP 5+
  $client = new SoapClient("http://www.roblox.com/Marketplace/EconomyServices.asmx?WSDL");
  $response = $client->GetEstimatedTradeReturnForTickets(array("ticketsToTrade" => 1000));
  echo $response->GetEstimatedTradeReturnForTicketsResult;
  ```

  ```javascript
  // node.js
  var request = require('request');
  
  var options = {
      method: 'POST',
         url: 'http://www.roblox.com/Marketplace/EconomyServices.asmx/GetEstimatedTradeReturnForRobux',
        json: { robuxToTrade: 1000 }
  };
  
  request(options, function(err, res, json) {
      var tixAmount = json.d;
      console.log(tixAmount);
  });
  ```

Thumbnail APIs
--------------

####Asset Thumbnails
* http://www.roblox.com/Thumbs/RawAsset.ashx?assetId=1818&imageFormat=png&width=60&height=62
  * Returns either `PENDING` or the URL. Also accepts `assetVersionId`

* http://www.roblox.com/Thumbs/Asset.ashx?Width=110&Height=110&UserAssetID=86043285
  * Redirects to the URL. Also accepts `assetId`

* http://www.roblox.com/Thumbs/Asset.asmx/RequestThumbnail_v2?assetId=1818&assetVersionId=0&width=null&height=null&imageFormat=%22Png%22&thumbnailFormatId=296&overrideModeration=false
  * Returns `{"d":{"final":true,"url":"http://t2.rbxcdn.com/e55dc80c4015e7dd5f4373dc85d50195"}}`

* http://www.roblox.com/Thumbs/Pixelated.ashx?id=1818&x=250&y=250&format=png&tfid=114
  * Returns the image, but with the Content-Type: text/html so it won't render in browser
* http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?aid=1818&fmt=png&wd=420&ht=420
* http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?assetVersionId=1&fmt=png&wd=420&ht=420
  * Redirects to the URL

* http://www.roblox.com/Thumbs/PlaceImage.ashx?params=[{placeId:1818}]
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

* http://www.roblox.com/Thumbs/ItemImage.ashx?params=[{assetId:1818}]
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
  $.getJSON('http://www.roblox.com/Thumbs/ItemImage.ashx?params=[{assetId:1818}]&jsoncallback=?', function(json) {
      alert(json[0].name);
  });
  ```

* http://www.roblox.com/Asset-Thumbnail/Json?assetId=1818&width=160&height=100&format=jpeg
  ```json
  {
    "Url": "http://t2.rbxcdn.com/622729f930283b57f6172be41b8fe2fa",
    "Final": true
  }
  ```

####Outfit Thumbnails

* http://www.roblox.com/Outfit-Thumbnail/Json?userOutfitId=2&width=352&height=352&format=png

  ```json
  {
      "Url": "http://t7.rbxcdn.com/56abbdd66ad9847c7d801fa57dd7a249",
      "Final": true
  }
  ```
  
* http://www.roblox.com/Outfits/Fetch?displayedUserId=261&pageNum=1

####Avatar Thumbnails
* http://www.roblox.com/Thumbs/Avatar.ashx?username=Shedletsky
  * Redirects to the URL. Also accepts `userId`, and all other parameters can be omitted. If `userId` and `username` are both omitted, will return a ?

* http://www.roblox.com/Thumbs/AvatarImage.ashx?params=[{userId:261}]
  * Returns JSON
  ```javascript
  [{
    id: 261,
    name: "Shedletsky",
    url: "/user.aspx?id=261",
    thumbnailFinal: true, // if false, thumbnailUrl will be a placeholder
    thumbnailUrl: "http://t2.rbxcdn.com/cb86449444fd9f79bb4785fe778310f5",
    bcOverlayUrl: "http://images.rbxcdn.com/57ede1145c87db28cf51e2355909ee49.png" // null if NBC
  }]
  ```

####Builders Club Overlay
* http://www.roblox.com/Thumbs/BCOverlay.ashx?username=Shedletsky

####Valid Thumbnail Sizes
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

#### Get a group's emblem asset id
 * http://api.roblox.com/clans/get-by-user?userId=261

#### Get a thumbnail for a group
 * http://www.roblox.com/Thumbs/GroupImage.ashx?params=[{groupId:1}]

####Check if a user is in a group
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid=261&groupid=57

    ```xml
    <Value Type="boolean">false</Value>
    ```

####Get a user's rank number
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&playerid=261&groupid=57

    ```xml
    <Value Type="integer">0</Value>
    ```

####Get a user's rank name
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=261&groupid=57

    ```xml
    Guest
    ```

####Get a group's ranks
* http://www.roblox.com/api/groups/1/RoleSets/

  ```json
  [{
      "ID": 169,
      "Name": "Member",
      "Rank": 1
  }, {
      "ID": 143227,
      "Name": "Dude",
      "Rank": 180
  }, {
      "ID": 143226,
      "Name": "Hunk",
      "Rank": 200
  }, {
      "ID": 94,
      "Name": "Admin",
      "Rank": 254
  }, {
      "ID": 28,
      "Name": "Owner",
      "Rank": 255
  }]
  ```

####Get a user's primary group
 * http://www.roblox.com/Groups/GetPrimaryGroupInfo.ashx?users=Shedletsky,builderman

    ```json
    {
        "Shedletsky": {
            "GroupId": 685397,
            "GroupName": "The IronNoob Forums",
            "RoleSetName": "Forum Owner",
            "RoleSetRank": 254
        }
    }
    ```

Friend APIs
----
####Check if two users are friends
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId=261&userId=156

    ```xml
    <Value Type="boolean">true</Value>
    ```

####Check if a user is best friends with another user
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsBestFriendsWith&playerId=261&userId=156

    ```xml
    <Value Type="boolean">false</Value>
    ```

####Get information about a developer product
 * http://api.roblox.com/Marketplace/ProductDetails?productId=18026036

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
* http://api.roblox.com/Users/261

  ```json
  {
      "Id": 261,
      "Username": "Shedletsky"
  }
  ```

#### Get ID from username
```
$ curl -i http://www.roblox.com/user.aspx?username=Shedletsky

HTTP/1.1 302 Found
Location: /User.aspx?ID=261
```

#### Get a list of places created by a user
* http://www.roblox.com/Contests/Handlers/Showcases.ashx?userId=261

####Get a user's body part colors
 * http://www.roblox.com/Asset/BodyColors.ashx?userId=261

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4">
        <External>null</External>
        <External>nil</External>
        <Item class="BodyColors">
            <Properties>
                <int name="HeadColor">24</int>
                <int name="LeftArmColor">24</int>
                <int name="LeftLegColor">24</int>
                <string name="Name">Body Colors</string>
                <int name="RightArmColor">24</int>
                <int name="RightLegColor">24</int>
                <int name="TorsoColor">1003</int>
                <bool name="archivable">true</bool>
            </Properties>
        </Item>
    </roblox>
    ```

####Get asset IDs worn by a user
 * http://www.roblox.com/Asset/AvatarAccoutrements.ashx?userId=261

   ```
   http://www.roblox.com/Asset/BodyColors.ashx?userId=261;http://www.roblox.com/Asset/?id=42070576;http://www.roblox.com/Asset/?id=1078076;http://www.roblox.com/Asset/?id=1882759
   ```

####Get asset version IDs worn by a user
 * http://www.roblox.com/Asset/CharacterFetch.ashx?userId=261&placeId=1818

    ```
    http://www.roblox.com/Asset/BodyColors.ashx?userId=261;http://www.roblox.com/Asset/?versionid=25379590;http://www.roblox.com/Asset/?versionid=77449723;http://www.roblox.com/Asset/?versionid=100748238;http://www.roblox.com/Asset/?versionid=197094072
    ```

####Check if a username has been taken
 * http://www.roblox.com/UserCheck/DoesUsernameExist?username=Shedletsky
    
    ```json
    {
        "success" :true
    }
    ```

Asset APIs
----------

#### Get parts of a package
 * http://www.roblox.com/Game/GetAssetIdsForPackageId?packageId=27133145

####Check if a user owns an asset
 * http://api.roblox.com/Ownership/HasAsset?userId=261&assetId=1818

    ```json
    false
    ```

#####Get information about an asset
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

#####Download various versions of an asset
* http://www.roblox.com/Asset/?id=1818
* http://www.roblox.com/Asset/?id=1818&version=1
* http://www.roblox.com/Asset/?versionId=1
* http://www.roblox.com/Asset/?hash=b3c6b23ff18f48557b823ef5b72a0508

#####Upload an asset
```http
POST /Data/Upload.ashx?assetid=1818 HTTP/1.1
Host: www.roblox.com
Cookie: .ROBLOSECURITY=*
Content-Type: application/xml; charset=utf-8
Content-Length: 17

<roblox></roblox>
```

Returns an assetVersionId

#####Log in
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
* http://www.roblox.com/Game/LoadPlaceInfo.ashx?placeId=150381051

####Game Server APIs
 * [/Game/ChatFilter.ashx](http://www.roblox.com/Game/ChatFilter.ashx)

####Current User APIs
 * [/Game/GetAuthTicket](http://www.roblox.com/Game/GetAuthTicket)
 * [/Game/GetCurrentUser.ashx](http://www.roblox.com/Game/GetCurrentUser.ashx)
 * [/MobileAPI/UserInfo](http://www.roblox.com/mobileapi/userinfo)

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
POST https://m.roblox.com/Login HTTP/1.1
Host: m.roblox.com
Content-Length: 29
Content-Type: application/json

{"username":"","password":""}
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

The equivalent on the website is http://www.roblox.com/Item.aspx?avid=1

There's another parameter, serverPlaceId, which will deny the request if the owner of that place doesn't own it and it's not owned by roblox.


####Main Site
* [www.roblox.com](http://www.roblox.com)
 * [/Asset/GetScriptState.ashx?scriptHash=%s&accurateResults=true](http://www.roblox.com/Asset/GetScriptState.ashx?ScriptHash=53356c47685f350134c7e30efb66bf0&AccurateResults=true)
 * [/Game/BuildActionPermissionCheck.ashx?assetId=1818&userId=261&isSolo=true](http://www.roblox.com/Game/BuildActionPermissionCheck.ashx?assetId=1818&userId=261&isSolo=true)
 * [/Game/KeepAlivePinger.ashx](http://www.roblox.com/Game/KeepAlivePinger.ashx)
 * [/Game/Logout.aspx](http://www.roblox.com/Game/Logout.aspx)
 * [/Game/PlaceLauncher.ashx?request=RequestGame&placeId=1818](http://www.roblox.com/Game/PlaceLauncher.ashx?request=RequestGame&placeId=1818)
 * http://www.roblox.com/Game/GetUserBuildToolSet.ashx?assetId=1818&userId=261&isSolo=true
 * [/Game/Tools/InsertAsset.ashx?nsets=10&type=base](http://www.roblox.com/Game/Tools/InsertAsset.ashx?nsets=10&type=base)
 * [/Game/Tools/InsertAsset.ashx?type=user&userId=261&nsets=20](http://www.roblox.com/Game/Tools/InsertAsset.ashx?nsets=20&type=user&userid=1)
 * [/Install/Service.asmx](http://www.roblox.com/Install/Service.asmx)
 * [/Login/Negotiate.ashx?suggest=%s](http://www.roblox.com/Login/Negotiate.ashx?suggest=)
 * [/MobileAPI/Check-App-Version?appVersion=AppiOSV2.112.35972](http://www.roblox.com/mobileapi/check-app-version?appVersion=AppiOSV2.112.35972)
 * [/Roblox.xsd](http://www.roblox.com/roblox.xsd)
 * [/UserCheck/CheckIfInvalidUsernameForSignup?username=Shedletsky](http://www.roblox.com/UserCheck/CheckIfInvalidUsernameForSignup?username=Shedletsky)
 * [/UserCheck/GetRecommendedUsername?usernameToTry=Shedletsky](http://www.roblox.com/UserCheck/GetRecommendedUsername?usernameToTry=Shedletsky)

```http
POST https://www.roblox.com/UserCheck/validatepasswordforsignup HTTP/1.1
Host: www.roblox.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 36

username=Shedletsky&password=hunter2
```

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

* [api.roblox.com](http://api.roblox.com/docs)
 * [/Auth/Invalidate](http://api.roblox.com/Auth/Invalidate)
 * [/Auth/Negotiate?suggest=](http://api.roblox.com/Auth/Negotiate?suggest=)
 * [/Auth/Renew](http://api.roblox.com/Auth/Renew)
 * [/Game/GetAllowedExperimentalFeatures?placeId=1818](http://api.roblox.com/Game/GetAllowedExperimentalFeatures?placeId=1818)
* [ephemeralcounters.api.roblox.com](http://ephemeralcounters.api.roblox.com)
* [clientsettings.api.roblox.com](http://clientsettings.api.roblox.com)
 * [/Setting/QuietGet/ClientAppSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/ClientAppSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/ClientSharedSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/ClientSharedSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/iOSAppSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/iOSAppSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/WindowsAppSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/WindowsAppSettings?apiKey=D6925E56-BFB9-4908-AAA2-A5B1EC4B2D79)
 * [/Setting/QuietGet/WindowsBootstrapperSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/WindowsBootstrapperSettings?apiKey=76E5A40C-3AE1-4028-9F10-7C62520BD94F)
 * [/Setting/QuietGet/WindowsStudioBootstrapperSettings](http://clientsettings.api.roblox.com/Setting/QuietGet/WindowsStudioBootstrapperSettings?apiKey=76E5A40C-3AE1-4028-9F10-7C62520BD94F)
* [logging.service.roblox.com](http://logging.service.roblox.com) - for StatsService
* [/Game/ClientVersion.ashx](http://www.roblox.com/Game/ClientVersion.ashx)

```http

POST http://www.roblox.com/Services/GroupService.asmx/GetRoleSetsForGroup HTTP/1.1
Content-Type: application/json

{ "groupId": 1 }
```


#####Contributors: Mark Otaris, ArceusInator, oxcool1, Seranok
