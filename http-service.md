#####Getting Started
To enable HttpService, type this in the command bar:
```lua
Game:GetService("HttpService").HttpEnabled = true
Game:GetService("NetworkServer")
```

#####Sending a GET request
```lua
local result = Game:GetService("HttpService"):GetAsync("http://www.example.org/some-page")
```

#####Sending a POST request
```lua
Game:GetService("HttpService"):PostAsync("http://www.example.org/upload", "test", Enum.HttpContentType.TextPlain)
```

JSON:
```lua
local url = "http://www.example.org/upload"
local json = HttpService:JSONEncode({ userId = 261 })
HttpService:PostAsync(url, json, Enum.HttpContentType.ApplicationJson)
```

```lua
for _, enumItem in pairs(Enum.HttpContentType:GetEnumItems()) do
  print(enumItem.Name)
end
--> ApplicationJson
--> ApplicationXml
--> ApplicationUrlEncoded
--> TextPlain
--> TextXml
```

```lua
game:GetService("HttpService"):PostAsync("http://www.roblox.com/test", "username=Shedletsky&password=hunter2", Enum.HttpContentType.ApplicationUrlEncoded)
```

Your PHP page:

```php
<?php
  echo $_POST["username"];
?>
```

#####Content Types
ROBLOX may add more content types as time goes on. To get an up-to-date list, run this code:


HttpService lets you get data from the Internet into a ROBLOX game server.

If the response's status code is 2xx (success) then the response body will be returned. Otherwise the reason phrase will be returned.

#####Limitations
* You can't send requests to roblox.com
* GET and POST are the only supported methods
* Cookies are ignored
* Requests are cancelled after 30 seconds
* No way to set request headers
* No way to get response headers, only the response body

Here is Lua code representing what happens when you call
either GetAsync or PostAsync:
```lua
if not game:GetService("HttpService").HttpEnabled then
  error("Http requests are not enabled", 2)
end

if not game:FindService("NetworkServer") then
  error("Http requests can only be executed by game server", 2)
end

if url == "" then
  error("Empty URL", 2)
end

if requestsInLastMinute > 500 then
  error("Number of requests exceeded limit", 2)
end
```

#####PostAsync

```lua
local httpService = Game:GetService("HttpService")

local get = function(url)
  local result = httpService:GetAsync(url)
  print(result)
end

get("")
--> Empty URL

get("http")
--> trust check failed for http

get("http:")
--> 'http:' is missing a hostName

get("http://localhost")
--> http://localhost: HttpSendRequest, err=0x2EFD
```

url: HttpSendRequest, err=0x2EE2

The "err=0x2EFD" is the WinInet error code. Converting it to decimal gives us 12029. Check out the [WinInet Error Codes](http://support.microsoft.com/kb/193625)

local result = = Game:GetService("HttpService"):GetAsync("http://www.roblox.com")
print(result) --> "trust check failed for http://www.roblox.com"
```

```bat
ping roblox.com

Pinging roblox.com [209.15.211.168] with 32 bytes of data:
...
```

If you get an IP for roblox.com and try to send a request there, you will get a 403 and:

```lua
print(httpService:GetAsync("http://209.15.211.168"))
--> HttpService is not allowed to access ROBLOX resources
```

keep in mind that studio will have Roblox/WinInet user-agent because it's using WinInet and game servers will have Roblox/WinHttp because that is what they are using. Have yet to test MACs

As of now the HttpService JSON methods have many bugs and you should really use LoadLibrary("RbxUtility").DecodeJSON and EncodeJSON. Hopefully this will be fixed soon.

TODO node.js and PHP server code examples

The request will automatically be reissued on failure (retry policy) at least once.

An error may be put in output but it doesn't stop your Lua

If the post body > 256 bytes, it's Content-Type: gzip

TODO give PHP code and node.js code for handling gzip
####FAQ

#####Why do I get this error: "trust check failed for [url]"?
Make sure your URL begins with "http" or "https".
