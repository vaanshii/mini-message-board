const { Router } = require("express");

const indexRouter = Router();

// * mock data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// * get requests

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

indexRouter.get("/messages/:index", (req, res) => {
  const messageIndex = req.params.index;
  const message = messages[messageIndex];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("viewDetails", {
    title: `Message from ${message.user}`,
    message: message,
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// * post requests

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
