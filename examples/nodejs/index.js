const IntervalTree = require("@flatten-js/interval-tree").default;

const composers = [
    {name: "Ludwig van Beethoven", period: [1770,1827]},
    {name: "Johann Sebastian Bach", period: [1685, 1750]},
    {name: "Wolfgang Amadeus Mozart", period: [1756, 1791]},
    {name: "Johannes Brahms", period: [1833, 1897]},
    {name: "Richard Wagner", period: [1813, 1883]},
    {name: "Claude Debussy", period: [1862, 1918]},
    {name: "Pyotr Ilyich Tchaikovsky", period: [1840, 1893]},
    {name: "Frédéric Chopin", period: [1810, 1849]},
    {name: "Joseph Haydn", period: [1732, 1809]},
    {name: "Antonio Vivaldi", period: [1678, 1741]}
];

// Composers who lived in 17th century
const tree = new IntervalTree();
for (let composer of composers)
    tree.insert(composer.period, composer.name);

const searchRes = tree.search( [1600,1700], (name, period) => {return {name : name, period: period.output()}} );

console.log(searchRes);
