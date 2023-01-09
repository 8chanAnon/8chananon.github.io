// multi-channel messenger

var masters = {}, clients = {};

onconnect = function (e)
{
  var port = e.ports [0];
  port.onmessageerror = function (e) { };
  port.onmessage = function (e) { message (port, e.data); };
  port.postMessage ({ id: "", app: "", msg: "start", info: "" });
}

var message = function (port, data)
{
  var id = data.id, app = data.app, msg = data.msg;
  var info = data.info; if (info == undefined) info = "";

  if (typeof id != "string" || typeof app != "string" || typeof msg != "string")
  {
    port.postMessage ({ id: "", app: "", msg: "invalid", info: info }); return;
  }
  var agent = app + "@" + id, master = masters [app], client = clients [agent];

  if (id)
  {
    if (port == master)
      if (client) { port = client; delete clients [agent]; } else msg = "error"; else
        if (master) { clients [agent] = port; port = master; } else msg = "error";
  }
  else if (msg == "hello")
  {
    if (master) msg = "ready";
  }
  else if (msg == "master")
  {
    if (!master && app) masters [app] = port; else msg = "error";
  }
  else if (msg == "goodbye")
  {
    if (port == master) masters [app] = null; else msg = "error";
  }
  else msg = "invalid";
    
  port.postMessage ({ id: id, app: app, msg: msg, info: info });
}
