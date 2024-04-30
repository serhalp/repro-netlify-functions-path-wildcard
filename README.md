# Verifying Netlify Functions config `path` wildcard behavior

Verifying the behavior of Netlify Functions' `path` config option when a wildcard
is included.

To "repro":

1. Visit the root (`/`). This renders the static `index.html` page as expected
   (`preferStatic: true` specified on function).
2. Visit any other path, e.g. `/foo-bar-baz`.

Expected: a page with the message "This was rendered by the 'hello' function"

Observed: a 404
