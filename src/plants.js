export const categories = [
  {
    "name": "Easy-Care Favorites",
    "description": "A simple start to your indoor jungle.",
    "plants": [
      {
        "id": "snake-plant",
        "name": "Snake Plant",
        "price": 18,
        "description": "Upright leaves, easy-going nature.",
        "image": "images/snake-plant.jpg"
      },
      {
        "id": "zz-plant",
        "name": "ZZ Plant",
        "price": 22,
        "description": "Glossy green, effortlessly bold.",
        "image": "images/zz-plant.jpg"
      },
      {
        "id": "golden-pothos",
        "name": "Golden Pothos",
        "price": 15,
        "description": "Trailing vines with golden flecks.",
        "image": "images/golden-pothos.jpg"
      },
      {
        "id": "spider-plant",
        "name": "Spider Plant",
        "price": 14,
        "description": "Arching leaves and playful plantlets.",
        "image": "images/spider-plant.jpg"
      },
      {
        "id": "peace-lily",
        "name": "Peace Lily",
        "price": 20,
        "description": "Deep green leaves, white blooms.",
        "image": "images/peace-lily.jpg"
      },
      {
        "id": "cast-iron-plant",
        "name": "Cast Iron Plant",
        "price": 24,
        "description": "A resilient, leafy classic.",
        "image": "images/cast-iron-plant.jpg"
      }
    ]
  },
  {
    "name": "Tropical Statements",
    "description": "Make room for a little drama.",
    "plants": [
      {
        "id": "monstera-deliciosa",
        "name": "Monstera Deliciosa",
        "price": 32,
        "description": "Iconic leaves with natural splits.",
        "image": "images/monstera-deliciosa.jpg"
      },
      {
        "id": "fiddle-leaf-fig",
        "name": "Fiddle Leaf Fig",
        "price": 38,
        "description": "Big leaves. Beautiful presence.",
        "image": "images/fiddle-leaf-fig.jpg"
      },
      {
        "id": "rubber-plant",
        "name": "Rubber Plant",
        "price": 28,
        "description": "Rich, glossy foliage.",
        "image": "images/rubber-plant.jpg"
      },
      {
        "id": "bird-of-paradise",
        "name": "Bird of Paradise",
        "price": 42,
        "description": "Bring the tropics indoors.",
        "image": "images/bird-of-paradise.jpg"
      },
      {
        "id": "areca-palm",
        "name": "Areca Palm",
        "price": 35,
        "description": "Soft fronds, airy texture.",
        "image": "images/areca-palm.jpg"
      },
      {
        "id": "chinese-money-plant",
        "name": "Chinese Money Plant",
        "price": 19,
        "description": "Round leaves with personality.",
        "image": "images/chinese-money-plant.jpg"
      }
    ]
  },
  {
    "name": "Succulents & Cacti",
    "description": "Sculptural shapes for sunny spaces.",
    "plants": [
      {
        "id": "aloe-vera",
        "name": "Aloe Vera",
        "price": 16,
        "description": "A sun-loving succulent classic.",
        "image": "images/aloe-vera.jpg"
      },
      {
        "id": "jade-plant",
        "name": "Jade Plant",
        "price": 18,
        "description": "Plump leaves on branching stems.",
        "image": "images/jade-plant.jpg"
      },
      {
        "id": "echeveria",
        "name": "Echeveria",
        "price": 12,
        "description": "A beautifully balanced rosette.",
        "image": "images/echeveria.jpg"
      },
      {
        "id": "zebra-haworthia",
        "name": "Zebra Haworthia",
        "price": 13,
        "description": "Small size, striking stripes.",
        "image": "images/zebra-haworthia.jpg"
      },
      {
        "id": "burros-tail",
        "name": "Burro’s Tail",
        "price": 17,
        "description": "Cascading stems of plump leaves.",
        "image": "images/burros-tail.jpg"
      },
      {
        "id": "christmas-cactus",
        "name": "Christmas Cactus",
        "price": 21,
        "description": "Arching stems, seasonal color.",
        "image": "images/christmas-cactus.jpg"
      }
    ]
  }
];
export const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
