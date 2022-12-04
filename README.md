# GitHub PR Comment Injection

A first-pass Chrome extension for adding a button to GitHub PRs as a convenience for pasting standard text into a comment.

See the [PR Coup! blog post](https://qahiccupps.blogspot.com/2022/12/pr-coup.html) for some background.

## Installation

* Copy this directory to somewhere local, call it `D`
* Browse to `chrome:://extensions`
* Turn on `Developer mode`
* Click `Load unpacked`
* Browse to `D` and select it

## Usage

Browse to a PR page on GitHub and scroll to the bottom. You should see a `Inject Comment` button.

Click it and the template will replace any text in the open comment text box.

## Notes

* I have tried to condition the extension to only apply to GitHub pull requests only
* You might need to refresh page to see the button. I haven't worked out why some routes to the page need it yet.

## References

* [Chrome extension examples](https://github.com/GoogleChrome/chrome-extensions-samples)
* [Stop `button` from submitting the form](https://www.w3schools.com/jsref/prop_pushbutton_type.asp)
* [Simple extension to add button](https://stackoverflow.com/questions/14068879/modify-html-of-loaded-pages-using-chrome-extensions/14069119#14069119)
* [PR icon](https://www.iconfinder.com/icons/298789/pull_git_request_icon)