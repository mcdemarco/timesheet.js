/**
 * Load Timesheet lib and fake a window object …
 */
window = {};
require(__dirname + '/../source/javascripts/timesheet.js');

var assert = require('assert');
suite('Timesheet', function() {
  test('Calculation', function(done) {
    var TS = new window.Timesheet();
    var months = 8;
	  
    assert.equal(months,  (TS.createBubble(60, 2012, TS.parseDate('2002'), TS.parseDate('2002'))).getMonths());
	assert.equal(months,  (TS.createBubble(60, 2012, TS.parseDate('2002'), TS.parseDate('2003'))).getMonths());
    assert.equal(2*months,  (TS.createBubble(60, 2012, TS.parseDate('2002'), TS.parseDate('2004'))).getMonths());
    assert.equal(months - 3,   (TS.createBubble(60, 2012, TS.parseDate('2002/04'), TS.parseDate('2002'))).getMonths());
    assert.equal(months - 3,   (TS.createBubble(60, 2012, TS.parseDate('2002/04'), TS.parseDate('2003'))).getMonths());
    assert.equal(2*months - 3,  (TS.createBubble(60, 2012, TS.parseDate('2002/04'), TS.parseDate('2004'))).getMonths());

    assert.equal(months,  (TS.createBubble(60, 2012, TS.parseDate('2002/04'), TS.parseDate('2003/04'))).getMonths());

    assert.equal(2*months,  (TS.createBubble(60, 2012, TS.parseDate('2002/04'), TS.parseDate('2004/04'))).getMonths());

    assert.equal(1,   (TS.createBubble(60, 2012, TS.parseDate('2002/04'))).getMonths());
    assert.equal(months,  (TS.createBubble(60, 2012, TS.parseDate('2002'))).getMonths());

    done();
  });
});
