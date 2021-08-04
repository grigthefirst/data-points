# Solution
## How to run
Run `yarn install` & `yarn run start` for to run in developer mode.
## How to package and deploy
To build and run docker container, run
`docker build -t diagrams .`

`docker run -p 8080:80/tcp -d diagrams:latest`
