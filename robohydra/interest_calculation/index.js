var RoboHydraHead       = require("robohydra").heads.RoboHydraHead;

var calculation_history = [
  { "time_calculated": new Date(), "total_amount": 100, "percentage_interest": 30, "interest": 30 },
  { "time_calculated": new Date(), "total_amount": 100, "percentage_interest": 30, "interest": 30 },
  { "time_calculated": new Date(), "total_amount": 100, "percentage_interest": 30, "interest": 30 },
  { "time_calculated": new Date(), "total_amount": 100, "percentage_interest": 30, "interest": 30 },
  { "time_calculated": new Date(), "total_amount": 100, "percentage_interest": 30, "interest": 30 }
]

var handleCreate = function (req, res) {
  var body = req.body;
  if (!body || !body.total_amount || isNaN(body.total_amount) || !body.percentage_interest || isNaN(body.percentage_interest)) {
    res.writeHead(400, "Bad Request")
  }
  var responseBody = { time_calculated: new Date(), total_amount: body.total_amount, percentage_interest: body.percentage_interest, interest: body.total_amount * body.percentage_interest / 100 }
  calculation_history.unshift(responseBody);
  res.send(JSON.stringify(responseBody));
  res.writeHead(201);
}

var handleIndex = function (res) {
  console.log("Hello")
  res.send(JSON.stringify(calculation_history));
  console.log("Hello2")
  res.writeHead(200);
}

var requestHandler = function (req, res) {
  switch(req.method) {
    case "GET":
      handleIndex(res);
      break;
    case "POST":
      handleCreate(req, res);
      break;
    default:
      res.writeHead(405, "Unsupported Method");
  };
  res.end()
}

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHead({
                path: '/interest_calculations',
                handler: requestHandler
            })
        ]
    };
};