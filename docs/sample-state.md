```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Jay"
    }
    errors: []
  },
  menus: {
    1: {
      id: 1,
      price: 50,
      image_urls: ["pancake.jpeg", "pancake2.jpeg"],
      description: "Best home made pancake",
      location: "Brooklyn"
      score: 4,
      availability: 01/10/2017
      categories: ["american", "chicken", "breakfast"]
      // other_details_etc: ""
    }
  },
  menu_reviews: {
    1: {
      id: 1,
      menu_id: 7,
      rating: 3,
      body: "The best pancake I have ever had."
    }
  },
  reservations: {
    1: {
      id: 1,
      menu_id: 1,
      date: 01/10/2017
      // other_details_etc: ""
    }
  },
  host_detail: {
    6: {
      id: 6,
      username: "Kate",
      image_url: "kate.jpeg",
      description: "I'm the best cook ever"
    }
  },
  host_reviews: {
    17: {
      id: 17,
      host_id: 23,
      rating: 5,
      body: "best cook"
    }
  }


}
