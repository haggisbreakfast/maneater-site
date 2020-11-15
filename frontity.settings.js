const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Maneater",
      "description": "a band"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "home",
              "/"
            ],
            [
              "music",
              "/music/"
            ],
            [
              "socials",
              "/socials/"
            ],
            [
              "shows",
              "/shows/"
            ],
            [
              "posts",
              "/posts/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        },
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://www.maneater.dev.cc/wp-json",
          "homepage": "/",
          "postsPage": "/posts"

        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
