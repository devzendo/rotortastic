rotortastic
===========
This is a simple web-based notepad application that can optionally encrypt notes
with a simple rotor-based encryption algorithm. 

The reason I wrote this is to learn a modern web development stack of React,
TypeScript, Material Design and GraphQL, tested and built automatically with
CircleCI and publishing to an AWS S3 bucket.


As with all my projects, I'm aiming for full test-driven development, to see how
this can be achieved with web projects.

Tech to be added as I go:
* Storybook
* A suitable AWS database for GraphQL instead of localstorage.

The application is hosted at http://rotortastic-devzendo-org.s3-website.eu-west-2.amazonaws.com/

A note on rotortastic's security
--------------------------------
The threat model here is against prying eyes. I'm not a qualified cryptographer:
GCHQ could probably crack this very easily. I have tools that can brute-force the
encrypted data - but for this project, strong crypto is _not_ the point: it's a
learning exercise for me. If you're interested in the algorithm, see
http://www.gumbley.me.uk/mr/algo.html .

If you're looking for a 'proper' encrypted web notebook, see https://standardnotes.org/ .


(C) 2020 Matt J. Gumbley
matt.gumbley@devzendo.org
@mattgumbley @devzendo

