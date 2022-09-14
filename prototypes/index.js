const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(data) {
    // Return an array of just the names of kitties who are orange e.g.
      // ['Tiger', 'Snickers']

      /* CODE GOES HERE */
      const filteredItems = data.filter((item) => {
        return item.color === 'orange';
      });

      const getNames = filteredItems.map((item) => {
        return item.name;
      });

      return getNames;
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge(data) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
      const orderItems = data.sort((a,b) =>  b.age - a.age);

      return orderItems;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(data) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    
    /* CODE GOES HERE */
    const growUpItem = data.map((items) => {
      const item = items;
      item.age += 2;
      return item;
    });
    
    const orderItems = growUpItem.sort((a,b) =>  b.age - a.age);

    return orderItems;
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(dataClubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */

      // map member list of each club
      // get member list and create array string with all members of each list
      // check member list in array string and get only one member and remove duplicates
      const getMembers = dataClubs.map((club) => {
        return club.members;
      })
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, cur) => {
        const member = acc.find((o) => o === cur);
        if (!member) {
          acc.push(cur);
        }
        return acc; 
      }, []);
      
      // new object
      const objMembers = {};
      
      // convert member to attirbute inside object
      for (var i = 0, len = getMembers.length; i < len; i++) {
        objMembers[getMembers[i]] = [];
      }
      
      // set clubs to member
      for (var i = 0, len = getMembers.length; i < len; i++) {
        objMembers[getMembers[i]] = dataClubs.map((itemClub) => {
          if (itemClub.members.includes(getMembers[i])) {
            return itemClub.club;
          }
        }).filter((dataClub) => dataClub !== undefined );
      };

      return objMembers;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod(dataMods) {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */

      // map mod
      // return an object with data
      // value studentsPerInstructor return 'dividing' <students> with <instructors> of each object
      const mapMods = dataMods.map((itemMod) => {
        return {
          mod: itemMod.mod,
          studentsPerInstructor: itemMod.students / itemMod.instructors,
        }
      });

      return mapMods;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake(dataCake) {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */

    // map dataCake
    // return new object with 'flavor' and 'inStock' as attributes
    const stockCakes = dataCake.map((itemCake) => {
      return {
        flavor: itemCake.cakeFlavor,
        inStock: itemCake.inStock,
      }
    });

    return stockCakes;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock(dataCake) {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */

    // map dataCake
    // filter dataCake and return only objects with value 1 or more in attribute 'inStock' 
    const stockCakes = dataCake.filter((cake) => cake.inStock > 0);
    
    return stockCakes;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory(dataCake) {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */

    const stockCakes = dataCake.reduce((acc, cur) => acc + cur.inStock, 0);

    return stockCakes;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings(dataCake) {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */

    const toppingsList = dataCake.map((cake) => {
      return cake.toppings;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const topping = acc.find((o) => o === cur);
      if (!topping) {
        acc.push(cur);
      }
      return acc;
    }, []);

    return toppingsList;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList(dataCake) {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */

    // map all toppings from all cakes
    // with reduces get all toppings and set in only array string.
    const getToppings = dataCake.map((cake) => {
      return cake.toppings;
    })
    .reduce((acc, curr) => acc.concat(curr), []);
    
    // here remove all duplicates
    const toppingList = getToppings.reduce((acc, cur) => {
      const topping = acc.find((o) => o === cur);
      if (!topping) {
        acc.push(cur);
      }
      return acc;
    }, []);
    
    // create a new object
    const objToppings = {};
    
    // convert all values in attributes
    for (var i = 0, len = toppingList.length; i < len; i++) {
      objToppings[toppingList[i]] = 0;
    }
    
    // here calculate the number filter in 'getToppings' where are all the toppings and set in each attribute
    for (var i = 0, len = toppingList.length; i < len; i++) {
      objToppings[toppingList[i]] = getToppings.filter((topping) => topping === toppingList[i]).length;
    }

    return objToppings;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms(dataClassRooms) {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */

    // filter dataClassRooms an return only program 'FE'
    const filteredClassRooms = dataClassRooms.filter((classroom) => classroom.program === 'FE');

    return filteredClassRooms;
    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities(dataClassRooms) {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */
    // 
    const getPrograms = dataClassRooms.map((classrooms) => {
      return classrooms.program;
    }).reduce((acc, cur) => {
      const topping = acc.find((o) => o === cur);
      if (!topping) {
        acc.push(cur);
      }
      return acc;
    }, []);
    
    // 
    const objPrograms = {};
    
    // 
    for (var i = 0, len = getPrograms.length; i < len; i++) {
      objPrograms[getPrograms[i].lowerCase() +'Capacity'] = classrooms.filter((cr) => cr.program === getPrograms[i]).reduce((acc, cur) => acc + cur.capacity, 0);
    }

    return objPrograms;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity(dataClassRooms) {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
    const orderCapacity = dataClassRooms.sort((a,b) => a.capacity - b.capacity)

    return orderCapacity;
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(dataBooks) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */
    const filterBooks = dataBooks.filter((book) => book.genre !== 'Horror').map((itemBook) => {
      return itemBook.title;
    });

    return filterBooks;
    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks(dataBooks) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    const filterBooks = dataBooks.filter((book) => book.published >= 1990).map((itemBook) => {
      return {
        title: itemBook.title,
        year:  itemBook.published
      };
    });

    return filterBooks;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(dataBooks, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    const filterBooks = dataBooks.filter((book) => book.published >= year).map((itemBook) => {
      return {
        title: itemBook.title,
        year:  itemBook.published
      };
    });

    return filterBooks;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    const filterWeather = dataWeather.map((itemWeather) => {
      return (itemWeather.temperature.high + itemWeather.temperature.low) / 2;
    });

    return filterWeather;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    const filterWeather = dataWeather.filter((item) => item.type.includes('sunny')).map((itemWeather) => { 
      return itemWeather.location + ' is ' + itemWeather.type;
    });

    return filterWeather;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity(dataWeather) {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
    const filterWeather = dataWeather.filter((item) => item.humidity > 80);

    return filterWeather;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList(dataNationalParks) {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */
    const objParksVisit = {
      parksVisited: [],
      parksToVisit: []
    };
    
    const filterParkToVisits = dataNationalParks.filter((park) => park.visited === true).map((itemPark) => {
      return itemPark.name;
    });
    
    const filterParksVisited = dataNationalParks.filter((park) => park.visited === false).map((itemPark) => {
      return itemPark.name;
    });
    
    objParksVisit.parksVisited = filterParksVisited;
    objParksVisit.parksToVisit = filterParkToVisits; 

    return objParksVisit;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState(dataNationalParks) {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
    const getLocations = dataNationalParks.map((park) => {
      return {
        [park.location]: park.name
      };
    });

    return getLocations;
    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities(dataNationalParks) {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
    const getActivities = dataNationalParks.map((park) => {
      return park.activities;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const activity = acc.find((o) => o === cur);
      if (!activity) {
        acc.push(cur);
      }
      return acc;
    }, []);

    return getActivities;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount(dataBreweries) {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    const getTotalBeers = dataBreweries.map((brewery) => {
      return brewery.beers;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const beer = acc.find((o) => o === cur);
      if (!beer) {
        acc.push(cur);
      }
      return acc; 
    }, []).length;
    
    return getTotalBeers;

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount(dataBreweries) {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */
    const getTotalBeersPerBrewery = dataBreweries.map((brewery) => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length,
      };
    });

    return getTotalBeersPerBrewery;

    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(dataBreweries, breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5

    /* CODE GOES HERE */
    const getTotalBeersPerBrewery = dataBreweries.find((itemBrewery) => itemBrewery.name === breweryName).beers.length;

    return getTotalBeersPerBrewery;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer(dataBreweries) {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
    const filterBeer = dataBreweries.map((brewery) => {
      return brewery.beers;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .find((beer) => beer.abv >= 10.9);

    return filterBeer;

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(dataBoardGames, type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */
    const getListGames = dataBoardGames[type]
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, cur) => {
        const member = acc.find((o) => o === cur.name);
        if (!member) {
          acc.push(cur.name);
        }
        return acc; 
      }, []);

      return getListGames;

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(dataBoardGames, type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */
    const getListGames = dataBoardGames[type]
      .reduce((acc, curr) => acc.concat(curr), [])
      .reduce((acc, cur) => {
        const member = acc.find((o) => o === cur.name);
        if (!member) {
          acc.push(cur.name);
        }
        return acc; 
      }, []).sort((a,b) =>  a - b);

    return getListGames;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(dataBoardGames, type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */
    const getGamesPerRating = dataBoardGames[type]
      .sort((a,b) =>  b.rating - a.rating).shift();

    return getGamesPerRating;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(dataBoardGames, type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    const lengthGame = dataBoardGames[type].length;
    const getAverageRating = dataBoardGames[type].reduce((acc, cur) => acc + cur.rating, 0) / lengthGame;

    return getAverageRating;
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(dataBoardGames, type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    const lengthGame = dataBoardGames[type].filter((itemGame) => itemGame.maxPlayers === maximumPlayers).length;
    const getAverageRating = dataBoardGames[type].filter((itemGame) => itemGame.maxPlayers === maximumPlayers)
      .reduce((acc, cur) => acc + cur.rating, 0) / lengthGame;

    return getAverageRating;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor(dataInstructors, dataCohorts) {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */
    const getDataInstructor = dataInstructors.map((itemInstructor) => {
      return {
        name: itemInstructor.name,
        studentCount: dataCohorts.find((itemCohorts) => itemCohorts.module === itemInstructor.module).studentCount,
      }
    });

    return getDataInstructor;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor(dataInstructors, dataCohorts) {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */
    const getCohorts = dataCohorts.map((cohort) => {
      return cohort.cohort;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const member = acc.find((o) => o === cur);
      if (!member) {
        acc.push(cur);
      }
      return acc; 
    }, []);
    
    const objCohorts = {};
    
    for (var i = 0, len = getCohorts.length; i < len; i++) {
      const itemCohort = dataCohorts.find((co) => co.cohort === getCohorts[i]);
      const nroInstructor = dataInstructors.filter((instructor) => instructor.module === itemCohort.module).length;
      objCohorts[getCohorts[i]] = itemCohort.studentCount / nroInstructor;
    }

    return objCohorts;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher(dataInstructors, dataCohorts) {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */
    const getInstructor = dataInstructors.map((instructor) => {
      return instructor.name;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const instructor = acc.find((o) => o === cur);
      if (!instructor) {
        acc.push(cur);
      }
      return acc; 
    }, []);
    
    const objInstructor = {};
    
    for (var i = 0, len = getInstructor.length; i < len; i++) {
      const moduleInstructor = dataInstructors.find((instructor) => instructor.name === getInstructor[i]);
      console.log(moduleInstructor.name);
      const getModulePerInstructor = dataCohorts
        .filter((cohort) => cohort.curriculum.some((cur) => moduleInstructor.teaches.includes(cur)));
      console.log(getModulePerInstructor);
      
      const nroModules = getModulePerInstructor.map((itemCohort) => {
        return itemCohort.module;
      });
      
      objInstructor[getInstructor[i]] = nroModules;
    }

    return objInstructor;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher(dataInstructors, dataCohorts) {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */
    const getCohorts = dataCohorts.map((cohort) => {
      return cohort.curriculum;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const curriculum = acc.find((o) => o === cur);
      if (!curriculum) {
        acc.push(cur);
      }
      return acc; 
    }, []);
    
    const objCohorts = {};
    
    for (var i = 0, len = getCohorts.length; i < len; i++) {
      const getInstructor = dataInstructors
        .filter((instructor) => instructor.teaches.includes([getCohorts[i]][0]));
    
      const getNamesInstructors = getInstructor.map((instructor) => {
        return instructor.name;
      })
    
      objCohorts[getCohorts[i]] = getNamesInstructors;
    }

    return objCohorts;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty(dataBosses, dataSidekicks) {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
    const filterBoss = dataSidekicks.map((sidekick) => {
      return sidekick.boss;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const member = acc.find((o) => o === cur);
      if (!member) {
        acc.push(cur);
      }
      return acc; 
    }, []);
    
    const bossLoyalty = filterBoss.map((boss) => {
      return {
        bossName: boss,
        sidekickLoyalty: dataSidekicks.filter((sideKicks) => sideKicks.boss === boss).reduce((acc, cur) => acc + cur.loyaltyToBoss, 0),
      }
    })
    
    return bossLoyalty;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations(dataConstellations, dataStars) {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor(dataConstellations, dataStars) {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */
    const filterColor = dataStars.map((stars) => {
      return stars.color;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const color = acc.find((o) => o === cur);
      if (!color) {
        acc.push(cur);
      }
      return acc; 
    }, []);
    
    const objColors = {};
    
    for (var i = 0, len = filterColor.length; i < len; i++) {
      objColors[filterColor[i]] = 0;
    }
    
    for (var i = 0, len = filterColor.length; i < len; i++) {
      objColors[filterColor[i]] = dataStars.filter((star) => star.color === filterColor[i]);
    }

    return objColors;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn(dataConstellations, dataStars) {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    /* CODE GOES HERE */
    const filterConstellation = dataStars.map((stars) => {
      return stars.constellation;
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, cur) => {
      const constellation = acc.find((o) => o === cur);
      if (!constellation) {
        acc.push(cur);
      }
      return acc; 
    }, []).filter((co) => co !== '');

    return filterConstellation;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage(dataCharacters, dataWeapons) {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */
    const getCharacters = dataCharacters.map((character) => {
      return character.name;
    }).reduce((acc, cur) => {
      const character = acc.find((o) => o === cur);
      if (!character) {
        acc.push(cur);
      }
      return acc;
    }, []);
    
    
    const objCharacters = {};
    
    for (var i = 0, len = getCharacters.length; i < len; i++) {
      objCharacters[getCharacters[i]] = {
        damage: 0,
        range: 0
      };
    }
    
    for (var i = 0, len = getCharacters.length; i < len; i++) {
      const getWeaponCharacter = dataCharacters.find((character) => character.name === getCharacters[i]);
      
      for (var l = 0, len = getWeaponCharacter.weapons.length; l < len; l++) {
        const getWeapon = dataWeapons[getWeaponCharacter.weapons[l]];
        
        objCharacters[getCharacters[i]].damage += getWeapon.damage;
        objCharacters[getCharacters[i]].range += getWeapon.range;
      }
    }

    return objCharacters;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal(dataCharacters, dataWeapons) {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs(dataDinosaurs, dataHumans, dataMovies) {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */
    const getMovies = dataMovies.map((movie) => {
      return movie.title;
    }).reduce((acc, cur) => {
      const movie = acc.find((o) => o === cur);
      if (!movie) {
        acc.push(cur);
      }
      return acc;
    }, []);
    
    const objMovies = {};
    
    for (var i = 0, len = getMovies.length; i < len; i++) {
      const dinosPerMovie = dataMovies.find((movie) => movie.title === getMovies[i]);
      
      for (var l = 0, len = dinosPerMovie.dinos.length; l < len; l++) {
        if (dinosPerMovie !== undefined) {
          const isAwesoneDino = dataDinosaurs[dinosPerMovie.dinos[l]];
        
          if (isAwesoneDino.isAwesome == true) {
            objMovies[getMovies[i]] += 1;
          }
        }
      }
    }

    return objMovies;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie(dataDinosaurs, dataHumans, dataMovies) {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors(dataDinosaurs, dataHumans, dataMovies) {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies(dataDinosaurs, dataHumans, dataMovies) {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
