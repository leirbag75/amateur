# Concept and Motivation

This is a proof of concept for Amateur, a web app for sharing and organizing
images. (Though at the moment, it's incomplete even for a proof of concept...)

The reason for this project is that I was dissatisfied with how apps for sorting
images tend to only allow the user to make a binary distinction between
favorites and non-favorites. This means the user has no way of distinguishing
between their absolute favorites, the ones they think are pretty good but not
amazing, and so on. Systems that allow the user to assign ratings out of five
stars mitigate this, but suffer from their own problem: In the context of
ratings out of five stars, a low rating is generally considered bad. If we
assume that users are specifically rating images they like, then this renders
the lower ratings either useless (because the user won't assign a low rating to
a file they like), or misleading (because if the user assigns a low rating to an
image because they like it but not especially so, then this will give the
impression that they actually dislike that image).

The solution I thought of, inspired by a manga-reading app called GANMA!, is to
allow users to like an image as many times as they want. Since a like is always
positive, this means that lower ratings carry no negative connotation. And since
there's no predefined maximum rating, the user can decide on their own scale for
rating images on.

In addition to this, I am planning to implement a tagging system. Hierarchical
directories generally don't seem to work well for images, since there's so much
overlap between categories.

The name "Amateur" is a reference to the root meaning of the word, namely
"lover" (which came to its present meaning by the progression "lover" -> "one
who practices a skill for fun as opposed to professionally" -> "a beginner,
hobbyist, or someone who's bad at something"), because this app would let you
like something as much as you want. 

# A Note on Architecture

At the moment, the back end is mocked out, but I'm trying to make this app
conform as much as possible to HATEOAS. This means that all URL's are
provided by the server, not constructed by the client.

One result of this is that forms are constructed automatically. The server tells
the client what actions are allowed on an object, what URL's to send to to
perform each action, what HTTP method to use, and what parameters are required.
The front end constructs a form with the required fields accordingly.

Another result is that the server's responses closely mirror the website's
interface. Essentially, the server emits a JSON skeleton of the website, and the
front end simply converts this to HTML.

# Running

To start the app, you'll need to have NPM installed. Once you do, open a
terminal in the project root directory and run

`npm install`

Then run

`yarn start`

To finish, with keyboard focus on the terminal, hit ctrl-C.

Since this is still very much a work in progress, many of the links won't work.
If you get to a state where you can't go back, hit F5 to return to the entry
point.
