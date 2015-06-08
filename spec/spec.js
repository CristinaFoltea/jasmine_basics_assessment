var grader=require('./../grader.js');
var grades=[
    {grade:'A', range:[90, 100]},
    {grade:'B', range:[80, 89]},
    {grade:'C', range:[70, 79]},
    {grade:'D', range:[60, 69]},
    {grade:'F', range:[0,  59]}
  ];
describe('#findTheScore() finds the corresponding the score ', function() {
  it('given an array with objects find the corresponding grade based on the score', function() {
 expect(grader.findTheScore(grades, 75)).toEqual('C');
 })});

 describe('#findTheScore() strech finds the corresponding the score ', function() {
   it('Add \'+\' and \'-\' grades.  So a 99 is actually a A+ and an 80 is a B-', function() {
  expect(grader.findTheScore(grades, 89)).toEqual('B+');
  })});

describe('#averageScore() finds the average score from a given array of scores', function() {
  it('returns the average score', function() {
 expect(grader.averageScore([90, 95, 87, 60])).toEqual(83);
 })});

describe('#medianScore() takes an array of test scores and calculates the median value', function() {
 it('returns the median score', function() {
expect(grader.medianScore([90, 95, 90, 87, 60])).toEqual(90);
})});

describe('#medianScore() takes an array of test scores and calculates the middle one', function() {
 it('if the number of scores is even return the average of the 2 middle ones', function() {
expect(grader.medianScore([90, 95, 90, 80, 87, 60])).toEqual(85);
})});

describe('#modeScore() takes an array of test scores and calculates the one that appers most often', function() {
 it('return the most frequent score', function() {
expect(grader.modeScore([90, 95, 90, 87, 80])).toEqual(90);
})});

describe('#modeScore() takes an array of test scores and calculates the one that appers most often', function() {
 it('return the most frequent score', function() {
expect(grader.modeScore([90, 95, 90, 87, 80, 80])).toEqual(['90', '80']);
})});
