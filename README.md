Disclaimer: all information has been gathered using purely Google and levi's sitemap. No insider information has been used.

Economy APIs
----

#####Get the currency exchange rates
 * [/Marketplace/EconomyServices.asmx](http://www.roblox.com/Marketplace/EconomyServices.asmx)

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
    var tixAmount = json.d
    console.log(tixAmount)
});
```

```http
POST /Marketplace/EconomyServices.asmx/GetEstimatedTradeReturnForRobux HTTP/1.1
Host: www.roblox.com
Content-Type: application/json
Content-Length: 26

{
    "robuxToTrade": 1000
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 11

{
    "d": 15858
}
```

Thumbnail APIs
----

#####Valid thumbnail sizes

| Width | Height |
| -----:|:------ |
| 48    | 48     |
| 60    | 62     |
| 75    | 75     |
| 100   | 100    |
| 110   | 110    |
| 160   | 100    |
| 250   | 250    |
| 352   | 352    |
| 420   | 230    |
| 420   | 420    |

#####Get an asset thumbnail
 * http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&aid=1818

#####Get a pixelated asset thumbnail
 * http://www.roblox.com/Thumbs/Pixelated.ashx?id=1818&x=250&y=250&format=Png&tfid=114

#####Get an asset thumbnail URL
 * http://www.roblox.com/Asset-Thumbnail/Json?assetId=1818&width=160&height=100&format=jpeg

    ```json
    {
        "Url": "http://t2.rbxcdn.com/622729f930283b57f6172be41b8fe2fa",
        "Final": true
    }
    ```

#####Get an outfit's thumbnail URL
 * http://www.roblox.com/Outfit-Thumbnail/Json?userOutfitId=2&width=352&height=352&format=png
    
    ```json
    {
        "Url": "http://t7.rbxcdn.com/56abbdd66ad9847c7d801fa57dd7a249",
        "Final": true
    }
   ```

#####Get a user's thumbnail
 * http://www.roblox.com/Thumbs/Avatar.ashx?x=64&y=64&format=png&username=Shedletsky

#####Get a user's BC thumbnail
 * http://www.roblox.com/Thumbs/BCOverlay.ashx?username=Shedletsky

#####Get multiple user thumbnail URLs
 * [/Thumbs/AvatarImage.ashx?params=\[{"userId":"261"}\]&jsoncallback=jsonp](http://www.roblox.com/Thumbs/AvatarImage.ashx?params=%5B%7B%22userId%22:%22261%22%7D%5D&jsoncallback=jsonp)

#####Get multiple asset thumbnail URLs
 * [/Thumbs/ItemImage.ashx?params=\[{"assetId":"1818"}\]&jsoncallback=jsonp](http://www.roblox.com/Thumbs/ItemImage.ashx?params=%5B%7B%22assetId%22:%221818%22%7D%5D&jsoncallback=jsonp)

    ```javascript
    var params = [{ assetId: 1818 }];
    $.ajax({
    url: 'http://www.roblox.com/Thumbs/ItemImage.ashx',
       data: { params: JSON.stringify(params) },
       dataType: 'jsonp',
       jsonp: 'jsoncallback',
       success: function(json) {
       $.each(json, function(i, asset) {
          console.log(asset.id, asset.name);
       });
       }
    });
    ```

Group APIs
----

#####Check if a player is in a group
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid=261&groupid=57

    ```xml
    <Value Type="boolean">false</Value>
    ```

#####Get a player's rank number
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&playerid=261&groupid=57

    ```xml
    <Value Type="integer">0</Value>
    ```

#####Get a player's rank name
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=261&groupid=57

    ```xml
    Guest
    ```

#####Get a group's rolesets
http://www.roblox.com/api/groups/1/RoleSets/

#####Get the primary groups of multiple users
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
#####Check if two users are friends
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId=261&userId=156

    ```xml
    <Value Type="boolean">true</Value>
    ```

#####Check if a user is best friends with another user
 * http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsBestFriendsWith&playerId=261&userId=156

    ```xml
    <Value Type="boolean">false</Value>
    ```

#####Get information about a developer product
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
#####Get username from ID
 * http://api.roblox.com/Users/261

    ```json
    {
        "Id": 261,
        "Username": "Shedletsky"
    }
    ```

#####Get a user's body part colors
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

#####Get assets worn by a user
 * http://www.roblox.com/Asset/CharacterFetch.ashx?userId=261&placeId=1818

    ```html
    http://www.roblox.com/Asset/BodyColors.ashx?userId=261;http://www.roblox.com/Asset/?versionid=25379590;http://www.roblox.com/Asset/?versionid=77449723;http://www.roblox.com/Asset/?versionid=100748238;http://www.roblox.com/Asset/?versionid=197094072
    ```

#####Check if a username has been taken
 * http://www.roblox.com/UserCheck/DoesUsernameExist?username=Shedletsky
    
    ```json
    {
        "success" :true
    }
    ```

Asset APIs
----

#####Check if a user owns an asset
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
    
#####Get the assetId of an assetVersionId:
```bat
curl http://www.roblox.com/_-item?avid=1 --head
```

#####Download the latest version of an asset
```bat
curl http://www.roblox.com/Asset/?id=1818 --user-agent Roblox
```

#####Download a specific version of an asset

```bat
curl http://www.roblox.com/Asset/?id=1818&version=1 --user-agent Roblox
```

```bat
curl http://www.roblox.com/Asset/?versionId=1 --user-agent Roblox
```

```bat
curl http://www.roblox.com/Asset/?hash=b3c6b23ff18f48557b823ef5b72a0508 --user-agent Roblox
```

#####Upload an asset
```http
POST /Data/Upload.ashx?assetid=1818 HTTP/1.1
Host: www.roblox.com
Cookie: .ROBLOSECURITY=*
Content-Type: application/xml; charset=utf-8
Content-Length: 17

<roblox></roblox>
```
```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 9

ASSETVERSIONID_GOES_HERE
```

#####Log in
```http
POST https://www.roblox.com/NewLogin HTTP/1.1
Host: www.roblox.com
Content-Length: 29
Content-Type: application/json

{"username":"Shedletsky","password":"hunter2"}
```

#####Create an account


#####ROBLOX Client/Studio APIs


Rules
* Use 261 for userIds, 1818 for placeIds, Shedletsky for username, hunter2 for password, etc.
* User-Agent: ROBLOX iOS

Tips
-
* Google `site:api.roblox.com` to find pages for that subdomain
* Append `?WSDL`, `/js`, or `/jsdebug` to .asmx pages
* Most sites have a `/robots.txt`

####CoreScripts
* [/GameScript](http://logging.service.roblox.com/GameScript)
* [/Game/GameServer.ashx](http://www.roblox.com/Game/GameServer.ashx)
* [/Game/Join.ashx](http://www.roblox.com/Game/Join.ashx?placeId=1818)
* [/Game/LoadPlaceInfo.ashx?placeId=1818](http://www.roblox.com/Game/LoadPlaceInfo.ashx?placeId=1818)
* [/Game/PlaceSpecificScript.ashx?placeId=1818](http://www.roblox.com/Game/PlaceSpecificScript.ashx?placeId=1818)
* [/Game/PlaySolo.ashx](http://www.roblox.com/Game/PlaySolo.ashx)
* [/Game/Studio.ashx](http://www.roblox.com/Game/Studio.ashx)
* [/Game/Visit.ashx](http://www.roblox.com/Game/Visit.ashx?placeId=1818)

####Game Server APIs
 * [/Game/AreFriends?userId=261&access](http://www.roblox.com/Game/AreFriends?userId=1)
 * [/Game/Badge/HasBadge.ashx?userId=261&badgeId=%d&access](http://www.roblox.com/Game/Badge/HasBadge.ashx?userId=%d&badgeId=%d&access)
 * [/Game/Badge/IsBadgeDisabled.ashx?badgeId=%d&placeId=1818&access](http://www.roblox.com/Game/Badge/IsBadgeDisabled.ashx?badgeId=%d&placeId=%d&access)
 * [/Game/Knockouts.ashx?userId=261&(access)](http://www.roblox.com/Game/Knockouts.ashx?userId=261&access) 
 * [/Game/PlaceVisit.ashx?userId=261&associatedPlaceId=1818&access](http://www.roblox.com/Game/PlaceVisit.ashx?userId=261&associatedPlaceId=1818&access)
 * [/Game/Badge/AwardBadge.ashx?userId=261&badgeId=%d&placeId=1818&access](http://www.roblox.com/Game/Badge/AwardBadge.ashx?userId=1&badgeId=83094935&PlaceID=%d&access)
 * [/Game/Wipeouts.ashx?userId=261&access](http://www.roblox.com/Game/Wipeouts.ashx?userId=261&access)
 * [/Game/TreasureHunt.ashx?userId=261&eggnum=1&key=themusessing](http://www.roblox.com/Game/TreasureHunt.ashx?userId=261&eggnum=7&key=themusessing)
 * [/Game/ChatFilter.ashx](http://www.roblox.com/Game/ChatFilter.ashx)

####Current User APIs
 * [/Game/GetAuthTicket](http://www.roblox.com/Game/GetAuthTicket)
 * [/Game/GetCurrentUser.ashx](http://www.roblox.com/Game/GetCurrentUser.ashx)
 * [/MobileAPI/UserInfo](http://www.roblox.com/mobileapi/userinfo)

####Login APIs

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
 * [/Game/Tools/InsertAsset.ashx?nsets=10&type=base](http://www.roblox.com/Game/Tools/InsertAsset.ashx?nsets=10&type=base)
 * [/Game/Tools/InsertAsset.ashx?sid=%d](http://www.roblox.com/Game/Tools/InsertAsset.ashx?sid=2)
 * [/Game/Tools/InsertAsset.ashx?type=user&userId=261&nsets=20](http://www.roblox.com/Game/Tools/InsertAsset.ashx?nsets=20&type=user&userid=1)
 * [/Outfits/Fetch?displayedUserId=261&pageNum=1](http://www.roblox.com/Outfits/Fetch?displayedUserId=261&pageNum=1)
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
