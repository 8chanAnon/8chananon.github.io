// multi-channel messenger with websocket support for cross-origin apps

var masters = {}, clients = {}, sockets = {}, timers = {};
var sockserver = "ws" + location.origin.substr (4) + "/?";

onconnect = function (e)
{
  var port = e.ports [0];
  port.onmessageerror = function() { };
  port.onmessage = function (e) { message (this, e.data) };
  port.postMessage ({ id: "", app: "", msg: "start", info: "" });
  port.id = ("" + Date.now()).substr (-10);
}

var message = function (port, x)
{
  var { id, app, msg, info } = x || {}; x = "string";

  if (typeof id != x || typeof app != x || typeof msg != x) msg = ""; else
    if (id.search (/[@?:=\s]/) >= 0 || app.search (/[?:=\s]/) >= 0) msg = "";

  if (!msg || !app)
  {
    port.postMessage ({ id: "", app: "", msg: "invalid", info: "" }); return;
  }

  if (id == "null") id = port.id; if (info === undefined) info = "";
  var agent = app + ":" + id, master = masters [app], client = clients [agent];

  if (id)
  {
    if (port == master)
    {
      if (client) { delete clients [agent]; port = client; } else
        if (app [0] != "@") msg = "error"; else { trysock (null, id, app, msg); return; }
    }
    else
    {
      if (master) { clients [agent] = port; port = master; } else
        if (app [0] != "@") msg = "error"; else { trysock (port, id, app, msg); return; }
    }
  }
  else if (msg == "hello")
  {
    if (master) msg = "ready";
  }
  else if (msg == "master")
  {
    if (master) msg = "error"; else mastery (port, app);
  }
  else if (msg == "websock")
  {
    if (port != master) msg = "error"; else { websock (port, app); return; }
  }
  else if (msg == "goodbye")
  {
    if (port != master) msg = "error"; else mastery (null, app);
  }
  else if (msg == "timeout")
  {
    if (port == master) mastery (port, app); return;
  }
  else msg = "invalid";
    
  port.postMessage ({ id: id, app: app, msg: msg, info: info });
}

var mastery = function (port, app)
{
  if (!port) { masters [app] = null; websock (null, app); return; }

  var x = ":" + app; masters [app] = port; clearTimeout (timers [x]);

  timers [x] = setTimeout (function()
  {
    port.postMessage ({ id: "", app: app, msg: "", info: "" });
    timers [x] = setTimeout (function() { mastery (null, app) }, 10000);
  }, 10000);
}

var websock = function (port, app, retry)
{
  var sock = sockets [app]; if (retry == undefined) retry = 3;

  if (!port) if (!sock) return; else
  {
    clearInterval (timers [app]);
    timers [app] = sockets [app] = null; sock.close(); return;
  }

  if (sock) return; sock = sockets [app] = new WebSocket (sockserver + app);

  sock.onmessage = function (e)
  {
    if (!sockmsg (port, "", app, e.data)) websock (null, app);
  }
  sock.onopen = function ()
  {
    retry = 0; timers [app] = setInterval (function() { sock.send (""); }, 45000);
  }
  sock.onclose = function ()
  {
    if (sockets [app]) if (!--retry)
    {
      sockmsg (port, "", app, "error"); sockets [app] = null;
    }
    else
    {
      websock (null, app); setTimeout (function() { websock (port, app, retry); }, 5000);
    }
  }
}

var trysock = function (port, id, app, msg)
{
  if (!port)
  {
    if (port = sockets [app]) port.send ("?" + id + ":" + msg); return;
  }

  var x = '?' + id; sock = sockets [x]; clearTimeout (timers [x]);
  timers [x] = setTimeout (function() { sock.close(); }, 900000);

  if (sock) { sock.send ("?" + app + ":" + msg); return; }
  sock = sockets [x] = new WebSocket (sockserver + id);

  sock.onmessage = function (e)
  {
    if (!sockmsg (port, id, app, e.data)) sock.close(); else
      if (msg) { sock.send ("?" + app + ":" + msg); msg = ""; }
  }
  sock.onclose = function ()
  {
    clearTimeout (timers [x]); delete timers [x]; delete sockets [x];
  }
  sock.onerror = function ()
  {
    if (msg) sockmsg (port, id, app, "error");
  }
}

var sockmsg = function (port, id, app, msg)
{
  var n = msg.indexOf (":"), sockid = n < 0 ? "" : msg.substr (0, n);
  msg = msg.substr (n + 1).trim(); if (n = !msg) return n;

  if (!sockid && msg != "error")
  {
    n = (id && !msg.indexOf (id + " ")) || !msg.indexOf (app + " ");
    if (n) msg = "error"; else if (!id) msg = "websock"; else return !n;
  }

  port.postMessage ({ id: sockid || id, app: app, msg: msg, info: "" }); return !n;
}

