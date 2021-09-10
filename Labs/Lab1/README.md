# Setting up your computer

## IDE

During the course, we will use [VSCode](https://code.visualstudio.com/) for giving the examples. Other options are available which you can use under your own responsability.

- [Sublime Text 4](https://www.sublimetext.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)

Tip: While installing VSCode, we recommend to activate the option "Add to PATH"

## Terminal

For Windows 10 or more, we recommend the usage of Linux WSL. Find the installation guide [here](./wsl_installation.md).

Additionally, we will use [Hyper.js](https://hyper.is/) for running the Linux WSL instead of the default terminal included.

For other Windows versions, you will nned to go with the [Gitbash](https://www.geeksforgeeks.org/working-on-git-bash/) or [Cygwin](https://cygwin.com/install.html).

Learn the basics: [Terminal 101](./terminal_101.md)

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

## MySQL

```
sudo apt update
sudo apt install mysql-server
```

[Configure the user](./mysql_setup.md) for your MySQL Server

## Web

Learn the basics: [Web 101](./web_101.md)