# Whatsapp Notification Web App

This web app is a notification subscription application wherein, user can subscribe for real-time updated notifications of an event.

This repository contains a template of the project. Keep reading to learn about how the project works, and what you should do to get the project running on your system.


## Quick Summary:

- Use this template to start build your own whatsapp notification system.
- `npm install` and `npm start` to run the project.
- You will be needing a twilio account to get this project running.

## The project template

This project is a Node.js Express application. 
- `Express` is a minimal web framework for Node.js that lets us define `handlers` (functions) for `routes` (URLs). If this is new to you, check out the [more about express](https://www.twitch.tv/videos/1555969207).
- The project includes `twilio` and `axios`:
  - You can use `twilio` to integrate Twilio into your project.
  - `axios` is a library for making HTTP requests. We can use it to make HTTP requests in our code, a bit like using `curl` but in `Node.js`. 
- The application has three `routes`: two GET and one POST.
- The root `/` route simply responds with `Hello World`.
- The `/github` route is a **dynamic** route. It uses the next part of the URL in the handler to make a request to the GitHub API. This is an example of using other APIs from our own code, using Axios.
- The `/sms` route is similar to the POST route from the Twilio SMS mission you would have seen in Week 5 of TwilioQuest. It's provided as a starting point for using Twilio in your project.
- The project uses `nodemon` so you don't have to restart the application everytime you make a change: it will automatically restart.

## Getting the project

This project is a GitHub Template Repository. You can make a copy of this template in your own repository by clicking the green "Use this template" button. You can read more [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

Once you have created the repository from the template, you can **Clone** the repository to your machine by running `git clone` in your terminal. 

## Setting up the project

- Whenever we start using a new Node.js project, we start by running `npm install`.
- `npm install` checks the `package.json` for the project's dependencies: these are the libraries and other modules that the project uses. `npm` will download and install any dependencies so that they are available for the project.
- In this project, `npm` will download `express`, `twilio`, `axios`, and `nodemon`. You may see it downloading other modules, because it will also download the dependencies for our dependencies!
- Once `npm install` has finished, you should set the environment variables for Twilio.
  - These are `TWILIO_ACCOUNT_SID` for your account SID, and `TWILIO_AUTH_TOKEN` for your auth token.
  - You can find both of these in your [Twilio Console](https://console.twilio.com).
  - If you don't know how to set environment variables on your system, check out [this blog post](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)
- Now you are ready to start the application, with `npm start`.
  - `npm start` is a custom install script specified in `package.json`. Rather than starting the app with `node index.js`, we start it with `nodemon` so that the app automatically restarts whenever we change any code!
- Your application will now be running on `localhost:3000`. You can verify that by opening `localhost:3000` in your browser: you should see `Hello World`.
- Check out the `src/routes` file to see what other routes are available to test. Remember, we can only test the GET routes in our browser!
- You may want to use `ngrok` to generate a public URL for the application if you plan to use the POST route, or to receive requests from outside your network.

## Working on the project

- Now you've got the template working, to build something similar like this, you first have to figure out whatsapp messaging service via Twilio, to know more about this go to : [Twilio Sandbox Config](https://www.twilio.com/docs/whatsapp/quickstart/node)
- Now, after you've figured out the whatsapp messaging service in your program, you might wanna figure out, what all numbers have subsribed to your messaging system (To know this go to your [Twilio Console](https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1) > Messaging (On the left hand side menu) > Settings > Whatsapp sandbox settings )
- After you have added the numbers you can send in the messages using `npm start` in your terminal.
- Congrats! you've sent your first message.
- Now, we have to figure out the scheduling system so, to do that, a function available in JS namely, `setTimeout` can come in very handy, (use this function according to your own conditions). You can check out this doc to get started with the function : [setTimeout](https://nodejs.org/en/docs/guides/timers-in-node/)
- Voila! you have your scheduled notification system running <3


## How should i implement this project?

To implement this project, follow these steps:- 

- Send a message `join fallen-flies` to `+14155238886` and woo-hoo you are added to the messaging list.
- To check if the project is running follow the instructions in `Setting up the project`.
- After you are done with the setup, you have to open the `routes.js` file in the code editor of your own choice.
- Then, add your number to an the array namely, `"phonenumbers"` and then save the file.
- Use `npm start` to check if you're recieving the message or not (Currently the program is set to send you a message after a minute)

That's all in this small project, hope you liked it :)
Developed by Chiranjeev 
