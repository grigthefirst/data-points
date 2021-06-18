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

## Background

### What is Haystack?

Haystack is an end-to-end framework that enables you to build powerful and production-ready pipelines for different search use cases. Whether you want to perform Question Answering or semantic document search, you can use the State-of-the-Art NLP models in Haystack to provide unique search experiences and allow your users to query in natural language. Haystack is built in a modular fashion so that you can combine the best technology from other open-source projects like Huggingface's Transformers, Elasticsearch, or Milvus.

A minimal Open-Domain QA Pipeline:

`p = Pipeline()`

`p.add_node(component=retriever, name="ESRetriever1", inputs=["Query"])`

`p.add_node(component=reader, name="QAReader", inputs=["ESRetriever1"])`

`res = p.run(query="What did Einstein work on?", top_k_retriever=1)`

![Pipeline](https://user-images.githubusercontent.com/1563902/102451716-54813700-4039-11eb-881e-f3c01b47ca15.png)

You will find more information in the [docs](https://haystack.deepset.ai/docs/latest/pipelinesmd).

### What is Haystack Hub?

Haystack Hub is a complementary platform to our [open-source framework](https://haystack.deepset.ai/docs/intromd). Haystack Hub enables faster proof of concepts, smooths the transition to production, and helps to operate & monitor your search pipelines in the enterprise context. As we offer Haystack Hub via an enterprise-ready SaaS model, you don't have to worry about scaling if your search traffic grows. Just focus on building your pipeline and integrating it into your application.
Core features
* Web interface for configuring and operating your search pipeline(s)
* REST API access
* Automatic scaling of models and infrastructure by us
* Monitoring of models & requests
* Continuous improvements of models via user feedback
* Search UI for end-users
* Support


###  Why do we need a pipeline designer?

There is more than one search use case for Haystack Hub users. Users want for example just a document retrieval pipeline to find the right documents to their questions. This flexibility is already implemented in Haystack and users can easily design their own pipelines customized to their needs. In the next iteration we will bring it to Haystack Hub.

## Task

Haystack Hub already implements the Questions Answering pipeline via a static interface. This way, you can configure your retriever and reader. Going forward, the interface has a lot of limitations as it does not give us any flexibility to design any pipelines. Therefore, we want to introduce a pipeline designer where you can stick together different nodes and implement your own pipelines.

**Pipeline Designer:**

For the scope of this task, please implement a design area where the user can move around two or more elements. In our context, this could be a retriever and reader which define a QA search pipeline. It would be nice to have if you can connect two elements with a line.

One possible way to implement this feature is the library [react diagrams](https://github.com/projectstorm/react-diagrams). You can also use other options.

You do not have to implement everything from scratch. Please feel free to use available tools and libraries which help you to implement the needed functionality.

Last step is to containerize your application.

## Submission

You should have received an invite to a private empty GitHub repository in your email.
Create a pull request on the private GitHub repository shared with you describing in a few sentences:
* Description of your solution
* Limitations of the solution
* How would you package and deploy it
* Future enhancements

Happy coding!
