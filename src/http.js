import { Deferred } from 'jquery';

// Mock implementation
function start() {
  return Deferred().resolve([
    {
      name: "login",
      type: "link",
      url: "/login",
      method: "POST",
      parameters: [
        {
          name: "username",
          label: "Username",
          type: "text"
        },
        {
          name: "password",
          label: "Password",
          type: "password"
        }
      ]
    },
    {
      name: "recent",
      type: "suggestions",
      files: [
        {
          id: 1,
          preview: "autumn-forest-nature-vivid-morning-260nw-766886038.webp",
          details: {
            url: "/files/1",
            method: "GET",
            parameters: []
          },
          uploader: {
            profile_picture: "logo512.png",
            name: "usermanXIV",
            details: {
              url: "/users/1",
              method: "GET",
              parameters: []
            }
          }
        },
        {
          id: 2,
          preview: "colorful-flower-on-dark-tropical-260nw-721703848.webp",
          details: {
            url: "/files/2",
            method: "GET",
            parameters: []
          },
          uploader: {
            profile_picture: "logo512.png",
            name: "usermanXIV",
            details: {
              url: "/users/1",
              method: "GET",
              parameters: []
            }
          }
        }
      ]
    }
  ]);
}

function ajax(request) {
  if(request.url === "/entry")
    return Deferred().resolve([
      {
        name: "login",
        type: "link",
        url: "/login",
        method: "POST",
        parameters: [
          {
            name: "username",
            label: "Username",
            type: "text"
          },
          {
            name: "password",
            label: "Password",
            type: "password"
          }
        ]
      },
      {
        name: "recent",
        type: "suggestions",
        files: [
          {
            id: 1,
            preview: "autumn-forest-nature-vivid-morning-260nw-766886038.webp",
            details: {
              url: "/files/1",
              method: "GET",
              parameters: []
            },
            uploader: {
              profile_picture: "logo512.png",
              name: "usermanXIV",
              details: {
                url: "/users/1",
                method: "GET",
                parameters: []
              }
            }
          },
          {
            id: 2,
            preview: "colorful-flower-on-dark-tropical-260nw-721703848.webp",
            details: {
              url: "/files/2",
              method: "GET",
              parameters: []
            },
            uploader: {
              profile_picture: "logo512.png",
              name: "usermanXIV",
              details: {
                url: "/users/1",
                method: "GET",
                parameters: []
              }
            }
          }
        ]
      }
    ]);
  if(request.url === "/files/1")
    return Deferred().resolve([
      {
        name: "image",
        type: "image",
        url: "autumn-forest-nature-vivid-morning-600w-766886038.webp",
        home: {
          url: "/entry",
          method: "GET",
          parameters: []
        },
        save: {
          url: "/library?file=1",
          method: "PUT",
          parameters: []
        },
        like: {
          url: "/"
        },
        likes: 0,
        tags: []
      }
    ]);
  if(request.url === "/files/2")
    return Deferred().resolve([
      {
        name: "image",
        type: "image",
        url: "colorful-flower-on-dark-tropical-600w-721703848.webp",
        save: {
          url: "/library?file=2",
          method: "PUT",
          parameters: []
        },
        likes: 0,
        tags: []
      }
    ]);
  if(request.url === "/login")
    return Deferred().resolve([{name: "hi", type: "hi"}]);
}

export default {
  start,
  ajax
}
