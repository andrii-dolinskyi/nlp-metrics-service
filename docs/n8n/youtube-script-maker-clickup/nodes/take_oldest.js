// Take Oldest: one request per poll. The others are picked up on the next runs.
const items = $input.all();
return items.length ? [items[0]] : [];
