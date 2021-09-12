# Lab 3

## Git

`git` will allow us to connect to a repository, which is a virtual location where we will store code. You can think of it as a Google Drive with many many more features for developers.

Git is included by default with the Linux WSL.

Learn the basics: [Git 101](./git_101.md)

## Node

We are going to use `nmv` to manage the different versions of NodeJS and NPM.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Close and open your terminal.

We install the latest stableversion of Node:

```
nvm install --lts
```

You can check it installed correctly by doing:

```
node -v
npm -v
```

## Python 3

Python 3 is included by default in Ubuntu WSL. You can test it by running:

`python3`
