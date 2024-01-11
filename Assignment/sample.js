var cat = {
  name: 'Fluffyy',
  activities: ['play', 'eat cat food'],
  catFriends: [
    {
      name: 'bar',
      activities: ['be grumpy', 'eat bread omblet'],
      weight: 8,
      furColor: 'white'
    },
    {
      name: 'foo',
      activities: ['sleep', 'pre-sleep naps'],
      weight: 3
    }
  ]
};

var catFriendsActivities = [];
var totalWeight = 0;

// List all activities of catFriends and calculate total weight
for (var i = 0; i < cat.catFriends.length; i++) {
  catFriendsActivities = catFriendsActivities.concat(cat.catFriends[i].activities);
  totalWeight += cat.catFriends[i].weight;
}

console.log('Activities of Fluffyy\'s catFriends:', catFriendsActivities);
console.log('Total weight of catFriends:', totalWeight);
