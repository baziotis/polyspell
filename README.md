# Overview

`polyspell` is a simple spellchecker/corrector for Modern Greek Polytonic
script. Currently it's in early development because we don't have available
dictionaries.

# How to Run

`polyspell` is a client-only program written in Javascript. You can just upload
it into a server and it will run by opening `index.html` with no further
configuration. If you want to run it in your local computer, you will need a
local server otherwise the `fetch()` instructinos won't work.

# Internals

`polyspell` uses the hunspell dictionaries, and `nspell` for corrections and
suggestions.

Most of the work on `polyspell` is: a) on performance (e.g., background workers
start pulling suggestions every time an incorrect word is found), and b) on the
front-end.