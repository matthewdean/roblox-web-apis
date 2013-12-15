Thumbnail APIs
----
#####Get an asset's thumbnail
 * [/Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&aid=1818](http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&aid=1818)

#####Get an asset's thumbnail URL
 * [/Asset-Thumbnail/Json?assetId=1818&width=160&height=100&format=jpeg](http://www.roblox.com/asset-thumbnail/json?assetId=1818&width=160&height=100&format=jpeg)

#####Get an outfit's thumbnail URL
 * [/Outfit-Thumbnail/Json?userOutfitId=2](http://www.roblox.com/Outfit-Thumbnail/Json?userOutfitId=2&width=352&height=352&format=png)

#####Get a user's thumbnail
 * [/Thumbs/Avatar.ashx?x=64&y=64&format=png&username=Shedletsky](http://www.roblox.com/Thumbs/Avatar.ashx?x=64&y=64&format=png&username=Shedletsky)

#####Get a user's BC thumbnail
 * [/Thumbs/BCOverlay.ashx?username=Shedletsky](http://www.roblox.com/Thumbs/BCOverlay.ashx?username=Shedletsky)

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
```http
GET /Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid=261&groupid=57 HTTP/1.1
Host: www.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 35

<Value Type="boolean">false</Value>
```

#####Get a player's rank number
```http
GET /Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&playerid=261&groupid=57 HTTP/1.1
Host: www.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 31

<Value Type="integer">0</Value>
```

#####Get a player's rank name
```http
GET /Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=261&groupid=57 HTTP/1.1
Host: www.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 5

Guest
```
####Get the primary groups of multiple users
```http
GET http://www.roblox.com/Groups/GetPrimaryGroupInfo.ashx?users=Shedletsky,builderman HTTP/1.1
Host: www.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 121

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
```http
GET /Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId=261&userId=156 HTTP/1.1
Host: www.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 34

<Value Type="boolean">true</Value>
```

#####Get information about a developer product
 * [/Marketplace/ProductDetails?productId=18026036](http://api.roblox.com/Marketplace/ProductDetails?productId=18026036)


User APIs
----
#####Get username from user id
 * [/Users/1](http://api.roblox.com/Users/1)

#####Get what body colors a user has
 * [/Asset/BodyColors.ashx?userId=261](http://www.roblox.com/Asset/BodyColors.ashx?userId=261)

#####Get the assets a user is wearing
 * [/Asset/CharacterFetch.ashx?userId=261&placeId=1818](http://www.roblox.com/Asset/CharacterFetch.ashx?userId=261&placeId=1818)

#####Check if a username has been taken
 * [/UserCheck/DoesUsernameExist?username=Shedletsky](http://www.roblox.com/UserCheck/DoesUsernameExist?username=Shedletsky)

Asset APIs
----

#####Check if a user owns an asset
```http
GET http://api.roblox.com/Ownership/HasAsset?userId=261&assetId=1818 HTTP/1.1
Host: api.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 5

false
```

#####Get information about an asset
```http
GET http://api.roblox.com/Marketplace/ProductInfo?assetId=1818 HTTP/1.1
Host: api.roblox.com
```
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 468

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

#####Download the latest version of an asset
```http
GET http://www.roblox.com/Asset/?id=1818 HTTP/1.1
Host: www.roblox.com
User-Agent: Roblox
```

#####Download a specific version of an asset

```http
GET http://www.roblox.com/Asset/?id=1818&version=1 HTTP/1.1
Host: www.roblox.com
User-Agent: Roblox
```
 
```http
GET http://www.roblox.com/Asset/?versionId=1 HTTP/1.1
Host: www.roblox.com
User-Agent: Roblox
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

Domains
-
* roblox.com
* rbxcdn.com
* rbxdev.com
* robloxlabs.com
* goblox.com

####CoreScripts
* [/GameScript](http://logging.service.roblox.com/GameScript)
* [/Game/GameServer.ashx](http://www.roblox.com/Game/GameServer.ashx)
* [/Game/Join.ashx](http://www.roblox.com/Game/Join.ashx?placeId=1818)
* [/Game/LoadPlaceInfo.ashx?placeId=261](http://www.roblox.com/Game/LoadPlaceInfo.ashx?placeId=1818)
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
 * [/Marketplace/EconomyServices.asmx](http://www.roblox.com/Marketplace/EconomyServices.asmx)
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

* [web.roblox.com](http://web.roblox.com)
* [de.roblox.com](http://de.roblox.com) - for german users
####Mobile Site
* [m.roblox.com](http://m.roblox.com) - for mobile devices

####Test Sites
tip: prepend `m.` or `setup.`
* [sitetest(1-3).robloxlabs.com](http://sitetest1.robloxlabs.com)
* [gametest(1-5).robloxlabs.com](http://gametest1.robloxlabs.com)

####Content Delivery Sites
* [jsak.roblox.com](http://jsak.roblox.com) - stands for "JavaScript akamai"
* [imagesak.roblox.com](http://imagesak.roblox.com) - stands for "images akamai"
* [images.rbxcdn.com](http://images.rbxcdn.com)
* [css.rbxcdn.com](http://css.rbxcdn.com)
* [js.rbxcdn.com](http://js.rbxcdn.com)
* [t(0-7)(-cf).rbxcdn.com](http://t0.rbxcdn.com) - for textures
* [c(0-7)(-cf).rbxcdn.com](http://c0.rbxcdn.com) - for content (sounds)

####Game Client
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
* [setup-gametest.roblox.com](http://setup-gametest.roblox.com)

####Promotional Sites
* [bloxcon.roblox.com](http://bloxcon.roblox.com)
* [shop.roblox.com](http://shop.roblox.com)
* [jobs.roblox.com](http://jobs.roblox.com)
* [corp.roblox.com](http://corp.roblox.com)
* [sandbox.corp.roblox.com](http://sandbox.corp.roblox.com)
* [blog.roblox.com](http://blog.roblox.com)
* [sandbox.blog.roblox.com](http://sandbox.blog.roblox.com)
* [techblog.roblox.com](http://techblog.roblox.com)
* [developer.roblox.com](http://developer.roblox.com)
* [rbxdev.com](http://rbxdev.com)

####Documentation
* [wiki.roblox.com](http://wiki.roblox.com)
* [sandbox.wiki.roblox.com](http://sandbox.wiki.roblox.com)
* [en.help.roblox.com](http://en.help.roblox.com)
* [de.help.roblox.com](http://de.help.roblox.com)

####Miscellaneous
* [polls.roblox.com](http://polls.roblox.com)
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

####Unused
* [logging.sitetest.roblox.com](http://logging.sitetest.roblox.com)
* [setup-staging.roblox.com](http://setup-staging.roblox.com/version.txt)
* [content.roblox.com](http://content.roblox.com)
* [blogs.roblox.com](http://blogs.roblox.com)
* [job.roblox.com](http://job.roblox.com)
* [community.roblox.com](http://community.roblox.com)

####Non-API URLs
 * [/Games/List](http://www.roblox.com/games/list)
 * [/Info/Terms-Of-Service](http://www.roblox.com/Info/Terms-Of-Service)
 * [/PaymentSystemUnavailable.aspx](http://www.roblox.com/PaymentSystemUnavailable.aspx)
 * [/Bloxmas-card.pdf](http://c0.rbxcdn.com/Bloxmas-card.pdf)
 * [/My/Share/PleaseUpgradeMe.aspx](http://www.roblox.com/My/Share/PleaseUpgradeMe.aspx)
 * [/My/Share/ReferralLeaderboards.aspx](http://www.roblox.com/My/Share/ReferralLeaderboards.aspx)
 * [/Micropay/Default.aspx](http://www.roblox.com/Micropay/Default.aspx)
 * [/Contests/Default.aspx?id=(1-51)](http://www.roblox.com/Contests/Default.aspx?id=1)
 * [/Contests/History.aspx?p=(1-2)](http://www.roblox.com/Contests/History.aspx?p=1)
 * [/Contests/Leaders.aspx?id=(1-51)](http://www.roblox.com/Contests/Leaders.aspx?id=1)
 * [/Contests/Prizes.aspx?id=(1-51)](http://www.roblox.com/Contests/Prizes.aspx?id=1)
 * [/Empty.ashx](http://www.roblox.com/Empty.aspx)
 * [/Ads/Default.aspx](http://www.roblox.com/Ads/Default.aspx)
 * [/Game/Help.aspx](http://www.roblox.com/Game/Help.aspx)
 * [/Item.aspx?id=1818](http://www.roblox.com/Item.aspx?id=1818)
 * [/Item.aspx?avid=1](http://www.roblox.com/Item.aspx?avid=1)
 * [/IDE/ClientToolbox.aspx](http://www.roblox.com/IDE/ClientToolbox.aspx)
 * [/Login/ResetPasswordRequest.aspx](http://www.roblox.com/Login/ResetPasswordRequest.aspx)
 * [/Game/MachineConfiguration.ashx](http://www.roblox.com/Game/MachineConfiguration.ashx)
 * [/Install/Setup.ashx](http://www.roblox.com/Install/Setup.ashx)
 * [/Login/FufillConstraint.aspx](http://www.roblox.com/Login/FulfillConstraint.aspx)
 * [/Game/Upload.aspx](http://www.roblox.com/Game/Upload.aspx)
 * [/userads/(1-4)](http://www.roblox.com/userads/1)
 * [/AbuseReport/InGameChatHandler.ashx](http://www.roblox.com/AbuseReport/InGameChatHandler.ashx)
 * [/Analytics/GamePerfMonitor.ashx](http://www.roblox.com/Analytics/GamePerfMonitor.ashx)
 * [/Browse.aspx?name=Shedletsky](http://www.roblox.com/Browse.aspx?name=Shedletsky)

