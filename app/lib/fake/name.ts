import { User } from "../dto/zuser"

const firstNames = [
  "Liam", "Noah", "Oliver", "Elijah", "James", "William", "Benjamin", "Lucas", "Henry", "Alexander",
  "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan", "Jackson", "Levi", "Sebastian", "Mateo",
  "Jack", "Owen", "Theodore", "Aiden", "Samuel", "Joseph", "John", "David", "Wyatt", "Matthew",
  "Luke", "Asher", "Carter", "Julian", "Grayson", "Leo", "Jayden", "Gabriel", "Isaac", "Lincoln",
  "Anthony", "Hudson", "Dylan", "Ezra", "Thomas", "Charles", "Christopher", "Jaxon", "Maverick", "Josiah",
  "Isaiah", "Andrew", "Elias", "Joshua", "Nathan", "Caleb", "Ryan", "Adrian", "Miles", "Eli",
  "Nolan", "Christian", "Aaron", "Cameron", "Ezekiel", "Colton", "Luca", "Landon", "Hunter", "Jonathan",
  "Santiago", "Axel", "Easton", "Cooper", "Jeremiah", "Angel", "Roman", "Connor", "Jameson", "Robert",
  "Greyson", "Jordan", "Ian", "Carson", "Jaxson", "Leonardo", "Nicholas", "Dominic", "Austin", "Everett",
  "Brooks", "Xavier", "Kai", "Jose", "Parker", "Adam", "Jace", "Wesley", "Kayden", "Silas",
  "Bennett", "Declan", "Waylon", "Weston", "Evan", "Emmett", "Micah", "Ryder", "Beau", "Damian",
  "Brayden", "Gael", "Rowan", "Harrison", "Bryson", "Sawyer", "Amir", "Kingston", "Jason", "Giovanni",
  "Vincent", "Ayden", "Chase", "Myles", "Diego", "Nathaniel", "Legend", "Jonah", "River", "Tyler",
  "Cole", "Braxton", "George", "Milo", "Zachary", "Ashton", "Luis", "Jasper", "Kaiden", "Adriel",
  "Gavin", "Bentley", "Calvin", "Zion", "Juan", "Maxwell", "Max", "Ryker", "Carlos", "Emmanuel",
  "Jayce", "Lorenzo", "Ivan", "Jude", "August", "Kevin", "Malachi", "Elliott", "Rhett", "Archer",
  "Karter", "Arthur", "Luka", "Elliot", "Thiago", "Brandon", "Camden", "Justin", "Jesus", "Maddox",
  "King", "Theo", "Enzo", "Matteo", "Emiliano", "Dean", "Hayden", "Finn", "Brody", "Antonio",
  "Abel", "Alex", "Tristan", "Graham", "Zayden", "Judah", "Xander", "Miguel", "Atlas", "Messiah",
  "Barrett", "Tucker", "Timothy", "Alan", "Edward", "Leon", "Dawson", "Eric", "Ace", "Victor",
  "Abraham", "Nicolas", "Jesse", "Charlie", "Patrick", "Walker", "Joel", "Richard", "Beckett", "Blake",
  "Alejandro", "Avery", "Grant", "Peter", "Oscar", "Matias", "Amari", "Lukas", "Andres", "Arlo",
  "Colt", "Adonis", "Kyrie", "Steven", "Felix", "Preston", "Marcus", "Holden", "Emilio", "Remington",
  "Jeremy", "Kaleb", "Brantley", "Bryce", "Mark", "Knox", "Israel", "Phoenix", "Kobe", "Nash",
  "Griffin", "Caden", "Kenneth", "Kyler", "Hayes", "Jax", "Rafael", "Beckham", "Javier", "Maximus",
  "Simon", "Paul", "Omar", "Kaden", "Kash", "Lane", "Bryan", "Riley", "Zane", "Louis",
  "Aidan", "Paxton", "Maximiliano", "Karson", "Cash", "Cayden", "Emerson", "Tobias", "Ronan", "Brian",
  "Dallas", "Maximilian", "Paulo", "Niko", "Malik", "Troy", "Hendrix", "Desmond", "Grady", "Raymond",
  "Grayson", "Benson", "Derek", "Walter", "Taylor", "Malcolm", "Dante", "Fabian", "Leonel", "Phoenix",
  "Reed", "Kian", "Korbin", "Rhys", "Samson", "Sterling", "Braylen", "Alec", "Brennan", "Colin",
  "Cyrus", "Gideon", "Holden", "Jared", "Jorge", "Kashton", "Kelvin", "Knox", "Lawson", "Lennox",
  "Mack", "Marco", "Mario", "Merrick", "Miller", "Odin", "Oscar", "Otis", "Porter", "Reid",
  "Roberto", "Ronin", "Rory", "Santino", "Spencer", "Stanley", "Sullivan", "Tanner", "Warren", "Wyatt",
  "Zachariah", "Zane", "Zayden", "Zeke", "Zion", "Abraham", "Adam", "Aiden", "Alec", "Alex",
  "Andrew", "Andy", "Angel", "Anthony", "Archie", "Asher", "Ashton", "Atlas", "Austin", "Axel",
  "Bennett", "Bentley", "Blake", "Brady", "Brandon", "Braxton", "Brendan", "Brody", "Brooks", "Bruce",
  "Bryce", "Caden", "Caleb", "Cameron", "Carson", "Carter", "Cash", "Chase", "Charlie", "Christian",
  "Christopher", "Cole", "Colin", "Connor", "Cooper", "Dallas", "Damian", "Daniel", "David", "Dawson",
  "Derek", "Dexter", "Diego", "Dominic", "Donovan", "Dylan", "Easton", "Eddie", "Edward", "Elias",
  "Elijah", "Elliot", "Emilio", "Emmett", "Ethan", "Ezra", "Felix", "Finn", "Francis", "Francisco",
  "Frank", "Gabriel", "Gage", "Garrett", "Gavin", "George", "Giovanni", "Graham", "Grant", "Grayson",
  "Gregory", "Greyson", "Griffin", "Gunnar", "Gustavo", "Hank", "Harper", "Harrison", "Hayden", "Hendrix",
  "Henry", "Holden", "Hudson", "Hunter", "Ian", "Isaac", "Isaiah", "Ivan", "Jack", "Jackson",
  "Jacob", "Jaden", "Jake", "James", "Jameson", "Jared", "Jasper", "Jaxon", "Jaxson", "Jay",
  "Jayce", "Jayden", "Jeffrey", "Jeremiah", "Jesse", "Jesus", "Joel", "John", "Johnny", "Jonah",
  "Jonathan", "Jordan", "Joseph", "Joshua", "Josiah", "Juan", "Judah", "Jude", "Julian", "Justin",
  "Kai", "Kaiden", "Kaleb", "Kayden", "Keegan", "Keith", "Kevin", "Killian", "King", "Knox",
  "Kyrie", "Landon", "Lane", "Leo", "Leon", "Leonardo", "Levi", "Liam", "Lincoln", "Logan",
  "Lorenzo", "Louis", "Luca", "Lucas", "Luis", "Luke", "Maddox", "Malachi", "Malcolm", "Marcus",
  "Mario", "Mark", "Marshall", "Mason", "Mateo", "Matthew", "Maverick", "Max", "Maximus", "Maxwell",
  "Merrick", "Micah", "Michael", "Miles", "Milo", "Mohamed", "Morgan", "Myles", "Nash", "Nathan",
  "Nathaniel", "Nicholas", "Nico", "Nolan", "Odin", "Oliver", "Omar", "Oscar",]

export const randomFirstName = () => firstNames[Math.floor(Math.random() * firstNames.length)]


const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
  "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
  "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
  "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
  "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
  "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
  "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes",
  "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham",
  "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson",
  "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens",
  "Harrison", "Fernandez", "McDonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen",
  "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter",
  "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Muñoz", "Hunt", "Hicks",
  "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox",
  "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens",
  "Soto", "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins",
  "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Santos", "Hart", "Bradley", "Knight", "Elliott",
  "Cunningham", "Duncan", "Armstrong", "Hudson", "Carroll", "Lane", "Riley", "Andrews", "Alvarado", "Ray",
  "Delgado", "Berry", "Perkins", "Hoffman", "Johnston", "Matthews", "Pena", "Richards", "Contreras", "Willis",
  "Carpenter", "Lawrence", "Sandoval", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins",
  "Greene", "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison",
  "Franklin", "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs", "O'Brien", "Lynch", "Singh",
  "Vega", "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson", "Gilbert", "Dean", "Sims",
  "Espinoza", "Howell", "Li", "Wong", "Reid", "Hanson", "Le", "McCoy", "Garrett", "Burton",
  "Fuller", "Wang", "Weber", "Welch", "Rocha", "Larson", "Guerrero", "George", "Chapman", "Rios",
  "Estrada", "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson",
  "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs",
  "O'Brien", "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson",
  "Gilbert", "Dean", "Sims", "Espinoza", "Howell", "Li", "Wong", "Reid", "Hanson", "Le",
  "McCoy", "Garrett", "Burton", "Fuller", "Wang", "Weber", "Welch", "Rocha", "Larson", "Guerrero",
  "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez",
  "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez",
  "Carr", "Lawson", "Jacobs", "O'Brien", "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Oliver",
  "Jensen", "Harvey", "Williamson", "Gilbert", "Dean", "Sims", "Espinoza", "Howell", "Li", "Wong",
  "Reid", "Hanson", "Le", "McCoy", "Garrett", "Burton", "Fuller", "Wang", "Weber", "Welch",
  "Rocha", "Larson", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene",
  "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin",
  "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs", "O'Brien", "Lynch", "Singh", "Vega",
  "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson", "Gilbert", "Dean", "Sims", "Espinoza",
  "Howell", "Li", "Wong", "Reid", "Hanson", "Le", "McCoy", "Garrett", "Burton", "Fuller",
  "Wang", "Weber", "Welch", "Rocha", "Larson", "Guerrero", "George", "Chapman", "Rios", "Estrada",
  "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago",
  "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs", "O'Brien",
  "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson", "Gilbert",
  "Dean", "Sims", "Espinoza", "Howell", "Li", "Wong", "Reid", "Hanson", "Le", "McCoy",
  "Garrett", "Burton", "Fuller", "Wang", "Weber", "Welch", "Rocha", "Larson", "Guerrero", "George",
  "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez", "Harper",
  "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr",
  "Lawson", "Jacobs", "O'Brien", "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Oliver", "Jensen",
  "Harvey", "Williamson", "Gilbert", "Dean", "Sims", "Espinoza", "Howell", "Li", "Wong", "Reid",
  "Hanson", "Le", "McCoy", "Garrett", "Burton", "Fuller", "Wang", "Weber", "Welch", "Rocha",
  "Larson", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene", "Nunez",
  "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson"
]

export const randomLastName = () => lastNames[Math.floor(Math.random() * lastNames.length)]

const domains = [
  "example.com", "mail.com", "test.com", "domain.com", "service.com",
  "webmail.com", "myemail.com", "inbox.com", "email.com", "mailer.com",
  "postbox.com", "netmail.com", "eletter.com", "fastmail.com", "epost.com",
  "mailbox.com", "letters.com", "postmail.com", "ezmail.com", "quickmail.com"
]

export const randomDomain = () => domains[Math.floor(Math.random() * domains.length)]

const links = [
  "https://www.lgrc.us/wp-content/uploads/2020/09/Bussinesswoman-Headshot-Placeholder.jpg",
  "https://ssw.uga.edu/wp-content/uploads/2018/03/Headshot-Placeholder-1.png",
  "https://pcad.edu/wp-content/uploads/2017/07/headshot-placeholder.jpg",
  "https://avatars.githubusercontent.com/u/1509420?v=4",
  "https://avatars.githubusercontent.com/u/11976836?v=4",
  "https://avatars.githubusercontent.com/u/952007?v=4",
  "https://yt3.googleusercontent.com/ytc/AIdro_m0JgCBMCYDFIhw7p5T9hzaXP71VvZbEiGDL33_kzeasw=s160-c-k-c0x00ffffff-no-rj",
  "https://yt3.googleusercontent.com/BOqXoLaL-2P-5-XDqgefvYkDKwYFdODfWwo5ljNa5C92fOJOLyFjzi8GLv2hphOsdoz6G80VTQ=s160-c-k-c0x00ffffff-no-rj",
  "https://yt3.googleusercontent.com/ky8pQskjM1aU_mHCqL_Atpa2Oqsg1B7cCbXBdl5Yhqy4Ml928vUgH6sMv9-VaOiAYHGU6U8PZQ=s160-c-k-c0x00ffffff-no-rj",
];

const getRandomLink = () => links[Math.floor(Math.random() * links.length)];




export const randomUser = () => {
  const givenName = randomFirstName()
  const surname = randomLastName()
  const email = `${givenName}.${surname}@${randomDomain().toLowerCase()}`.toLowerCase()
  return {
    givenName,
    surname,
    email,
    url: getRandomLink(),
    login: surname.toLowerCase() + Math.floor(Math.random() * 100),
    id: Math.floor(Math.random() * 1000) + "-" + Math.floor(Math.random() * 1000) + "-" + Math.floor(Math.random() * 1000),
  } as User
}
