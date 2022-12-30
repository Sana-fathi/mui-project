const { log } = console;

export default function handler(req, res) {
  res.json(reqPayload);
  if (req.method === "POST") {
    // Process a POST request

    const reqPayload = req?.body;

    log("Req Payload:", reqPayload);
    return res.json({ msg: "Hello World" });
  } else {
    // Handle any other HTTP method
    return res.status(500).json({
      msg: "This needs to be a post request"
    })
  }
}
