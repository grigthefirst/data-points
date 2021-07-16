# Solution
## How to run
Run `yarn install` & `yarn run start` for to run in developer mode.
## How to package and deploy
To build and run docker container, run
`docker build -t diagrams .`

`docker run -p 8080:80/tcp -d diagrams:latest`

## Description
I decided to use `React Flow` library instead of `React Diagrams`, because it provides more React-way to manage data. Most of needed features were available out of the box.

##Limitations
Right now solution works only with static set of nodes. 
It will be great to add some UI to add new nodes and update existing ones. 
With that I would also add some validation engine to describe rules for node creation and connection.

I'd use React Testing Library to create some integration tests as well.
# Coding Challenge 

## Goal

Implement an easy-to-use drag and drop pipeline designer. 

## Task

We want to introduce a pipeline designer where you can stick together different nodes and implement your own pipelines.

**Pipeline Designer:**

For the scope of this task, please implement a design area where the user can move around two or more elements. In our context, this could be a retriever and reader which define a QA search pipeline. It would be nice to have if you can connect two elements with a line.

