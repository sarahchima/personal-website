---
title: "5 things you can do with Git- with examples"
date: "2020-06-03"
description: In this article, we'll discuss how to add remote repositories, change remote repositories, delete a branch locally and remotely, merge a file from one branch to another and undo a commit locally and remotely.
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1591202236/yancy-min-842ofHC6MaI-unsplash_1_fhvaov.jpg
tags: ["git", "software development"]
---

Okay, it's more of things I want to learn to do with git. I've used git for more some years now and I still find myself googling how to do some basic things in git. So this is my attempt at learning how to do some of these things by writing about it. I hope I succeed. Well, even if I don't at least I'll have a reference where I can easily find these commands. 

Before we move to learn these things, there's something a colleague of mine once told me. He told me that everything is possible with git and that nothing is lost in git. I don't know if the former part of his statement is entirely true but I bear that in mind every time I'm trying to do something with git. I believe that I'm going to find a command that will help me do what I need to do. I just have to google with the right words. If you are new to git, I want you to have that believe too. 

In this article, we'll consider how to do the following:

1. Add remote repositories
2. Change remote repositories
3. Delete a branch
4. Merge a file from one branch to another
5. Undo a commit locally and remotely

Though this article is intended for people with a basic knowledge of git, I'll do my best to explain terms as much as possible.

### 1. Add Remote Repositories
Remote repositories are versions of your projects that are stored on the internet or elsewhere. Adding a remote repository is a way of telling git where your code is stored. We do this using the URL of the repository. This could be the URL of your repository, another user's fork or even a completely different server. 

When you clone a repository, git implicitly adds that repository as the `origin` remote for you. To add a new git repository, you use this command. 

```
git remote add <shortname> <url>
```

where `shortname` is a unique remote name
and `url` is the url of the repository you want to add.

For example, if I want to add a repository with the shortname `upstream`, I can do this:

```
git remote add upstream https://github.com/sarahchima/personal-website.git
```

Remember that your shortname can be anything, it just has to be unique, i.e. different from what the names of the remote repositories you have. It should also be something you can easily remember for your sanity.

To view the list of remote URLs you have added, run the following command.
```
git remote -v
```
You'll see a list of the remote names and the URLs you have added. 

But what if you want to change these remote URLs. Let's move to the next git commands.

### 2. Change remote repositories
There are several reasons why you may want to change a remote URL. For example, I recently had to move from using `https` URLs to `SSH` URLs for a project I worked on.

To do this, you use the following command.

```
git remote set-url <an-existing-remote-name> <url>
```
For this command to work, the remote name has to be an existing remote name. That means it won't work if you've not added that remote name before. 

Using the example above, if I want to change the remote URL, I'll do this.

```
git remote set-url upstream git@github.com:sarahchima/personal-website.git
```

Remember to run `git remote -v` to verify that your change worked.

Enough of remote repositories. Let's move to something different.

### 3. Delete a branch both locally and remotely
A branch is a version of the repository that is different from the main working project. You may want to read up on git branches and how to add a branch if you are not familiar with it. 

#### Deleting a branch locally

To delete a branch locally, make sure you are not on the branch you want to delete. So you have to checkout out to a different branch and use the following command:

```
git branch -d <name-of-branch>
```
So if I want to delete a branch named `fix/homepage-changes`, I'll do the following:

```
git branch -d fix/homepage-changes
```

You can run `git branch` on your terminal to confirm that the branch has been successfully removed.

Sometimes, you may have to delete a branch you've already pushed to a remote repository. How can you do this?

#### Deleting a branch remotely
To delete a branch remotely, you use the following command:

```
git push <remote-name> --delete <name-of-branch>
```

Where `remote-name` is the name of the remote repository you want to delete the branch from. 

If I want to delete the branch `fix/homepage-changes` from `origin`, I'll do this:

```
git push origin --delete fix/homepage-changes
```

The branch will be deleted remotely now.

### 4. Merge a file from one branch to another
Sometimes, you may want to merge the content of a specific file in one branch into another. For example, you want to merge the content of a file `index.html` in the `master` branch of a project into the `development` branch. How can you do that? 

1. Checkout to the right branch(the branch you want to merge the file) if you've not already done so. In our case, it's the `development` branch.

```
git checkout development
```

2. Merge the file using the checkout --patch command.

```
git checkout --patch master index.html
```

If you want to completely overwrite the `index.html` file on the `development` branch with the one on the `master` branch, you leave out the `--patch` flag. 

```
git checkout master index.html
```

Also, leave out the `--patch` flag if the `index.html` file does not exist on the `development` branch.

### 5. Undo a commit

There are times when you committed your changes wrongly and you want to undo this commit. Sometimes, you may have even pushed the changes to a remote branch. How do you undo or delete this commit? Let's start with undoing a local commit.

#### How to undo a local commit
One way you can undo a commit locally is by using `git reset`. For example, if you want to undo the last commit made, you can run this command:
```
git reset --soft HEAD~1
```
The `--soft` flag preserves the changes you've made to the files you committed, only the commit is reverted. However, if you don't want to keep the changes made to the files, you can use the `--hard` flag instead like this:

```
git reset --hard HEAD~1
```
Note that you should use the `--hard` flag only when you are sure that you don't need the changes.

Also, note that `HEAD~1` points to the last commit. If you want to undo a commit before that, you can use `git reflog` to get a log of all previous commits. Then use the `git reset` command with the commit hash(the number you get at the beginning of each line of history). For example, if my commit hash is 9157b6910, I'll do this

```
git reset --soft 9157b6910 
```

#### How to undo a remote commit
There are times you want to undo a commit you have pushed to a remote repository. You can use `git revert` to undo it locally and push this change to the remote branch.

First, get the commit hash using git reflog.

```
git reflog
```
Then revert it. Assuming my commit hash is 9157b6910, I'll do the following:

```
git revert 9157b6910 
```

Finally, push this change to the remote branch.

### Summary
In this article, we discussed commands to do the following in git:
1. Add Remote Repositories
2. Change remote repositories
3. Delete a branch
4. Merge a file from one branch to another
5. Undo a commit locally and remotely

Maybe someday, I'll write about more things you can do with git. 

I hope you enjoyed reading the article. Thanks for reading.



