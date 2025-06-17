/**
 * @description Creates constructors for Video and MusicVideo using prototype-based syntax.
 * Each Video has a title and duration in seconds, and a watch() method.
 * MusicVideo extends Video and adds an artist property and a play() method.
 * Includes a mixed array of instances and demonstrates polymorphic behavior.
 * @author Alessandro Scattaglia
 * @output
 * You watched all 160 seconds of 'Lord of the Rings'
 * You watched 120 seconds of 'Interstellar'
 * You played 'Interstellar' by 'Hans Zimmer'
 * You watched all 200 seconds of 'The Matrix'
 * @example
 * let v1 = new Video({ title: 'Lord of the Rings', seconds: 160 });
 * let mv1 = new MusicVideo({ title: 'Interstellar', seconds: 300, artist: 'Hans Zimmer' });
 * v1.watch(); // You watched all 160 seconds of 'Lord of the Rings'
 * mv1.watch(120); // You watched 120 seconds of 'Interstellar'
 * mv1.play(); // You played 'Interstellar' by 'Hans Zimmer'
 */

function Video(config = {}) {
  this.title = config.title || 'Untitled';
  this.seconds = config.seconds || 0;
}

Video.prototype.watch = function(x) {
  if (x === undefined) {
    console.log(`You watched all ${this.seconds} seconds of '${this.title}'`);
  } else {
    console.log(`You watched ${x} seconds of '${this.title}'`);
  }
};

function MusicVideo(config = {}) {
  Video.call(this, config);
  this.artist = config.artist || 'Unknown Artist';
}

MusicVideo.prototype = Object.create(Video.prototype);
MusicVideo.prototype.constructor = MusicVideo;

MusicVideo.prototype.play = function() {
  console.log(`You played '${this.title}' by '${this.artist}'`);
};

const items = [
  new Video({ title: 'Lord of the Rings', seconds: 160 }),
  new MusicVideo({ title: 'Interstellar', seconds: 300, artist: 'Hans Zimmer' }),
  new Video({ title: 'The Matrix', seconds: 200 })
];

for (const item of items) {
  item.watch(item instanceof MusicVideo ? 120 : undefined);
  if (item instanceof MusicVideo) {
    item.play();
  }
}
