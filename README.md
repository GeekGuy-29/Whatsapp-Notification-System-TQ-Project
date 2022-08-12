# Operator Academy Project Template

Welcome to Week 6, the project week! During this week, we'll put together everything we've learned during Operator Academy to build a final project.

This repository contains a template to use for your final project. Keep reading to learn about how the project works, and what you should do to complete the project assignment.

- [Operator Academy Project Template](#operator-academy-project-template)
  - [Quick Summary:](#quick-summary)
  - [The project template](#the-project-template)
  - [Getting the project](#getting-the-project)
  - [Setting up the project](#setting-up-the-project)
  - [Working on the project](#working-on-the-project)
    - [What should I build?](#what-should-i-build)
  - [Completing the project](#completing-the-project)

## Quick Summary:

- Use this template to start your Operator Academy project.
- `npm install` and `npm start` to run the project.
- Push your changes to your own GitHub repository, and submit the assignment in the Operator Console **by August 25th**.

## The project template

This project is a Node.js Express application. 
- `Express` is a minimal web framework for Node.js that lets us define `handlers` (functions) for `routes` (URLs). If this is new to you, check out the [recording for Class 5](https://www.twitch.tv/videos/1555969207).
- The project includes `twilio` and `axios`:
  - You can use `twilio` to integrate Twilio into your project.
  - `axios` is a library for making HTTP requests. We can use it to make HTTP requests in our code, a bit like using `curl` but in `Node.js`. 
- The application has three `routes`: two GET and one POST.
- The root `/` route simply responds with `Hello World`.
- The `/github` route is a **dynamic** route. It uses the next part of the URL in the handler to make a request to the GitHub API. This is an example of using other APIs from our own code, using Axios.
- The `/sms` route is similar to the POST route from the Twilio SMS mission you would have seen in Week 5 of TwilioQuest. It's provided as a starting point for using Twilio in your project.
- The project uses `nodemon` so you don't have to restart the application everytime you make a change: it will automatically restart.

## Getting the project

This project is a GitHub Template Repository. You can make a copy of this template in your own repository by clicking the green "Use this template" button. You can read more [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template). When you make the repository, please make it **Public**: we will need to be able to see the repository when you submit it for your assignment later.

Once you have created the repository from the template, you can **Clone** the repository to your machine by running `git clone` in your terminal. If you need a reminder of how `git clone` works, check out the [Week 3](https://www.twitch.tv/videos/1542471356) recording.


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

Now you've got the template working, it's time to add to it! Expand the project with new routes, change the existing ones, and add new functionality. Before you dive in, take a minute to think about "What do I want to build?". Using tools like [Excalidraw](https://excalidraw.com/) can be really helpful to plan out your ideas.

Don't forget what you learned in Week 3! Remember to `git commit` as you build, to save your progress. When you're ready, you can `git push` your changes to GitHub. 

### What should I build?

The project week is all about using what you've learned to make your own application. We've provided this template as a starting point, but now it's up to you! 

Here's some ideas to get you started:
- Use the Twilio API: what can you build with SMS and phone calls? What would be more convenient to do via the phone then via a website?
- Combine APIs: with `axios`, you can use other APIs in your code. Check out the `src/routes` file for an example. What could you do if you combined other APIs with Twilio?
- Share and discuss ideas in the Operator Academy Discord: each student should complete their own project, but coming up with ideas with other students is very encouraged!

## Completing the project

To complete the project week:
- Use this template to build your own project.
- Submit the GitHub link to your project through the Operator Console using the Week 6 assignments.
- You have a little bit longer for the project assignment, but all submissions must be in by the 25th of August.
