ROBLOX Web APIs
=

Rules
-
* Pascal-case path, camel-case for query string
* Don't include pages which are just redirects (e.g. www.roblox.com/drivers)
* Use 261 for userIds, 1818 for placeIds, Shedletsky for username, etc

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

####Group APIs
 * [/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&playerId=%d&groupId=%d](http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&playerid=261&groupid=57)
 * [/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerId=%d&groupId=%d](http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=261&groupid=57)
 * [/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerId=%d&groupId=%d](http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid=261&groupid=57)
 * [/Groups/GetPrimaryGroupInfo.ashx?users=ostrichSized,Shedletsky](http://www.roblox.com/Groups/GetPrimaryGroupInfo.ashx?users=ostrichSized,Shedletsky)

####Thumbnail APIs
 * [/Asset-Thumbnail/Json?assetId=1818&width=160&height=100&format=jpeg](http://www.roblox.com/asset-thumbnail/json?assetId=1818&width=160&height=100&format=jpeg)
 * [/Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&aid=1818](http://www.roblox.com/Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&aid=1818)
 * [/Outfit-Thumbnail/Json?userOutfitId=2](http://www.roblox.com/Outfit-Thumbnail/Json?userOutfitId=2&width=352&height=352&format=png)
 * [/Thumbs/Avatar.ashx?x=64&y=64&format=png&username=Shedletsky](http://www.roblox.com/Thumbs/Avatar.ashx?x=64&y=64&format=png&username=ROBLOX)
 * [/Thumbs/Avatar.asmx](http://www.roblox.com/Thumbs/Avatar.asmx)
 * [/Thumbs/AvatarImage.ashx?params=\[{"userId":"261"}\]&jsoncallback=jsonp](http://www.roblox.com/Thumbs/AvatarImage.ashx?params=%5B%7B%22userId%22:%22261%22%7D%5D&jsoncallback=jsonp)
 * [/Thumbs/BCOverlay.ashx?username=Shedletsky](http://www.roblox.com/Thumbs/BCOverlay.ashx?username=Shedletsky)
 * [/Thumbs/ItemImage.ashx?params=\[{"assetId":"1818"}\]&jsoncallback=jsonp](http://www.roblox.com/Thumbs/ItemImage.ashx?params=%5B%7B%22assetId%22:%221818%22%7D%5D&jsoncallback=jsonp)
 ```javascript
 var params = [{
    assetId: 1818
 }];
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

 * [/Thumbs/RawAsset.ashx?width=60&height=62&imageFormat=png&assetId=1818](http://www.roblox.com/Thumbs/RawAsset.ashx?width=60&height=62&imageFormat=png&assetId=1818)
 * [/Thumbs/Asset.asmx](http://www.roblox.com/Thumbs/Asset.asmx)

####Current User APIs
 * [/Game/GetAuthTicket](http://www.roblox.com/Game/GetAuthTicket)
 * [/Game/GetCurrentUser.ashx](http://www.roblox.com/Game/GetCurrentUser.ashx)
 * [/MobileAPI/UserInfo](http://www.roblox.com/mobileapi/userinfo)

####Login APIs

 ```http
POST https://www.roblox.com/NewLogin HTTP/1.1
Host: m.roblox.com
Content-Length: 29
Content-Type: application/json

{"username":"","password":""}
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

####How to download an asset
```http
GET http://www.roblox.com/Asset/?id=1818 HTTP/1.1
Host: www.roblox.com
User-Agent: Roblox
```

You can also download a specific version of an asset. Note that if version isn't specified, it will default to the latest version.

```http
GET http://www.roblox.com/Asset/?id=1818&version=1 HTTP/1.1
Host: www.roblox.com
User-Agent: Roblox
```

And if you have a specific versionId you can use that as well:
```http
GET http://www.roblox.com/Asset/?versionId=1 HTTP/1.1
Host: www.roblox.com
User-Agent: Roblox
```
Note: for some reason assetVersionId also works in the query string

The equivalent on the website is http://www.roblox.com/Item.aspx?avid=1

There's another parameter, serverPlaceId, which will deny the request if the owner of that place doesn't own it and it's not owned by roblox.


####Main Site
* [www.roblox.com](http://www.roblox.com)
 * [/Asset/BodyColors.ashx?userId=261](http://www.roblox.com/Asset/BodyColors.ashx?userId=261)
 * [/Asset/CharacterFetch.ashx?userId=261&placeId=1818](http://www.roblox.com/Asset/CharacterFetch.ashx?userId=261&placeId=1818)
 * [/Asset/GetScriptState.ashx?scriptHash=%s&accurateResults=true](http://www.roblox.com/Asset/GetScriptState.ashx?ScriptHash=53356c47685f350134c7e30efb66bf0&AccurateResults=true)
 * [/Game/BuildActionPermissionCheck.ashx?assetId=1818&userId=261&isSolo=true](http://www.roblox.com/Game/BuildActionPermissionCheck.ashx?assetId=1818&userId=261&isSolo=true)
 * [/Game/GamePass/GamePassHandler.ashx?action=HasPass&userId=261&passId=%d](http://www.roblox.com/Game/GamePass/GamePassHandler.ashx?action=HasPass&userId=1&passId=1818)

 * [/Game/KeepAlivePinger.ashx](http://www.roblox.com/Game/KeepAlivePinger.ashx)
 * [/Game/Logout.aspx](http://www.roblox.com/Game/Logout.aspx)
 * [/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&userid=261](http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&userid=261)
 * [/Game/PlaceLauncher.ashx?request=RequestGame&placeId=1818](http://www.roblox.com/Game/PlaceLauncher.ashx?request=RequestGame&placeId=1818)
 * [/Game/Tools/InsertAsset.ashx?nsets=10&type=base](http://www.roblox.com/Game/Tools/InsertAsset.ashx?nsets=10&type=base)
 * [/Game/Tools/InsertAsset.ashx?sid=%d](http://www.roblox.com/Game/Tools/InsertAsset.ashx?sid=2)
 * [/Game/Tools/InsertAsset.ashx?type=user&userId=261&nsets=20](http://www.roblox.com/Game/Tools/InsertAsset.ashx?nsets=20&type=user&userid=1)
 * [/Install/Service.asmx](http://www.roblox.com/Install/Service.asmx)
 * [/Login/Negotiate.ashx?suggest=%s](http://www.roblox.com/Login/Negotiate.ashx?suggest=)
 * [/Marketplace/EconomyServices.asmx](http://www.roblox.com/Marketplace/EconomyServices.asmx)
 * [/MobileAPI/Check-App-Version?appVersion=AppiOSV2.112.35972](http://www.roblox.com/mobileapi/check-app-version?appVersion=AppiOSV2.112.35972)
 * [/Outfits/Fetch?displayedUserId=261&pageNum=1](http://www.roblox.com/Outfits/Fetch?displayedUserId=261&pageNum=1)
 * [/Roblox.xsd](http://www.roblox.com/roblox.xsd)
 * [/UserCheck/CheckIfInvalidUsernameForSignup?username=Shedletsky](http://www.roblox.com/UserCheck/CheckIfInvalidUsernameForSignup?username=Shedletsky)
 * [/UserCheck/DoesUsernameExist?username=Shedletsky](http://www.roblox.com/UserCheck/DoesUsernameExist?username=Shedletsky)
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
 * [/Marketplace/ProductInfo?assetId=20573078](http://api.roblox.com/Marketplace/ProductInfo?assetId=20573078)
 * [/Marketplace/ProductDetails?productId=18026036](http://api.roblox.com/Marketplace/ProductDetails?productId=18026036)
 * [/Users/1](http://api.roblox.com/Users/1)
 * [/Ownership/HasAsset?userId=1&assetId=1818](http://api.roblox.com/Ownership/HasAsset?userId=1&assetId=1818)
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
