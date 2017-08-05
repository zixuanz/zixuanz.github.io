---
layout: post
title: "Install Multiple Versions of Python on Mac"
category: Web
date: 2017-05-21 18:25:00 -0700
tags: [Python, pyenv, pyenv-virtualenv, Mac, MacOS, HomeBrew]
---

###### Table of Contents
  * [HomeBrew](#homebrew)
  * [pyenv](#pyenv)
    + Install
    + Setup Environment
    + Examine Installation
    + Useful Commands
  * [Python](#python)
    + Install
    + Use Multiple versions
  * [pyenv-virtualenv](#pyenvv)
    + Install
    + Setup Environment
    + Set and Activate Environment

---

Mac already provides python 2.7. However, I needed to use Django with python 3.6 for a demo on my Mac. Thus, I installed **pyenv** and **pyenv-virtualenv** for convenience.

Pyenv is light but strong. By pyenv, users can manage multiple versions of python on one system. And its plugin pyenv-virtualenv can create several virtual environment which allows users working independently.

Here is [link](https://github.com/pyenv/pyenv#choosing-the-python-version "github adr") to the doc for pyenv. As author recommended, I use HomeBrew to install pyenv.

---

#### - HomeBrew <a id="homebrew"></a>

+ If you are new to HomeBrew, just come [here](https://brew.sh "HomeBrew Page") to learn it.
+ If you already install it, please update it by `brew update` in Terminal before installing.

---

#### - pyenv <a id="pyenv"></a>

##### --- Install

  Open Terminal and type `brew install pyenv` to install pyenv

##### --- Setup Environment

1. Open Terminal.
1. Go to home folder by typing `cd` or `cd ~` in Terminal.
1. Open **.bash_profile** (If not existed, just create one) by any editors (nano, vim, etc).
1. Type following code. Then save and exit editor.
```bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```
1. Make it effect immediately by typing `source .bash_profile` in Terminal

##### --- Examine Installation

In Terminal, enter command `pyenv`. If it shows a guide, you install pyenv successfully.

##### --- Useful Commands
+ `pyenv install [version]`: install python with "version"
+ `pyenv uninstall [version]`: uninstall python with "version"
+ `pyenv version`: display current version of Python
+ `pyenv versions`: display all versions of Python that you already installed

#### - Python <a id="python"></a>
##### --- Install

As learned from "Useful Commands" for pyenv, now we can use `pyenv install` to install.

For example, `pyenv install 3.6.1` will install Python 3.6.1.

Note that, if you fail to install, there are may two reasons:
+ Version is not valid or not existed. Command `pyenv install --list` will list up available versions.
+ Your pyenv is out of update. Update by `brew update pyenv` before installing.

##### --- Use Multiple versions

1. Go to the folder you are going to work in Terminal.
2. Type command `pyenv local [version]`. This indicates python [version] will be locally applied in this folder.
3. `pyenv version` examines whether you setup successfully.

#### - pyenv-virtualenv <a id="pyenvv"></a>

pyenv-virtualenv is not neccessary but improve experience. It activates a virtual environment so that user can work with specific python version anywhere under this environment. Here is the [link](https://github.com/pyenv/pyenv-virtualenv).

##### --- Install

Type `brew install pyenv-virtualenv` in Terminal.

##### --- Setup Environment

1. Open Terminal.
1. Go to home folder by typing `cd` or `cd ~` in Terminal.
1. Open **.bash_profile** (If not existed, just create one) by any editors (nano, vim, etc).
1. Type following code. Then save and exit editor.
```bash
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```
1. Make it effect immediately by typing `source .bash_profile` in Terminal

There are other options list in doc. You can check the [link](https://github.com/pyenv/pyenv-virtualenv) and setup by yourself.

##### --- Set and Activate Environment

1. Type command `pyenv virtualenv [version] [alias]` in Terminal. This will create a environment named "alias" with Python [version].

For example, `pyenv virtualenv 3.6.1 py361` will create a environment "py361" with Python 3.6.1.

1. Type command `pyenv activate [alias]` in Terminal. It actives the environment named "alias".

For example, `pyenv activate py361` will activate the environment named "py361".

If you forget, check list of created virtual environment by `pyenv virtualenvs`.

Additionally, `pyenv deactivate` will leave this virtual environment.

Note that, we only can create virtual environment with installed python version.
