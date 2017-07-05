import test from 'ava';

import gmaps = require('@google/maps');

test('top level shape', t => {
  t.is(typeof gmaps.createClient, 'function');
  t.is(typeof gmaps.cli, 'object');
});

test('cli shape', t => {
  const { cli } = gmaps;

  t.is(typeof cli.callback, 'function');
  t.is(typeof cli.parseArgs, 'function');
});

test('client shape', t => {
  const client = gmaps.createClient({ key: '' });

  t.is(typeof client.geocode, 'function');
});
