# Bears10 Git Workflow Guide

This serves as a base guideline for collaborating Git workflow for the Bears10 team of the Chingu Voyage 3.

### Overview

The team will be using a Features branch workflow. This workflow will consist of a master, development, and features git branch on a central repository. The master branch will hold the official history of the project and the development branch will be an integration branch to branch releases off of that will be merged back into master and development. The features branch will be an integration branch for finished features that will be staged to merge into development for release.

![](/assets/git flow.png)

### Walkthrough

To begin every developer will clone the official repository.

```
git clone <repo uri>
git fetch origin
git reset --hard origin/master
```

This will clone the repository. Fetch all the central repository branches and resets the local copy to match the latest version.

Once the project is cloned locally the developer will create tracking branches for development and features. Developers will not push into these branches. These will serve as tracking purposes only.

```
git checkout development
git checkout features
```

Developers will work from the features branch. Every new feature the developer works on will have its own branch. Feature branches should have descriptive names like navbar-dropdown-menu or issue-\#4. New feature branches should be highly focused and short-lived to reduce the risk for merge conflicts and deployment challenges.

```
git checkout -b new-feature features

- git status / git add / git commit to new-feature
```

Developers should push new-features branches to central repository as a backup.

```
git push origin new-feature
```

When a feature is finished it can be pushed to the central repository and a pull request should be submitted to merge into the features branch.

When new features are merged into the features branch all developers should pull the features branch into their local copies.

```
git pull origin features
git merge features new-feature
```

This should keep everyone's branches up to date with the recent changes.

When the features branch has enough features to be released, it will be merged into development. When merges to development occur, developers should pull the changes locally.

```
git pull origin development
```

When a development is ready for a release a release branch will be branched off development to ready for release.  The release branch will be used to test, update documentation, and perform other release prep as needed. When the release branch is ready it will be merged into master and development and deleted.

```
git checkout -b release-1.0 development
- git status / git add / git commit to release-1.0

git checkout master
git merge release-1.0
git push
git checkout development
git merge release-1.0
git push
git branch -d release-1.0
```

Releases should be tagged.

```
git tag -a 1.0 -m "message"
git push --tags
```
