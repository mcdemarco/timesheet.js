/* global Lib, Timesheet */

(function(){
  'use strict';
  
  Lib.ready(function() {
    console.log('ads');
    
    /* jshint -W031 */
    new Timesheet('timesheet-default', 2002, 2013, [
      ['2002', '2002/09', 'A freaky awesome time', 'lorem'],
      ['2002/06', '2003/09', 'Some great memories', 'ipsum'],
      ['2003', 'Had very bad luck'],
      ['2003/10', '2006', 'At least had fun', 'dolor'],
      ['2005/02', '2006/05', 'Enjoyed those times as well', 'ipsum'],
      ['2005/07', '2005/09', 'Bad luck again', 'default'],
      ['2005/10', '2008', 'For a long time nothing happened', 'dolor'],
      ['2008/01', '2009/05', 'LOST Season #4', 'lorem'],
      ['2009/01', '2009/05', 'LOST Season #4', 'sit'],
      ['2010/02', '2010/05', 'LOST Season #5', 'lorem'],
      ['2008/09', '2010/06', 'FRINGE #1 & #2', 'ipsum']
    ]);

    document.querySelector('#switch-dark').addEventListener('click', function() {
      document.querySelector('body').className = 'index black';
    });

    document.querySelector('#switch-light').addEventListener('click', function() {
      document.querySelector('body').className = 'index white';
    });
  });
})();
